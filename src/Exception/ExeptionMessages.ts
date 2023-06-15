
export default class ExceptionMessages{
    static regexError(field:string):string{
        return `cannot call method ${field} without start regex`
    }
    static nonRelatedPattern(field:string):string{
        return `the selected pattern does not match with string in ${field}`
    }
}