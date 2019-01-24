const app = require('express')()
const PORT = process.env.HTTP_PORT || 8080

app.get('/*', (req, res) => { res.send(`
<html style="font-family:sans-serif; font-size:small;">
  <h1>Hello ${req.path.slice(1)}</h1>
  ${new Date()}
  <h2>env</h2>
  ${inspectObj(process.env)}
  <h2>req</h2>
  ${inspectObj(req)}
</html>
`)})

app.listen(PORT)
console.log(`listening on ${PORT}`)

function inspectObj(obj, fRecurse = true) {
  return obj ? Object.keys(obj).sort().map(key => {
    return `
<div>
  ${key}: ${val(obj[key], fRecurse)}
</div>
`}).join('\n') : `<i>${obj}</i>`; // falsey objects like null render italic
}

function val(x, fRecurse) {
  switch (typeof x) {
    case 'number':
    case 'string':
    case 'boolean':
      return x;
    case 'object':
      if(fRecurse) return `
<div style="padding-left:1em; font-size:smaller;">
${inspectObj(x, false)}
</div>
`}
  return '...';
}