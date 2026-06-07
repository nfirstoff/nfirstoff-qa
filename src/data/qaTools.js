export const qaTools = [
  {
    id: "postman",
    name: "Postman",
    icon: "Postman",
    color: "#FF6C37",
    realUsage: "Daily API validation and callback testing across payment providers and internal services.",
    exampleInvestigation:
      "Validated webhook retry mechanism by simulating callback failures and verifying retry logic with exponential backoff. Created collection with 50+ payment flow test scenarios.",
    typicalTasks: [
      "Payment request/response validation",
      "Retry and timeout testing",
      "Webhook payload verification",
      "Environment configuration for dev/staging/prod",
      "Collection-based regression testing",
    ],
    whyItMatters:
      "Postman allows me to validate API contracts, simulate edge cases, and build reusable test collections that ensure API reliability across deployments.",
  },
  {
    id: "sql",
    name: "SQL",
    icon: "Database",
    color: "#336791",
    realUsage: "Data validation, defect investigation, and integrity checks across MS SQL Server and PostgreSQL databases.",
    exampleInvestigation:
      "Investigated transaction status mismatch by querying payment_transactions and orders tables. Found 47 records where status was 'completed' in payments but 'pending' in CRM, revealing a synchronization bug.",
    typicalTasks: [
      "Data integrity validation across tables",
      "Transaction audit trail verification",
      "Defect reproduction via database state",
      "Bulk data updates for test scenarios",
      "Complex joins for cross-system analysis",
    ],
    whyItMatters:
      "SQL is essential for validating data flows, finding inconsistencies that UI testing misses, and confirming that financial data is accurate from end to end.",
  },
  {
    id: "jira",
    name: "Jira",
    icon: "Jira",
    color: "#0052CC",
    realUsage: "Bug tracking, test management, and QA workflow organization in Agile teams.",
    exampleInvestigation:
      "Created structured bug reports with reproduction steps, environment details, logs, and severity. Maintained traceability between requirements, test cases, and defects.",
    typicalTasks: [
      "Bug report creation and triage",
      "Test case management",
      "Sprint planning and tracking",
      "QA workflow configuration",
      "Dashboard and reporting",
    ],
    whyItMatters:
      "Jira keeps QA work organized, traceable, and transparent. Well-structured issues help developers understand and fix bugs faster, reducing time-to-resolution.",
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    icon: "AzureDevops",
    color: "#0078D4",
    realUsage: "Test planning, execution tracking, and release management for enterprise QA processes.",
    exampleInvestigation:
      "Standardized and migrated test documentation from scattered spreadsheets into Azure DevOps Test Plans. Created organized test suites with linked requirements, reducing regression time by 30%.",
    typicalTasks: [
      "Test plan creation and execution",
      "Bug tracking and work item management",
      "Release pipeline validation",
      "Test case organization by feature area",
      "Shared parameter management",
    ],
    whyItMatters:
      "Azure DevOps provides enterprise-grade traceability from requirements through test execution to bug resolution, essential for regulated fintech environments.",
  },
  {
    id: "devtools",
    name: "Chrome DevTools",
    icon: "Chrome",
    color: "#4285F4",
    realUsage: "Frontend debugging, network analysis, and performance profiling during QA investigations.",
    exampleInvestigation:
      "Identified a race condition in payment modal by inspecting React component state changes in DevTools. Found that state reset occurred before API subscription was registered.",
    typicalTasks: [
      "Component state and props inspection",
      "Network request analysis",
      "Console error tracking",
      "Performance profiling",
      "Local storage and cookie inspection",
      "Mobile device emulation",
    ],
    whyItMatters:
      "DevTools is the first line of defense for frontend issues. It reveals what the application is actually doing versus what it should be doing.",
  },
  {
    id: "dbeaver",
    name: "DBeaver",
    icon: "DBeaver",
    color: "#372923",
    realUsage: "Database exploration, query execution, and cross-database comparison for data validation.",
    exampleInvestigation:
      "Used DBeaver to compare transaction records across MS SQL Server and PostgreSQL databases, identifying 12 records that existed in one but not the other due to a replication bug.",
    typicalTasks: [
      "Database exploration and schema analysis",
      "Complex query execution and debugging",
      "Cross-database data comparison",
      "Export/import for test data setup",
      "ER diagram visualization",
    ],
    whyItMatters:
      "DBeaver provides a unified interface for working with multiple database types, making it easier to validate data consistency across heterogeneous systems.",
  },
  {
    id: "proxy",
    name: "Proxy Tools",
    icon: "Shield",
    color: "#6B7280",
    realUsage: "Traffic interception, request modification, and security testing for payment flows.",
    exampleInvestigation:
      "Intercepted payment API requests to modify payload parameters and validate server-side validation. Discovered that amount field could be manipulated client-side without server validation.",
    typicalTasks: [
      "Request/response interception",
      "Payload modification for edge case testing",
      "Response manipulation for error simulation",
      "Latency simulation for timeout testing",
      "Security validation for sensitive data",
    ],
    whyItMatters:
      "Proxy tools reveal what truly travels over the network. They help identify security gaps, validation weaknesses, and timing-related issues that other tools cannot catch.",
  },
]
