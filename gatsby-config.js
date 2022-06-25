const fs = require('fs');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
// const path = require('path');

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

if (!activeEnv) {
  throw new Error('The GATSBY_ACTIVE_ENV environment variable is required but was not specified.');
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  activeEnv !== 'test' && `.env.local`,
  `.env.${activeEnv}.local`,
  `.env.${activeEnv}`,
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand(
      dotenv.config({
        path: dotenvFile,
      }),
    );
  }
});



module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [],
};
