const openai = require('openai');

const dotenv = require("dotenv");
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set.');
  process.exit(1);
}

openai.apiKey = openaiApiKey;
openai.organization = process.env.OPENAI_ORG;

