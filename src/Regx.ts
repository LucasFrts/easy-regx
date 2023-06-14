import { IRegx } from "./Interfaces/Regex";
import { IRegexTypes } from "./Interfaces/Regex";
import NonStaticHelper from "./Modules/NonStaticHelpers";
import { AlfaNumeric } from "./Types/DataTypes";
import RegexTypes from "./RegexTypes";
export default class Regx extends NonStaticHelper implements IRegx{
    private regex: IRegexTypes;
    public string: string;

    constructor(text:AlfaNumeric){
        super()
        this.regex = new RegexTypes()
        this.string = `${text}`;
    }
    get(): string {
        return ""
    }
    onlyNumber(): string {
        return ""
    }

}