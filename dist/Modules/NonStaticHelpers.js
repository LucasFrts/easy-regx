"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StaticHelper_1 = __importDefault(require("./StaticHelper"));
class NonStaticHelper extends StaticHelper_1.default {
    date(text) {
        return StaticHelper_1.default.dateMask(text);
    }
    dateHour(text) {
        return StaticHelper_1.default.dateHourMask(text);
    }
    doc(text) {
        return StaticHelper_1.default.docMask(text);
    }
    zipCode(text) {
        return StaticHelper_1.default.zipCodeMask(text);
    }
    phone(text) {
        return StaticHelper_1.default.phoneMask(text);
    }
    money(money) {
        return StaticHelper_1.default.moneyMask(money);
    }
    make(text, format) {
        return StaticHelper_1.default.maskParse(text, format);
    }
}
exports.default = NonStaticHelper;
