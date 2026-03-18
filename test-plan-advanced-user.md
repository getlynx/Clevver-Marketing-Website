# Clevver Advanced User Test Plan (CLI)
**Audience:** Developers and power users working with the Clevver Agent CLI  
**Purpose:** Internal QA and demo checklist to validate the CLI experience for technical users and agent-driven workflows.  
**Last Updated:** March 17, 2026

---

## Prerequisites
- A Clevver account (Consumer or Business & Enterprise tier)
- macOS or Linux environment (amd64 or arm64)
- Access to a coding agent (Claude Code, GitHub Copilot, OpenAI Codex, etc.)
- Terminal access

---

## Test Tasks

### Task 1: Install the CLI and verify it's on your PATH
**Objective:** Confirm the CLI installs cleanly and is discoverable by agents.  
**Steps:**
- Run `curl -fsSL https://clevver.plnk.dev/install.sh | bash`
- Verify with `clevver --version` or `which clevver`

**Pass Criteria:** The CLI is installed and responds with a version number.

---

### Task 2: Authenticate via the command line
**Objective:** Confirm interactive login works from the terminal.  
**Steps:**
- Run `clevver login` with your credentials
- Verify the session with `clevver whoami --json`

**Pass Criteria:** `clevver whoami` returns your account details in JSON format.

---

### Task 3: Store a file with multiple tags
**Objective:** Confirm file upload and multi-tag assignment via CLI.  
**Steps:**
- Run `clevver store report.pdf --tags "reports, Q1"`
- Note the returned file ID

**Pass Criteria:** The CLI confirms the file was stored and returns a file ID.

---

### Task 4: List and filter files with JSON output
**Objective:** Confirm structured output for scripting and agent consumption.  
**Steps:**
- Run `clevver ls --tags "reports" --json`
- Verify the output is valid JSON and includes the file from Task 3

**Pass Criteria:** Valid JSON is returned containing the expected file(s).

---

### Task 5: Fetch a file by ID
**Objective:** Confirm file retrieval by ID produces an identical file.  
**Steps:**
- Run `clevver fetch <file-id> -o filename.ext`
- Compare the downloaded file to the original

**Pass Criteria:** The fetched file matches the original contents exactly.

---

### Task 6: Manage tags on an existing file
**Objective:** Confirm tags can be added and removed after storage.  
**Steps:**
- Run `clevver tag <id> --add "finance"`
- Run `clevver tag <id> --remove "Q1"`
- Verify with `clevver ls --tags "finance"`

**Pass Criteria:** The file appears under the new tag and no longer appears under the removed tag.

---

### Task 7: Batch store multiple files in one operation
**Objective:** Confirm bulk upload works via shell scripting or agent automation.  
**Steps:**
- Use a shell loop or ask your coding agent to store all files of a certain type in a directory (e.g., all `.png` files) with a shared tag
- Verify all files appear in `clevver ls`

**Pass Criteria:** All targeted files are stored with the correct shared tag.

---

### Task 8: Set up headless authentication with an environment variable
**Objective:** Confirm token-based auth works for CI/automation scenarios.  
**Steps:**
- Export `CLEVVER_TOKEN` in your shell environment
- Run a CLI command (e.g., `clevver whoami`) without interactive login

**Pass Criteria:** The command succeeds using only the environment variable for authentication.

---

### Task 9: Ask a coding agent to retrieve and summarize a file
**Objective:** Confirm end-to-end agent integration with the CLI.  
**Steps:**
- From Claude Code, Copilot, or Codex, ask the agent to `clevver fetch` a specific file
- Ask the agent to read the file and provide a summary or analysis

**Pass Criteria:** The agent retrieves the file and produces an accurate summary of its contents.

---

### Task 10: Batch retag files using agent automation
**Objective:** Confirm agents can perform multi-step tag management workflows.  
**Steps:**
- Ask your coding agent to list all files with a specific tag (e.g., "2024")
- Ask the agent to retag them (e.g., add "archive-2024" and remove "2024")
- Verify the changes with `clevver ls`

**Pass Criteria:** All targeted files have the new tag and no longer carry the old tag.

---

## Scoring

| Result | Definition |
|--------|-----------|
| **PASS** | Task completed successfully with expected outcome |
| **FAIL** | Task did not produce the expected outcome |
| **BLOCKED** | Task could not be attempted due to a dependency or environment issue |

**Target:** 10/10 PASS for production readiness.
