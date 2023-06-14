interface IExceptionMessages{
    regexError(field:string):string;
}
interface IRegexException{
    throw(message:string):Error;
}
export {IExceptionMessages, IRegexException}