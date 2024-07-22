"use strict";
// src/MyClass.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.greet = function (name) {
        return "Hello, ".concat(name, "!");
    };
    MyClass.prototype.add = function (a, b) {
        return a + b;
    };
    return MyClass;
}());
exports.MyClass = MyClass;
