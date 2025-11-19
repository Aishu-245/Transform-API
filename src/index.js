const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

function normalizeWord(word) {
  // Preserve dots inside words like node.js but strip surrounding punctuation
  // Trim punctuation except internal dots and apostrophes
  return word
    .replace(/^\W+|\W+$/g, '')
    .toLowerCase();
}

app.post('/api/transform', (req, res) => {
  const sentence = typeof req.body?.sentence === 'string' ? req.body.sentence : '';

  // Split on whitespace to keep tokens like 'Node.js' intact
  const tokens = sentence.trim().length ? sentence.split(/\s+/) : [];

  const normalized = tokens.map(t => normalizeWord(t)).filter(w => w.length > 0);

  const uniqueSet = [];
  const seen = new Set();
  for (const w of normalized) {
    if (!seen.has(w)) {
      seen.add(w);
      uniqueSet.push(w);
    }
  }

  const reversedSentence = tokens.slice().reverse().join(' ');

  res.json({
    word_count: normalized.length,
    unique_words: uniqueSet,
    reversed_sentence: reversedSentence
  });
});

app.get('/', (req, res) => res.send('Echor Transform API'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
