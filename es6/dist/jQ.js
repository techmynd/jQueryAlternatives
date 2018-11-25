(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jQ"] = factory();
	else
		root["jQ"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQ"] = __webpack_require__(5);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(3);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object")
	g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}; /* global window document Node HTMLElement XMLHttpRequest ActiveXObject */

// Window Load
window.addEventListener("load", function (event) {
  // console.log("window fully loaded");
  windowLoaded();
});
// uage
/*
function windowLoaded(){

}
*/

var isNode = function isNode(o) {return (
    (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? o instanceof Node :
    o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string');};


var isElement = function isElement(o) {return (
    (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? o instanceof HTMLElement : // DOM2
    o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string');};


var show = function show(el) {
  el.style.display = '';
  return el;
};

var hide = function hide(el) {
  el.style.display = 'none';
  return el;
};

var addClass = function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
  return el;
};

var removeClass = function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  return el;
};

var hasClass = function hasClass(el, className) {
  if (el.classList) {
    el.classList.contains(className);
  } else {
    new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
};

var toggleClass = function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = -1;
    for (var i = classes.length - 1; i >= 0; i -= 1) {
      if (classes[i] === className) {
        existingIndex = i;
      }
    }

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }

    el.className = classes.join(' ');
  }
  return el;
};

var css = function css(el, attr, val) {
  if (!attr) return el;
  var cssClass = attr.
  replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {return index === 0 ? letter.toLowerCase() : letter.toUpperCase();}).
  replace(/[\s-]+/g, '');

  el.style[cssClass] = val || '';
  return el;
};

// const remove = (el) => {
//   el.parentNode.removeChild(el);
// };

var ready = function ready(el, fn) {
  if (!el) return;
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        fn();
      }
    });
  }
};

var addEventListener = function addEventListener(el, eventName, handler) {
  if (!el) return;
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function () {
      handler.call(el);
    });
  }
};

var click = function click(el, handler) {
  if (!el) return undefined;
  if (typeof handler === 'undefined') {
    el.click();
    return el;
  }

  return addEventListener(el, 'click', handler);
};

var attr = function attr(el, key, val) {
  if (!el) return undefined;
  if (val) {
    el.setAttribute(key, val);
    return el;
  }
  return el.getAttribute(key);
};

var removeAttr = function removeAttr(el, attrName) {
  if (!el) return undefined;
  el.removeAttribute(attrName);
  return el;
};

var html = function html(el, val) {
  if (!el) return undefined;
  if (val) {
    el.innerHTML = val;
    return el;
  }
  return el.innerHTML;
};

var text = function text(el, val) {
  if (!el) return undefined;
  if (val) {
    if (el.textContent !== undefined) {
      el.textContent = val;
    } else {
      el.innerText = val;
    }
    return el;
  }
  return el.textContent || el.innerText;
};

var prop = function prop(el, propName, value) {
  if (!el || !propName || !Object.prototype.hasAttributes.call(el, propName)) return undefined;
  if (typeof value !== 'undefined') {
    el[propName] = value;
    return el;
  }
  return el[propName];
};

var val = function val(el, value) {
  if (!el) return undefined;
  if (typeof value !== 'undefined') {
    el.value = value;
    return el;
  }
  return el.value;
};

var submit = function submit(el) {
  if (!el) return undefined;
  if (typeof el.submit === 'function') {
    el.submit();
  }
  return el;
};

var xhr = function xhr() {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  }
  var versions = [
  'MSXML2.XmlHttp.6.0',
  'MSXML2.XmlHttp.5.0',
  'MSXML2.XmlHttp.4.0',
  'MSXML2.XmlHttp.3.0',
  'MSXML2.XmlHttp.2.0',
  'Microsoft.XmlHttp'];


  var xRequest = void 0;
  for (var i = 0; i < versions.length; i += 1) {
    try {
      xRequest = new ActiveXObject(versions[i]);
      break;
    } catch (e) {/* No empty */}
  }
  return xRequest;
};

var param = function param(obj) {return Object.keys(obj).
  map(function (keyName) {return encodeURIComponent(keyName) + '=' + encodeURIComponent(obj[keyName]);}).
  join('&');};

function ajax(url, obj) {var _this = this;
  if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
    obj = url;
    url = obj.url;
  }

  var request = xhr();
  request.open(obj.method, url, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 400) {
        if (typeof obj.success === 'function') {
          obj.success.apply(_this, [request]);
        }
        return;
      }
      if (typeof obj.error === 'function') {
        obj.error.apply(_this, [request]);
      }
    }
  };

  if (obj.data) {
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(typeof obj.data === 'string' ? obj.data : param(obj.data));
  } else {
    request.send();
  }
  return request;
}

var clone = function clone(obj) {return JSON.parse(JSON.stringify(obj));};

function $(el) {
  el = el || '';
  this.selector = '';

  if (typeof el === 'string') {
    this.selector = el;
  } else if (el.constructor.name === '$') {
    this.selector = el.selector;
  } else if (['NodeList', 'HTMLCollection'].indexOf(el.constructor.name) > -1) {
    this.elements = Array.prototype.slice.call(el);
  } else if (isNode(el) || isElement(el)) {
    this.elements = [el];
  }

  this.elements = this.selector ? document.querySelectorAll(this.selector) : this.elements || [];
  this.elements = this.elements || [];
  this.length = this.elements.length;

  return this;
}

var utilFuns = {
  ajax: ajax,
  param: param,
  clone: clone };

Object.keys(utilFuns).forEach(function (fName) {return $[fName] = utilFuns[fName];});

var collectionFuncs = {
  show: show,
  hide: hide,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  css: css,
  on: addEventListener };

Object.keys(collectionFuncs).forEach(function (fName) {
  $.prototype[fName] = function () {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    this.elements = Array.prototype.map.
    call(this.elements, function (el) {return collectionFuncs[fName].apply(el, [el].concat(args));});
    return this;
  };
});

var singleFuns = {
  attr: attr,
  removeAttr: removeAttr,
  html: html,
  text: text,
  val: val,
  prop: prop,
  submit: submit,
  ready: ready,
  click: click };

Object.keys(singleFuns).forEach(function (fName) {
  $.prototype[fName] = function () {
    var el = this.elements[0];for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
    return singleFuns[fName].apply(el, [el].concat(args));
  };
});exports.default =

function (el) {return new $(el);};module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQ"] = __webpack_require__(1);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(2);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=jQ.js.map