import RegexException from "../Exception/RegexException"
import { IRegexException } from "../Interfaces/Exeption";
import { IRegexValidator } from "../Interfaces/Validator";
export default class RegexValidator implements IRegexValidator{
    private regexException:IRegexException;

    constructor(){
        this.regexException = new RegexException();
    }
    
    verifyOrThrow(message:string){
        // if(service.regexResult != null){
        //     return true
        // }
        this.regexException.throw(message)
    }
}