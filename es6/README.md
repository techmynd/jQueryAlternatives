jQuery Alternative - es6
========================
Simple jQuery replacement. Using the same API with jQuery. In case you dont want to use jQuery but want to easily select elements and apply several functions to these elements, you can use this library.

This is meant to remove the need to use the followings: 

document.querySelector, document.querySelectorAll, document.getElementById or document.addEventListener/DOMContentLoaded

This is alternative to:

```
document.querySelector('p');
document.querySelector('.className');
document.querySelector('#idName');
document.querySelectorAll('.className');
document.getElementById("idName");
document.getElementsByClassName("className");
```
and 
```
document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM loaded");
}
```
and
```
window.addEventListener("load", function(event) {
    // console.log("Window loaded");
});
```
For Window Load Check, use following function
```
function windowLoaded(){
  console.log('Window Loaded');
}
```
## Install
```
Use jQ.min.js from 'dist' folder.
```

## APIs

### Global
Globally exported as `jQ`, and `jQuery`

### Selecting Elements
```
jQ(selector)
```
`selector` can be:
+ `String`
+ `Node`
+ `NodeList`
+ `HTMLElement`
+ `HTMLCollection`
+ or another jQ instance.

### DOM Manipulation
```
$(selector).show()
$(selector).hide()
$(selector).addClass(className)
$(selector).removeClass(className)
$(selector).hasClass(className)
$(selector).toggleClass(className)
$(selector).css(cssClassname, cssValue)

$(selector).val() # Get value of input
$(selector).val(value) $ Set value to input
$(selector).attr(attrName)
$(selector).attr(attrName, value)
$(selector).removeAttr(attrName)
$(selector).prop(propName)
$(selector).prop(propName, value)
```

### Events
```
$(selector).on(eventName, eventHandler);
$(selector).click(eventHandler);
```

### Ajax Requests
```
$.ajax(url, options)
$.ajax(options)
```

`options` is a plain javascript object. Supported options:
+ `url`: The request URL
+ `method`: Request method. Eg: GET, POST, PUT, DELETE...
+ `data`: Data to send with request. Can be object or URLEncoded string
+ `success`: Function called on success (200 <= statusCode < 400)
+ `error`: Function called on failed

### Utils
```
$.param(obj) # Return URLEncoded query string
$.clone(obj) # Clone an object
```

## LICENSE
MIT

## Notes

Work in progress ... 

## Commands

Use yarn or npm
```
$ yarn install
$ yarn run remove:modules (remove node modules)
$ yarn run build (build js and min.js files in dist)
```