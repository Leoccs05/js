const {html} = require('./base')
console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)) //greddy
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greddy