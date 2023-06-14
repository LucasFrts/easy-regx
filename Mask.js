class ExceptionMessages{
    static RegexError(field){
        return `cannot call method ${field} without start regex`
    }
}
class MaskException{
    static throw(message){
        throw new Error(message)
    }
}
class RegexValidation{
    static verifyOrThrow(message){
        if(Mask.regexResult != null){
            return true
        }
        MaskException.throw(message)
    }
}
class RegexTypes{
    static onlyNumber(){
        return /\D+/g
    }
}
export default class Mask{

    static regexResult = null;

    static dateMask(val){
        const regex = /(\d{4})(\d{2})(\d{2})(\d+)?/g
        if (val) {
            return val.replace(/\D/g, "").replace(regex, "$3/$2/$1");
        }
        return "";
    }
    static dateParse(val){
        const regex = /(\d{4})(\d{2})(\d{2})(\d+)/g
        if(val){
            return val.replace(/\D/g, "").replace(regex, "$1-$2-$3")
        }
        return val
    }
    static docMask(val){
        const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/g
        if(val){
            if(regex.test(val)){
                return val.replace(regex, "$1.$2.$3-$4")
            }
            return val
        }
        return ""
    }
    static docParse(val){

    }
    static cepMask(val){
        const regex =  /^(\d{5})(\d{3})$/g
        if(val){
            if(regex.test(val)){
                return val.replace(regex, "$1-$2")
            }
            return val
        }
        return ""
    }
    static cepParse(val){

    }
    static phoneMask(val){
        const regex = /^(\d{2})(\d{1})(\d{4})(\d+)/g
        if(val){
            if(regex.test(val)){
                return val.replace(regex, "($1) $2.$3-$4")
            }
            return val
        }
        return ""
    }
    static phoneParse(val){

    }
    static dateHourMask(val){
        const regex = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d+)/g

        if (val) {
            return val.replace(/\D/g, "").replace(regex, "$3/$2/$1 $4:$5")
        }
        return ""
    }
    static dateHourParse(val){

    }
    static moneyMask(val){
        if (val != null) {
            const string = `${val}`
            let valor = string.substr(0, string.length - 2);
            let centavos = string.substr(-2);
            if (!valor) {
                valor = "0"
            }
            if (!centavos) {
                centavos = "00"
            } else if (centavos.length === 1) {
                centavos = "0" + centavos;
            }
            return "R$ " + valor + "," + centavos;
        }
        return ""
    }
    static moneyParse(val){

    }
    static regex(value){
        if(value){
            this.regexResult = `${value}`;
            return this;
        }else{
            MaskException.throw('parameter value cannot be null')
        }
    }
    
    static onlyNumber(){
        if(RegexValidation.verifyOrThrow(ExceptionMessages.RegexError('onlyNumber'))){
            const value = this.regexResult;
            const regex = RegexTypes.onlyNumber();
            const result = value.replace(regex, "");
            this.regexResult = result;
            return this;
        }
    }
    static get(){
        if(RegexValidation.verifyOrThrow(ExceptionMessages.RegexError('get'))){
            const value         = this.regexResult
            this.regexResult    = null;
            console.log(value)
            return value;
        }
    }

    


}
