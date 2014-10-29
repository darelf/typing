var test = require('tape')
var Typing = require('./')

test('instance', function(t) {
  var typer = new Typing({})
  t.ok(typer instanceof Typing, 'Should be a valid object')
  t.notOk(typer.t, 'Should not have text')
  
  typer = new Typing('Some Text')
  t.equals(typer.t, 'Some Text', 'It should have gotten the text')
  
  t.end()
})

test('type something', function(t) {
  t.plan(1)
  
  var typer = new Typing('text that should be typed')
  var collect = ''
  typer.on('data', function(d) { collect = d })
  typer.on('end', function() {
    t.equals(collect, 'text that should be typed', 'should end up with our string')
  })
  typer.type()
  
})

test('test with fake html element', function(t) {
  t.plan(1)
  var fake_div = {
    innerHTML : '',
    nodeType : 1
  }
  var typer = new Typing()
  typer.on('end', function() {
    t.equals(fake_div.innerHTML, 'text that should be typed', 'the "innerHTML" should equal the typing')
  })
  typer.type('text that should be typed', fake_div)
  
})
