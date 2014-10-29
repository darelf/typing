SlowTyping
==========
[![NPM version](https://badge.fury.io/js/slowtyping.svg)](http://badge.fury.io/js/slowtyping)
[![Build Status](https://travis-ci.org/darelf/typing.svg)](https://travis-ci.org/darelf/typing)

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

The option `variation` can be used to get a random timing for each letter.
For instance, if `timing` is 50 and `variation` is 10, you should get a timing
of between 45 and 55 ms that varies with each letter.

It's pretty rudimentary I know. Whatever.

Darel Finkbeiner, MIT License

