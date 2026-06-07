export const bugReports = [
  {
    id: 1,
    title: "Infinite Loader During Transaction Processing",
    severity: "High",
    category: "State Management / Payment Processing",
    summary:
      "Transaction creation became stuck on an endless loading state when processing payments through the payment processing screen.",
    tags: ["High Severity", "Payments", "UI", "State Issues"],
    sections: {
      reproduction: [
        "Open the payment processing screen",
        "Select payment processor",
        "Configure processor settings",
        "Submit transaction",
        "Observe infinite loader on confirmation screen",
      ],
      investigation: [
        { step: "Frontend inspection", detail: "Checked React DevTools for state changes — component stuck in loading=true state" },
        { step: "Network analysis", detail: "No pending network requests; API call never fired" },
        { step: "API response validation", detail: "Manually triggered endpoint via Postman — API returned 200 with correct data" },
        { step: "Log analysis", detail: "Backend logs showed successful transaction processing" },
        { step: "State transition verification", detail: "Found race condition: modal state reset before API call subscription" },
      ],
      rootCause:
        "Race condition in state management. The modal component reset its internal state when receiving the transaction response, which happened before the API call subscription was registered. This caused the success handler to never execute, leaving the loading spinner visible indefinitely.",
      businessImpact:
        "Customer cannot complete payment, leading to potential payment loss and reduced trust in the platform. Support team receives escalation requests for stuck transactions.",
      technicalDetails: {
        code: `// Before (buggy)
useEffect(() => {
  setLoading(true)
  createTransaction(data)
  setLoading(false) // resets before subscription
}, [data])

// After (fixed)
useEffect(() => {
  setLoading(true)
  createTransaction(data).then(() => {
    setLoading(false)
  })
}, [data])`,
        apiExample: {
          request: 'POST /api/v1/transactions\n{\n  "amount": 500,\n  "currency": "EUR",\n  "processor": "stripe"\n}',
          response: '200 OK\n{\n  "id": "txn_123",\n  "status": "completed",\n  "amount": 500\n}',
        },
      },
    },
  },
  {
    id: 2,
    title: "Duplicate Charge After Payment Timeout",
    severity: "Critical",
    category: "Payment Processing / Idempotency",
    summary:
      "Users were charged twice when a payment request timed out and was retried without idempotency keys.",
    tags: ["High Severity", "Payments", "API", "Database"],
    sections: {
      reproduction: [
        "Initiate payment of €500",
        "Simulate network delay on first request",
        "Wait for timeout error in UI",
        "Click 'Retry' button",
        "Check bank statement — two charges of €500 appear",
      ],
      investigation: [
        { step: "Network analysis", detail: "Identified two POST requests to /charge endpoint with same payload" },
        { step: "API response validation", detail: "Both requests returned 200 OK with different transaction IDs" },
        { step: "Database inspection", detail: "Two separate transaction records found with different IDs but same amount and source" },
        { step: "Idempotency check", detail: "No idempotency key implementation on payment endpoint" },
      ],
      rootCause:
        "The payment endpoint lacked idempotency key support. When the client retried a timed-out request, the server processed it as a new, independent transaction instead of recognizing it as a retry of the original request.",
      businessImpact:
        "Customers overcharged, leading to refund requests, chargebacks, loss of trust, and potential regulatory penalties for incorrect transaction processing.",
      technicalDetails: {
        apiExample: {
          request: 'POST /api/v1/payments\nHeaders: {\n  "Idempotency-Key": "missing"\n}\nBody: {\n  "amount": 500,\n  "currency": "EUR",\n  "source": "card_token_xxx"\n}',
          response: '200 OK (both requests)\n{\n  "id": "ch_1",\n  "status": "succeeded"\n}\n{\n  "id": "ch_2",\n  "status": "succeeded"\n}',
        },
      },
    },
  },
  {
    id: 3,
    title: "CRM-Payment Status Desynchronization",
    severity: "High",
    category: "Data Synchronization / CRM",
    summary:
      "Payment status in CRM did not update after successful transaction, showing 'Pending' instead of 'Completed'.",
    tags: ["High Severity", "CRM", "Payments", "Database"],
    sections: {
      reproduction: [
        "Process a payment successfully",
        "Navigate to CRM order details",
        "Observe payment status remains 'Pending'",
        "Refresh page — status still shows 'Pending'",
        "Check database — transactions table shows 'completed'",
      ],
      investigation: [
        { step: "Frontend inspection", detail: "UI displays status from CRM API response" },
        { step: "API response validation", detail: "CRM API GET /api/crm/orders/{id} returns status='pending'" },
        { step: "Database inspection", detail: "Found payment record with status='completed' but CRM order record with status='pending'" },
        { step: "Webhook/event analysis", detail: "Payment service webhook was not received by CRM service" },
        { step: "Log analysis", detail: "Network timeout between payment service and CRM during event delivery" },
      ],
      rootCause:
        "The payment service failed to deliver the webhook status update to the CRM due to a transient network error. The CRM had no retry mechanism or fallback sync process, causing permanent status desynchronization.",
      businessImpact:
        "Support team cannot accurately determine payment status. Risk team sees incorrect data for reconciliation. Manual correction required for each affected transaction.",
      technicalDetails: {
        code: `// Expected flow:
Payment Service --[webhook: status=completed]--> CRM --> Update Order Status

// Actual flow:  
Payment Service --[webhook failed (timeout)]--> CRM --> Status stays 'Pending'
// No retry. No dead letter queue. No reconciliation job.`,
      },
    },
  },
  {
    id: 4,
    title: "Incorrect Fee Calculation in Transaction Summary",
    severity: "Medium",
    category: "Financial Calculations / UI",
    summary:
      "Transaction fee was calculated incorrectly, showing fee=€20 on a €500 transaction with 2.5% fee rate.",
    tags: ["Payments", "UI", "Database"],
    sections: {
      reproduction: [
        "Create a payment of €500 with 2.5% processing fee",
        "Review transaction summary before confirmation",
        "Notice fee displayed as €20 instead of €12.50",
        "Complete transaction",
        "Check final amount — incorrect fee persisted",
      ],
      investigation: [
        { step: "Frontend inspection", detail: "Fee component uses hardcoded calculation in JSX" },
        { step: "Calculation validation", detail: "Formula used: amount * 0.04 (4%) instead of amount * 0.025 (2.5%)" },
        { step: "API response validation", detail: "Backend returns correct fee calculation in response" },
        { step: "Database verification", detail: "Stored transaction has correct fee from backend" },
      ],
      rootCause:
        "Frontend used an outdated fee percentage constant (4%) instead of the correct value (2.5%) from the backend configuration. The display calculation was duplicated frontend logic rather than using the server-calculated fee.",
      businessImpact:
        "Customers see incorrect fee amounts, causing confusion and support inquiries. If confirmed, overcharged customers may request refunds.",
      technicalDetails: {
        apiExample: {
          request: 'GET /api/v1/transactions/{id}/summary',
          response: '{\n  "amount": 500,\n  "fee_rate": 2.5,\n  "calculated_fee": 12.50,\n  "total": 512.50\n}',
        },
      },
    },
  },
  {
    id: 5,
    title: "Webhook Duplicate Delivery Causes Double Accounting",
    severity: "Critical",
    category: "Webhook / Payment Processing",
    summary:
      "Duplicate webhook delivery caused double accounting entries in the financial reporting system.",
    tags: ["High Severity", "Payments", "API", "Database"],
    sections: {
      reproduction: [
        "Trigger a test payment webhook",
        "Check accounting system — entry recorded once",
        "Simulate webhook retry (as per normal delivery mechanism)",
        "Observe duplicate entry created",
        "Verify no idempotency check on webhook receiver",
      ],
      investigation: [
        { step: "Webhook log analysis", detail: "Two identical webhook payloads received 2 seconds apart" },
        { step: "API endpoint inspection", detail: "Webhook receiver endpoint had no idempotency validation" },
        { step: "Database check", detail: "Two identical accounting entries with different IDs" },
        { step: "Business logic review", detail: "Each webhook creates a new accounting entry unconditionally" },
      ],
      rootCause:
        "The webhook receiver endpoint lacked idempotency key validation. Payment gateway's at-least-once delivery guarantee combined with no deduplication logic caused duplicate processing.",
      businessImpact:
        "Financial reports show inflated revenue figures. Reconciliation becomes time-consuming. Automated financial processes produce incorrect outputs.",
      technicalDetails: {
        code: `// Add idempotency check:
function processIncomingEvent(req, res) {
  const idempotencyKey = req.headers['webhook-id']
  if (await isDuplicateEvent(idempotencyKey)) {
    return res.status(200).json({ status: 'already_processed' })
  }
  await handleEventPayload(req.body)
  await markEventAsProcessed(idempotencyKey)
  res.status(200).json({ status: 'ok' })
}`,
      },
    },
  },
  {
    id: 6,
    title: "Subscription Renewal Charge Fails Silently",
    severity: "High",
    category: "Subscriptions / Billing",
    summary:
      "Subscription renewal failed but no notification was shown to the user or admin.",
    tags: ["High Severity", "Payments", "UI", "State Issues"],
    sections: {
      reproduction: [
        "Set up a subscription with automatic renewal",
        "Wait for renewal date",
        "Check subscription status — shows 'Active'",
        "Check payment history — renewal charge failed (card declined)",
        "Observe no error notification or status change",
      ],
      investigation: [
        { step: "Subscription flow review", detail: "Renewal cron job runs but fails silently on payment error" },
        { step: "Error handling inspection", detail: "Try/catch block swallows payment error without logging" },
        { step: "Notification system check", detail: "No notification sent to user or admin on failure" },
        { step: "Database state check", detail: "Subscription status remains 'active' despite failed payment" },
      ],
      rootCause:
        "Error handling in the subscription renewal job caught payment failures but neither logged them nor updated the subscription status. The user continued to receive service without active billing.",
      businessImpact:
        "Revenue loss from unpaid subscriptions. Users accumulate unpaid periods. Admin unaware of billing issues until manual reconciliation.",
      technicalDetails: {
        code: `// Before:
try {
  await processPayment(subscription)
} catch (error) {
  // silent fail — nothing happens
}

// After:
try {
  await processPayment(subscription)
} catch (error) {
  await logError('subscription_charge_failed', { subscriptionId, error })
  await subscription.update({ status: 'charge_failed' })
  await sendNotification(subscription.userId, 'charge_failed')
}`,
      },
    },
  },
]

export const bugReportFilters = [
  "High Severity",
  "Payments",
  "CRM",
  "API",
  "UI",
  "State Issues",
  "Database",
]
