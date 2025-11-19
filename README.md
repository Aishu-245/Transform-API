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
