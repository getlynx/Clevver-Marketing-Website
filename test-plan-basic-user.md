# Clevver Basic User Test Plan
**Audience:** Everyday users interacting with Clevver through AI chat interfaces (ChatGPT, Claude, etc.)  
**Purpose:** Internal QA and demo checklist to validate the core user experience for non-technical users.  
**Last Updated:** March 17, 2026

---

## Prerequisites
- A Clevver account (Getting Started or Consumer tier)
- Access to at least one AI chat platform (ChatGPT, Claude, etc.)
- Clevver integration enabled in the AI platform

---

## Test Tasks

### Task 1: Sign in to Clevver from an AI chat session
**Objective:** Confirm the user can authenticate with Clevver directly from an AI conversation.  
**Steps:**
- Open a ChatGPT or Claude session
- Ask the AI to connect to your Clevver account
- Confirm the AI responds with a successful login or account confirmation

**Pass Criteria:** The AI confirms the user is authenticated and can access their Clevver account.

---

### Task 2: Save a conversation summary to Clevver
**Objective:** Confirm the user can store AI-generated content to Clevver.  
**Steps:**
- In an active AI conversation, ask the AI to save a summary of the current session to Clevver
- Note the file ID or confirmation returned

**Pass Criteria:** The AI confirms the file was stored and returns a file ID or permanent URL.

---

### Task 3: Tag a saved file
**Objective:** Confirm the user can organize files using tags at the time of saving.  
**Steps:**
- Ask the AI to save a file to Clevver with a specific tag (e.g., "recipes" or "meeting-notes")
- Confirm the tag was applied

**Pass Criteria:** The AI confirms the file was saved with the specified tag.

---

### Task 4: List all files with a specific tag
**Objective:** Confirm the user can retrieve a filtered list of stored files by tag.  
**Steps:**
- Ask the AI to show all Clevver files tagged with a label used in a previous task (e.g., "Show me everything tagged 'recipes'")
- Review the returned list

**Pass Criteria:** The AI returns a list of files that includes the previously tagged file(s).

---

### Task 5: Retrieve a previously saved file
**Objective:** Confirm the user can access file contents from a prior session.  
**Steps:**
- Ask the AI to pull up a specific file saved earlier and display its contents
- Verify the contents match what was originally saved

**Pass Criteria:** The AI retrieves and displays the correct file contents.

---

### Task 6: Share a file using its permanent URL
**Objective:** Confirm permanent URLs work for sharing outside of AI sessions.  
**Steps:**
- Ask the AI to provide the permanent link for a stored file
- Open that link in a web browser

**Pass Criteria:** The file is accessible via the permanent URL in a browser.

---

### Task 7: Save a file from one AI platform and retrieve it from another
**Objective:** Confirm cross-platform portability of stored files.  
**Steps:**
- Save a file to Clevver via ChatGPT
- Open a separate Claude session and ask Claude to retrieve the same file from Clevver
- Verify the contents match

**Pass Criteria:** The file saved from one platform is fully accessible from the other.

---

### Task 8: Search stored files by keyword
**Objective:** Confirm the user can locate files without remembering exact tags or IDs.  
**Steps:**
- Ask the AI to find a file in Clevver based on a word or phrase from its name or contents
- Review the search results

**Pass Criteria:** The AI returns relevant files matching the search term.

---

### Task 9: Save an image or non-text file
**Objective:** Confirm Clevver handles non-text file types.  
**Steps:**
- Ask the AI to save a generated image, code snippet, or other non-text output to Clevver
- Confirm the file was stored successfully

**Pass Criteria:** The AI confirms the non-text file was stored with a file ID or permanent URL.

---

### Task 10: Verify a file is encrypted
**Objective:** Confirm the user can see that AES-256 encryption is applied.  
**Steps:**
- After saving a file, ask the AI to confirm the file's encryption status
- Review the storage confirmation details

**Pass Criteria:** The AI confirms AES-256 encryption was applied to the stored file.

---

## Scoring

| Result | Definition |
|--------|-----------|
| **PASS** | Task completed successfully with expected outcome |
| **FAIL** | Task did not produce the expected outcome |
| **BLOCKED** | Task could not be attempted due to a dependency or environment issue |

**Target:** 10/10 PASS for production readiness.
