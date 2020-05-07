(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.myapp = {}));
}(this, (function (exports) { 'use strict';

    var add = function (a, b) {
        return a + b;
    };

    exports.add = add;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
