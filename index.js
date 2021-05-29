const Kit = require('./src/Kit')
const NFA = require('./src/NFA')
const RegExp = require('./src/RegExp')
const parse = require('./src/parse')
const visualize = require('./src/visualize')
const Raphael = require('./src/libs/raphael')

module.exports = {
  Kit: Kit,
  NFA: NFA,
  RegExp: RegExp,
  parse: parse,
  visualize: visualize,
  Raphael: Raphael
}
