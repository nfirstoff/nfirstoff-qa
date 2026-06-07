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
    id: "git-github",
    name: "Git & GitHub",
    icon: "GitBranch",
    color: "#F1502F",
    realUsage:
      "Version control for personal projects, QA utilities, and experiment code, including public repositories and shared examples for teams.",
    exampleInvestigation:
      "Used Git branches and commit history to isolate a regression in a test helper script: compared previous versions, identified the exact change that broke a payment verification query, and restored a working variant while preparing a cleaner fix.",
    typicalTasks: [
      "Hosting and maintaining public repositories with QA tools and examples",
      "Committing and reviewing changes to test scripts and utilities",
      "Creating branches for experiments and proof-of-concept implementations",
      "Using pull requests to track review comments and change history",
      "Cloning and exploring open-source projects to learn patterns and best practices",
    ],
    whyItMatters:
      "Consistent use of Git and GitHub over two years keeps QA-related code, utilities, and experiments transparent, reproducible, and easy to share with developers and future employers.",
  },
  {
    id: "jira",
    name: "Jira & Azure DevOps",
    icon: "Jira",
    color: "#0052CC",
    realUsage:
      "Bug tracking, test management, and QA workflow organization across Agile and enterprise environments using Jira and Azure DevOps.",
    exampleInvestigation:
      "Standardized and migrated test documentation from scattered spreadsheets into Azure DevOps Test Plans with linked requirements, reducing regression time by 30%. Created structured bug reports with reproduction steps, environment details, logs, and severity, maintaining full traceability from requirements through test execution to defect resolution.",
    typicalTasks: [
      "Structured bug reporting with reproduction steps, environment details, logs, and severity",
      "Test plan creation, organization, and execution tracking",
      "Full traceability from requirements through test cases to defect resolution",
      "QA workflow configuration and release pipeline validation",
    ],
    whyItMatters:
      "Well-structured issues and organized test suites help developers understand and fix bugs faster, while enterprise-grade traceability ensures every requirement is covered and every defect is tracked through resolution — essential for regulated fintech environments.",
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
    name: "Databases",
    icon: "DBeaver",
    color: "#372923",
    realUsage:
      "Day-to-day data validation, defect investigation, and cross-system consistency checks across PostgreSQL and MS SQL Server databases using SQL queries and a GUI client such as DBeaver.",
    exampleInvestigation:
      "Investigated a transaction amount discrepancy between PostgreSQL (payment service) and MS SQL Server (CRM) by writing SQL queries to compare records across both systems. Used DBeaver to connect to both databases, ran JOIN and EXCEPT queries to isolate mismatched rows, and identified 23 records where the calculated fee differed due to a rounding rule applied only on the CRM side.",
    typicalTasks: [
      "Schema analysis and understanding table relationships across PostgreSQL and MS SQL Server",
      "Writing and debugging SQL queries for both platforms",
      "Comparing datasets between environments and systems",
      "Preparing and loading test data for regression scenarios",
      "Visualizing relationships with ER diagrams where helpful",
    ],
    whyItMatters:
      "Strong database validation is critical in fintech because financial data integrity depends on consistent processing across heterogeneous systems. Writing SQL directly and using tools like DBeaver to unify access across PostgreSQL and MS SQL Server allows me to catch data mismatches, replication gaps, and logic errors that no UI test can detect.",
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
  {
    id: "evidence-tools",
    name: "Evidence Tools",
    icon: "Camera",
    color: "#7C3AED",
    realUsage:
      "Daily creation of clear, reproducible evidence for bugs, UX issues, and payment flow edge cases across web and backend scenarios.",
    exampleInvestigation:
      "Documented a payment failure sequence by combining annotated screenshots of each UI step (PixelTaken, Flameshot) with a short LICEcap GIF showing the full user journey and a Jam session capturing console and network logs, allowing developers to reproduce and fix the bug without additional clarification.",
    typicalTasks: [
      "Capturing step-by-step screenshots for bug reports",
      "Recording short GIFs of unstable flows and visual glitches",
      "Highlighting and annotating problematic UI elements or states",
      "Logging browser console and network activity with Jam for additional context",
      "Attaching structured visual evidence directly to Jira or Azure DevOps tickets",
    ],
    whyItMatters:
      "This evidence stack allows me to provide developers with precise, visual, and technical context, reducing back-and-forth questions and speeding up both reproduction and fix verification for critical fintech incidents.",
  },
  {
    id: "tms",
    name: "TMS",
    icon: "ClipboardList",
    color: "#8B5CF6",
    realUsage:
      "Test case management, execution tracking, and reporting across manual and automated testing cycles using Allure TestOps and TestRail.",
    exampleInvestigation:
      "Used Allure TestOps to aggregate results from manual test runs and automated regression suites, creating a unified dashboard that reduced release assessment time by 40%. In TestRail, organized test cases into reusable suites with linked requirements for end-to-end traceability.",
    typicalTasks: [
      "Test case creation, organization, and versioning in TestRail",
      "Aggregating manual and automated results in Allure TestOps dashboards",
      "Linking test cases to requirements and defects for full traceability",
      "Generating release readiness reports from execution data",
    ],
    whyItMatters:
      "A dedicated TMS keeps test documentation structured, execution visible, and results measurable — critical for fintech releases where every scenario must be tracked and signed off.",
  },
  {
    id: "ai-assistants",
    name: "AI Assistants",
    icon: "Sparkles",
    color: "#10B981",
    realUsage:
      "Regular use of AI assistants for complex analysis, research, and code-related tasks: Claude for deep reasoning and documentation, Perplexity for agent-style investigations, and code-oriented models (Codex, OpenCode, Antigravity) for generating and refining scripts, utilities, and test helpers.",
    exampleInvestigation:
      "Used Claude to break down a multi-provider payment incident into hypotheses and test ideas, then leveraged Perplexity in an agent workflow to explore API documentation and provider constraints, and finally applied a code-generation model to build a small Python harness that reproduced the edge case across sandbox environments.",
    typicalTasks: [
      "Clarifying complex fintech flows, API contracts, and retry policies with Claude",
      "Using Perplexity as an agent to explore documentation, logs, and change history for incidents",
      "Drafting SQL queries, data validation scripts, and small utilities with code-generation models",
      "Generating skeletons for automated tests or Postman pre-scripts and refining them manually",
      "Brainstorming alternative test strategies, risk areas, and regression scope before releases",
    ],
    whyItMatters:
      "This AI toolbox helps me move faster from problem to experiment: I can decompose complex incidents, validate ideas against documentation, and quickly prototype code or queries, while still keeping human control over final test design and verification.",
  },
  {
    id: "playwright",
    name: "Playwright",
    icon: "Play",
    color: "#45BA4B",
    realUsage:
      "Basic Playwright knowledge for simple UI automation, locator-based checks, assertions, and support of end-to-end testing workflows.",
    exampleInvestigation:
      "Used Playwright to write a simple end-to-end script verifying a payment form flow: filled card fields, submitted the form, and asserted the success message appeared, helping catch a regression in form validation before release.",
    typicalTasks: [
      "Writing basic locator-based UI checks for critical user paths",
      "Using Playwright assertions to validate page state and element visibility",
      "Supporting end-to-end smoke tests for key payment flows",
      "Exploring Playwright test runner for structured test organization",
    ],
    whyItMatters:
      "Even at a fundamental level, Playwright adds automation capabilities to a manual QA toolkit — enabling quick smoke checks, repeatable form validations, and a foundation to grow into more advanced test automation.",
  },
]
