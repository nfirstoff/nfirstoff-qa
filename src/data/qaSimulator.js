export const qaFeatures = [
  {
    id: "payment-form",
    name: "Payment Form",
    categories: {
      positive: [
        "Successful payment with valid card details",
        "Payment with different currencies (EUR, USD, GBP)",
        "Save card option works correctly",
      ],
      negative: [
        "Invalid card number format",
        "Expired card",
        "Insufficient funds",
        "CVC code incorrect",
      ],
      edgeCases: [
        "Special characters in cardholder name",
        "Extremely long cardholder name",
        "Rapid double-click on submit",
        "Browser back button after payment",
        "Zero amount payment",
      ],
      security: [
        "SQL injection in cardholder name field",
        "XSS in billing address",
        "Intercepting payment payload via proxy",
        "Sensitive data in URL parameters",
      ],
      api: [
        "Callback payload validation",
        "Retry mechanism when API times out",
        "Webhook signature verification",
        "Transaction status transitions (pending -> completed -> failed)",
      ],
      database: [
        "Transaction record persists correctly",
        "Payment amount matches database record",
        "Status consistency across tables",
        "Duplicate transaction prevention",
      ],
      crossBrowser: [
        "Payment form renders correctly in Chrome, Firefox, Safari, Edge",
        "Mobile Safari and Chrome rendering",
        "Screen reader compatibility for payment flow",
      ],
    },
  },
  {
    id: "subscription",
    name: "Subscription System",
    categories: {
      positive: [
        "Successful first payment and subscription activation",
        "Recurring payment on renewal date",
        "Renewal confirmation email sent",
        "Upgrade subscription plan",
        "Downgrade subscription plan",
      ],
      negative: [
        "Declined card during initial payment",
        "Expired card on renewal",
        "Insufficient funds for renewal",
        "Canceled subscription before renewal",
      ],
      edgeCases: [
        "Double callback from payment provider",
        "Duplicate charge on renewal day",
        "Browser refresh during subscription confirmation",
        "Retry logic when first payment fails",
        "Subscription on leap day (Feb 29)",
        "Proration for mid-cycle plan changes",
      ],
      security: [
        "Unauthorized plan change attempt",
        "Accessing another user's subscription details",
        "Manipulating subscription tier in request payload",
      ],
      api: [
        "Callback payload structure validation",
        "Transaction state transitions",
        "Retry mechanism for failed callbacks",
        "Webhook idempotency handling",
      ],
      database: [
        "Subscription status persistence after renewal",
        "Payment history integrity",
        "Correct billing dates calculation",
        "Data consistency between subscription and payments tables",
      ],
      crossBrowser: [
        "Subscription management page on all browsers",
        "Payment popup behavior across browsers",
        "Email client rendering of renewal notifications",
      ],
    },
  },
  {
    id: "chargeback",
    name: "Chargeback Flow",
    categories: {
      positive: [
        "Chargeback notification received and processed",
        "Funds correctly deducted from merchant account",
        "Chargeback status updated in CRM",
        "Customer notified about chargeback initiation",
      ],
      negative: [
        "Invalid chargeback dispute",
        "Chargeback after refund already issued",
        "Duplicate chargeback for same transaction",
      ],
      edgeCases: [
        "Partial chargeback on multi-item transaction",
        "Chargeback during currency conversion window",
        "Chargeback for transaction in pending status",
        "Multiple chargebacks on same account",
      ],
      security: [
        "Fake chargeback notification injection",
        "Chargeback amount manipulation",
        "Unauthorized chargeback status changes",
      ],
      api: [
        "Chargeback webhook payload validation",
        "Status transition accuracy",
        "Reporting accuracy for chargeback ratio",
      ],
      database: [
        "Correct fund reservation on chargeback",
        "Transaction history reflects chargeback correctly",
        "Reconciliation report accuracy",
      ],
      crossBrowser: [
        "Chargeback dispute form across browsers",
        "Evidence upload functionality",
      ],
    },
  },
  {
    id: "wallet-transfer",
    name: "Wallet Transfer",
    categories: {
      positive: [
        "Transfer between wallets completes successfully",
        "Transfer with different currencies",
        "Instant transfer to internal wallet",
        "Scheduled transfer executed on time",
      ],
      negative: [
        "Transfer with insufficient balance",
        "Transfer to invalid wallet address",
        "Transfer amount exceeds daily limit",
        "Transfer from frozen account",
      ],
      edgeCases: [
        "Transfer during network maintenance window",
        "Concurrent transfers from same wallet",
        "Transfer of maximum allowed amount",
        "Transfer to self (same wallet)",
        "Rounding issues with fractional amounts",
      ],
      security: [
        "Transfer API parameter tampering",
        "Man-in-the-middle on transfer request",
        "Recipient wallet manipulation",
        "Replay attack on transfer endpoint",
      ],
      api: [
        "Balance update after transfer",
        "Transaction ID generation and tracking",
        "Callback for external wallet transfers",
        "Retry idempotency",
      ],
      database: [
        "Atomic balance update (no lost funds)",
        "Transaction audit trail integrity",
        "Correct fee deduction recording",
      ],
      crossBrowser: [
        "Transfer confirmation screen rendering",
        "Notifications across platforms",
      ],
    },
  },
  {
    id: "user-registration",
    name: "User Registration",
    categories: {
      positive: [
        "Registration with valid data",
        "Email verification completes",
        "Welcome email sent",
        "Social login registration",
      ],
      negative: [
        "Registration with existing email",
        "Weak password rejected",
        "Invalid email format",
        "Required fields missing",
      ],
      edgeCases: [
        "Registration with special characters in name",
        "Very long email address",
        "Registration during server maintenance",
        "Double-click on register button",
        "Incomplete registration (abandon mid-flow)",
      ],
      security: [
        "Password brute force protection",
        "Email enumeration prevention",
        "SQL injection in registration fields",
        "Session fixation after registration",
      ],
      api: [
        "User creation API validation",
        "Email verification token expiry",
        "Duplicate submission handling",
      ],
      database: [
        "User data persists correctly",
        "Unique constraint enforcement",
        "Password hashing verification",
      ],
      crossBrowser: [
        "Registration form on all major browsers",
        "Mobile registration flow",
        "Password manager compatibility",
      ],
    },
  },
  {
    id: "kyc",
    name: "KYC Verification",
    categories: {
      positive: [
        "Successful document upload and verification",
        "Automated verification passes for clear documents",
        "Manual review triggered for borderline cases",
        "Verification status correctly updated",
      ],
      negative: [
        "Blurry document rejected",
        "Expired document rejected",
        "Invalid document type rejected",
        "Name mismatch between document and profile",
      ],
      edgeCases: [
        "Very large document file upload",
        "Unsupported file format",
        "Slow network during upload",
        "Browser tab closed during verification",
        "Document with non-Latin characters",
      ],
      security: [
        "Document access by unauthorized users",
        "Document tampering detection",
        "OCR injection attempts",
        "PII data exposure in API responses",
      ],
      api: [
        "Document upload API payload validation",
        "Verification webhook processing",
        "Status polling mechanism",
        "Retry logic for failed verification",
      ],
      database: [
        "Document metadata persistence",
        "Verification status audit trail",
        "PII data encryption verification",
      ],
      crossBrowser: [
        "Document upload UI across browsers",
        "Camera capture on mobile browsers",
        "WebGL/Canvas support for document processing",
      ],
    },
  },
]

export const qaCategories = [
  { id: "positive", label: "Positive Scenarios", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { id: "negative", label: "Negative Scenarios", color: "bg-red-50 text-red-700 border-red-200" },
  { id: "edgeCases", label: "Edge Cases", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { id: "security", label: "Security Risks", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { id: "api", label: "API Validation", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { id: "database", label: "Database Validation", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  { id: "crossBrowser", label: "Cross-browser Validation", color: "bg-slate-50 text-slate-700 border-slate-200" },
]
