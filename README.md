# Commitlint config file
For checking the commit messages, a configuration file (`commitlint.config.js`) with some rules is used, which can be individually adapted.
To find out what the rules are about and what rules can be used see:

https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md

## Using commitlint in the workflow

```bash
# get the correct commitlint configuration file
- name: Get commitlint config
  run: |
    curl https://raw.githubusercontent.com/fntsoftware/commitlint-config/main/cmd-commitlint.config.js \
      -o commitlint.config.js      

# use an commitlint github action for linting
- name: Check commit message
  uses: wagoid/commitlint-github-action@v5
  with:
    configFile: commitlint.config.js
    commitDepth: 1
```

## Setup commitlint for local testing

### Install

``` bash
# install npm dependencies
npm ci

# check if installation was successfull (help message should be shown)
npx commitlint
```

### Commitlint definition file
Create a file named `commitlint.config.js` with the following content.

``` javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://example.org',
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [2, 'always', ['feat','refactor','fix','docs','test','chore','ci','ui']],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
	'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100]
  },
};
```

### Testing
```bash
echo "feat(scope): new feature" | npx commitlint
```

alternatively you can read multiline input from a file:
```bash
cat input.txt | npx commitlint --config cmd-commitlint.config.js
```
or check actual commit message and using a separate config file stored at different location:
```bash
npx commitlint --from=HEAD~1 --config cmd-commitlint.config.js
```