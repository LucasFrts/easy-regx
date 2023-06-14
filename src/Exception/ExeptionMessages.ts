import { IExceptionMessages } from "../Interfaces/Exeption"
export default class ExceptionMessages implements IExceptionMessages{
    regexError(field:string):string{
        return `cannot call method ${field} without start regex`
    }
}