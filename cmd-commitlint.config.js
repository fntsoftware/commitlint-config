module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://fntgrp.sharepoint.com/sites/DevelopmentOperations/SitePages/GIT.aspx',
  rules: {
    'header-max-length': [2, 'always', 250],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [2, 'always', ['feat', 'refactor', 'fix', 'docs', 'test', 'chore', 'ci', 'ui']],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [0], // don't check the subject's case
    'subject-empty': [2, 'never'],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 250]
  },
};
