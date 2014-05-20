typewriter
===============

### Summary

```typewriter```, is a client-side javascript library enables to wireup keyboard eventing to DOM elements.  


===

### Features

* Simplicity 
 - To implement the features required to bubble up for Keyboard events.
 - Reduces the boiler plate coding for handling the keyboard eventing with keycodes
 - Simple api
 - Exposes KeyMap definition to provide key mapping set

==

### Installation

* <a download="crossdomain-xhr.min.js" href="/dist/keyboard.min.js">Get Minified & Gzipped </a>

* <a download="crossdomain-xhr.js" href="/dist/keyboard.js">Full library </a>

===

### Sample Usage  


##### The following example handles a `esc` key on a Text element with Id `Text`.


```javascript
   var $el = document.getElementById('Text') ;
    keyboard.on({keyMap : keyboard.keyMapDefs.Esc, state: 'up'},$el,function(kbEvent){
          alert('Escaped');
    });

```

##### The following example handles a `Down Arrow` key on a Text element with Id `Text`.


```javascript
    var $el = document.getElementById('Text') ;
    keyboard.on({keyMap : keyboard.keyMapDefs.Down, state: 'up'},$el,function(kbEvent){
          alert('Escaped');
    });
```
