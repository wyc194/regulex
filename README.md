# Regulex_common
[Regulex_common](https://github.com/wyc194/regulex.git) is a JavaScript Regular Expression Parser & Visualizer. 

It base on [Regulex](https://github.com/CJex/regulex), use by commonJs rules.

Try it now: <https://freecity.club/#/regulex>

### Features
```text
github: https://github.com/wyc194/regulex.git
```
```text
origin project github: https://github.com/CJex/regulex
```
#### Origin Project Declare
- Written in pure JavaScript. No backend required.
- You can embed the graph on you own site through HTML iframe element.
- Detailed error message. In most cases it can point out the precise syntax error position.
- No support for octal escape. Yes it is a feature! ECMAScript strict mode doesn't allow octal escape in string, but many browsers still allow octal escape in regex. In regulex, DecimalEscape will always be treated as back reference. If the back reference is invalid, e.g. `/\1/`, `/(\1)/`, `/(a)\2/`, or DecimalEscape appears in charset（because in this case it can't be explained as back reference, e.g. `/(ab)[\1]/`, Regulex will always throw an error.
#### Project Declare
- 更改依赖性：去除requireJs，适应ES6模块化使用方式.

### For browser use
```text
如采用以<script>标签直接导入js供浏览器使用方式, 请查看使用原项目Regulex(https://github.com/CJex/regulex)
```

### Install for Node.js, Vue... [ES6 Module方式]
```
npm install regulex_
```

### API
```javascript
import { parse, Kit, Raphael, visualize } from 'regulex'
```

#### Parse to AST

```javascript
const regExp = /var\s+([a-zA-Z_]\w*);/
console.log(parse(regExp.source))
```

#### Visualize

```javascript
const regExp = /var\s+([a-zA-Z_]\w*);/
const paper = Raphael("htmlElementID", 0, 0)
try {
  visualize(parse(regExp.source), getRegexFlags(re), paper)
} catch (e) {
  if (e instanceof parse.RegexSyntaxError) {
    // do some thing
  }
}

function getRegexFlags(re) {
  let flags = ""
  flags += re.ignoreCase ? "i" : ""
  flags += re.global ? "g" : ""
  flags += re.multiline ? "m" : ""
  return flags
}
```
