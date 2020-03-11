'use strict'

function createReport(context, node) {
  context.report({ node, message: 'Do not import dayjs directly' })
}

module.exports = {
  create(context) {
    return {
      CallExpression: node => {
        if (
          node.callee.name === 'require' &&
          node.arguments[0].value === 'dayjs'
        ) {
          createReport(context, node)
        }
      },
      ImportDeclaration: node => {
        if (node.source.type === 'Literal' && node.source.value === 'dayjs') {
          createReport(context, node)
        }
      }
    }
  }
}
