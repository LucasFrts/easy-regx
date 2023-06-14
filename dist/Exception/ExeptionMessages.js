"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExceptionMessages {
    regexError(field) {
        return `cannot call method ${field} without start regex`;
    }
}
exports.default = ExceptionMessages;
