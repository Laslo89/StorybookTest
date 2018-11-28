module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  '*.json': ['prettier --write', 'git add'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write', 'git add'],
  '*.scss': ['stylelint --fix', 'prettier --write', 'git add'],
  '*.md': [
    'markdownlint -i "{src/api-clients/**, node_modules/}" docs/*.md *.md src/',
    'prettier --write',
    'git add',
  ],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
}
