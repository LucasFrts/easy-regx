interface IRegexTypes{
    onlyNumber():RegExp;
}
interface IRegx{
    string:string;
    get():string;
    onlyNumber():string;
}
export { IRegexTypes, IRegx }