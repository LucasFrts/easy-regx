import { IRegx } from "./Interfaces/Regex";
import { IRegexTypes } from "./Interfaces/Regex";
import NonStaticHelper from "./Modules/NonStaticHelpers";
import { AlfaNumeric } from "./Types/DataTypes";
import RegexTypes from "./RegexTypes";
import ExceptionMessages from "./Exception/ExeptionMessages";
import RegexException from "./Exception/RegexException";
import { IRegexException } from "./Interfaces/Exeption";
export default class Regx extends NonStaticHelper implements IRegx{
    private regex: IRegexTypes;
    private regexException:IRegexException;
    public string: string;

    constructor(text:AlfaNumeric){
        super()
        this.regex = new RegexTypes();
        this.regexException = new RegexException();
        this.string = `${text}`;
    }
    get(): string {
        return ""
    }
    onlyNumber(): string {
        this.string = this.string.replace(this.regex.onlyNumber(), "");
        return this.string;
    }
    reverse(): string{
        this.string = this.string.split("").reverse().join("");
        return this.string;
    }
    make(pattern:string): string{
        const splittedPatern = pattern.split('');
        const splittedString = this.string.split('');
        const jobArguments = splittedPatern.filter((k)=>k == '#')
        if(jobArguments.length != splittedString.length){
            this.regexException.throw(ExceptionMessages.nonRelatedPattern('make'))
        }

        let response = '';
        let count = 0;
        for(let i = 0; i < splittedPatern.length; i++){
            const pattern = splittedPatern[i];
            const value = splittedString[i - count];
            if(pattern === '#'){
                response += value
            }else{
                response += pattern
                count++;
            }
        }
        this.string = response;

        return this.string;
    }

}