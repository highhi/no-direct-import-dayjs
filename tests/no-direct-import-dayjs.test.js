'use strict'

const rule = require('../rules/no-direct-import-dayjs')
const RuleTester = require('eslint').RuleTester
const tester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017
  }
})

const valid = [
  { code: '' },
  { code: 'const dayjs = "dayjs"' },
  { code: 'const dayjs = () => "dayjs"' },
  { code: 'const lodash = require("lodash")' },
  { code: 'import lodash from "lodash"' }
]
const invalid = [
  {
    code: 'const dayjs = require("dayjs")',
    errors: [
      { message: 'Do not import dayjs directly', type: 'CallExpression' }
    ]
  },
  {
    code: 'import dayjs from "dayjs"',
    errors: [
      { message: 'Do not import dayjs directly', type: 'ImportDeclaration' }
    ]
  }
]

tester.run('no-direct-import-dayjs', rule, { valid, invalid })
