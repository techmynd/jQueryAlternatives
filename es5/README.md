# Query Selector Alternative / jQuery Alternative

es5 based experiment to do small stuff like jQuery to avoid vanilla javascript as much as possible.

If you do not have jQuery in your project but want to select DOM elements easily like you do with jQuery, this library is for you. Query Selector Alternative is a CSS selectors implemented in vanilla javascript. This library does not depend on any javascript DOM parser and can be used in either browser or node environment. It can work with native DOM in browser, or any other library.

This is meant to remove the need to use the followings: 

document.querySelector, document.querySelectorAll, document.getElementById or document.addEventListener/DOMContentLoaded

This is alternative to 

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

## Usage

Use the minified version in 'dist' folder.
Use index.html in root to experiment with selectors.

This will select first occurance of element
```
$one('.classname');
```
This will select all elements
```
$all("p") ... for each
```
or 
```
$all("p,h1,h2") .... ... for each
```
e.g.
```
$all("p").each(function() {
	// this.style.backgroundColor="#ccc";
	// or
	// hide(this);
});
```
Add class
```
addClass( $one('.classNameSelector') , 'newClassNameToAdd');
```
For button Click ToggleClass
```
$one('.btn').addEventListener('click', function() {
  toggleClass(this,'btn2');
}, false);
```
or
```
$one('.btn').onclick = function(event){
  toggleClass(this,'btn2');
  event.preventDefault();
};
```
DOM Loaded
```
function DOMLoaded(){
  console.log('DOM Loaded');
}
```
Window Loaded
```
function windowLoaded(){
  console.log('Window Loaded');
}
```
## Supported Selectors (Target)
```
Type selector (div)
Class selector (.btn)
ID selector (#header)
Attribute selectors ([attr], ...)
Adjacent sibling selector (span + i)
General sibling selector (span ~ i)
Child selector (span > i)
Descendant selector (span i)
Empty (:empty)
First child (:first-child)
First of type (:first-of-type)
Last child (:last-child)
Last of type (:last-of-type)
Not (:not())
Before (::before)
After (::after)
```
## API

querySelector: similar to Document.querySelector()
querySelectorAll: similar to Document.querySelectorAll()

## Notes

Work in progress ... 

## Commands

Use yarn or npm
```
$ yarn install
$ yarn run remove:modules (remove node modules)
$ yarn run remove:dist (remove dist)
$ yarn run build:js (build js file in dist)
$ yarn run build:jsmin (build minified js file in dist)
$ yarn run build (build js and min.js files in dist)
```