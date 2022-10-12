module.exports = {
  '*.{ts,tsx,js}': 'eslint --fix',

  '*.{md,json}': filenames => `prettier --write ${filenames.join(' ')}`,
}
