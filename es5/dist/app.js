"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    DOMLoaded();
});

window.addEventListener("load", function(event) {
    windowLoaded();
});

window.$one = function(selector) {
    return document.querySelector(selector);
};

window.$all = function(selector) {
    var items = {}, results = [], length = 0, i = 0;
    results = Array.prototype.slice.call(document.querySelectorAll(selector));
    length = results.length;
    for (;i < length; ) {
        items[i] = results[i];
        i++;
    }
    items.length = length;
    items.splice = [].splice();
    items.each = function(callback) {
        var i = 0;
        for (;i < length; ) {
            callback.call(items[i]);
            i++;
        }
    };
    return items;
};

var show = function show(el) {
    el.style.display = "";
    return el;
};

var hide = function hide(el) {
    el.style.display = "none";
    return el;
};

var addClass = function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += " " + className;
    }
    return el;
};

var removeClass = function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    return el;
};

var hasClass = function hasClass(el, className) {
    if (el.classList) {
        el.classList.contains(className);
    } else {
        new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
    }
};

var toggleClass = function toggleClass(el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(" ");
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
        el.className = classes.join(" ");
    }
    return el;
};

var css = function css(el, attr, val) {
    if (!attr) return el;
    var cssClass = attr.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/[\s-]+/g, "");
    el.style[cssClass] = val || "";
    return el;
};

var remove = function remove(el) {
    el.parentNode.removeChild(el);
};

var ready = function ready(el, fn) {
    if (!el) return;
    if (document.readyState !== "loading") {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn);
    } else {
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState !== "loading") {
                fn();
            }
        });
    }
};

var click = function click(el, handler) {
    if (!el) return undefined;
    if (typeof handler === "undefined") {
        el.click();
        return el;
    }
    return addEventListener(el, "click", handler);
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
    if (typeof value !== "undefined") {
        el[propName] = value;
        return el;
    }
    return el[propName];
};

var val = function val(el, value) {
    if (!el) return undefined;
    if (typeof value !== "undefined") {
        el.value = value;
        return el;
    }
    return el.value;
};

var submit = function submit(el) {
    if (!el) return undefined;
    if (typeof el.submit === "function") {
        el.submit();
    }
    return el;
};