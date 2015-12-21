var express = require('express')
var app = express()

var expressions = {
  add: 'plus',
  sub: 'minus',
  mult: 'multiplied by',
  div: 'divided by'
}

app.get("/", function(req, res) {
  res.send("Hello World!!")
})

app.get("/:operator/:num1/:num2", function(req, res) {
  var word = expressions[req.params.operator]
  var num1 = parseFloat(req.params.num1)
  var num2 = parseFloat(req.params.num2)
  var result

  if(req.params.operator === 'add'){
    result = num1 + num2
  }else if(req.params.operator === 'sub'){
    result = num1 - num2
  }else if(req.params.operator === 'mult'){
    result = num1 * num2
  }else if(req.params.operator === 'div'){
    result = num1 / num2
  }else{
    console.log("Please type add, sub, mult, or div")
  }

  res.send(String(result))
})


app.listen(7050, function() {
  console.log("Listening on Port 7050")
});
