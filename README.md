SlowTyping
==========
[![NPM version](https://badge.fury.io/js/endwith.svg)](http://badge.fury.io/js/endwith)

S l o w  T y p i n g

    npm install slowtyping --save
    browserify -r slowtyping -o bundle.js
    <script src="bundle.js"></script>
    <script>
    var Typing = require('slowtyping')
    var t = new Typing()
    t.type('The text to type', document.getElementById('target_element'))
    </script>


Intended to be used in a browser to simulate a typing visual effect.
The words will come out slowly (according to the `timing` option).

It's pretty rudimentary I know. Whatever.

Darel Finkbeiner, MIT License

