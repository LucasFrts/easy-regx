"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NonStaticHelpers_1 = __importDefault(require("./Modules/NonStaticHelpers"));
const RegexTypes_1 = __importDefault(require("./RegexTypes"));
class Regx extends NonStaticHelpers_1.default {
    constructor(text) {
        super();
        this.regex = new RegexTypes_1.default();
        this.string = `${text}`;
    }
    get() {
        return "";
    }
    onlyNumber() {
        return "";
    }
}
exports.default = Regx;
