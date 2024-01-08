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

## Structure
```
<type>(<scope?>): <subject!>
<BLANK LINE>
<body?>
<BLANK LINE>
<footer?>
```

## Setup commitlint for local testing

### Install

``` bash
# install npm dependencies
npm ci

# check if installation was successfull (help message should be shown)
npx commitlint
```

### Testing
```bash
echo "feat(scope): new feature" | npx commitlint --config cmd-commitlint.config.js
```

alternatively you can read multiline input from a file:
```bash
cat input.txt | npx commitlint --config cmd-commitlint.config.js
```
or check actual commit message and using a separate config file stored at different location:
```bash
npx commitlint --from=HEAD~1 --config cmd-commitlint.config.js
```
