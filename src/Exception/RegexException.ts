import { IRegexException } from "../Interfaces/Exeption"
export default class RegexException implements IRegexException{
    throw(message:string):Error{
        throw new Error(message)
    }
}