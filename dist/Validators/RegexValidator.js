"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RegexException_1 = __importDefault(require("../Exception/RegexException"));
class RegexValidator {
    constructor() {
        this.regexException = new RegexException_1.default();
    }
    verifyOrThrow(message) {
        // if(service.regexResult != null){
        //     return true
        // }
        this.regexException.throw(message);
    }
}
exports.default = RegexValidator;
