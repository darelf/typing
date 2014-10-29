Typing
======

S l o w  T y p i n g

    npm install typing --save
    browserify -r typing -o bundle.js
    <script src="bundle.js"></script>
    <script>
    var Typing = require('Typing')
    var t = new Typing()
    t.type('The text to type', document.getElementById('target_element'))
    </script>


Intended to be used in a browser to simulate a typing visual effect.
The words will come out slowly (according to the `timing` option).

It's pretty rudimentary I know. Whatever.

