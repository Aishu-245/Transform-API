# Transform-API

Small Express API for Echor Tech Task — provides a POST `/api/transform` endpoint.

## Project structure

- `src/index.js` — main Express server
- `package.json` — scripts and dependencies

## Prerequisites

- Node.js (14+ recommended)
- npm (bundled with Node.js)

## Install

```powershell
cd d:\Project4\Transform-API
npm install
```

## Run

```powershell
npm start
# Server listens on port 3000 by default
```

## Endpoints

- `GET /` — health endpoint, returns `Echor Transform API`
- `POST /api/transform` — accepts JSON `{ "sentence": "..." }` and returns:
  - `word_count` (number)
  - `unique_words` (array)
  - `reversed_sentence` (string)

Example using PowerShell `Invoke-RestMethod`:

```powershell
# GET /
Invoke-RestMethod -Method Get -Uri http://localhost:3000/

# POST /api/transform
Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/transform -Body (@{sentence="Hello, Node.js world!"} | ConvertTo-Json) -ContentType "application/json"
```

Example using `curl`:

```bash
curl -X POST http://localhost:3000/api/transform -H "Content-Type: application/json" -d '{"sentence":"Hello, Node.js world!"}'
```

## Submission notes

- **Git Link (submission):** `https://github.com/Aishu-245/Transform-API`
- **Published link field:** `NA`

---
Created and pushed from local workspace. If you want any additional docs or a license file, tell me and I will add it.
# Echor Transform API

Simple Express API for the Echor Tech task. Implements POST /api/transform.

Usage:

1. Install dependencies: npm install
2. Start: npm start
3. POST JSON to http://localhost:3000/api/transform

Example request:

{
  "sentence": "I love working with JavaScript and Node.js"
}

Expected response:

{
  "word_count": 7,
  "unique_words": ["i","love","working","with","javascript","and","node.js"],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}

Git submission: push this repository to your Git provider and submit the link. For the published link field, put 'NA'.
