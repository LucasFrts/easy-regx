import { IStaticHelper } from "../Interfaces/Modules";
import { AlfaNumeric } from "../Types/DataTypes";
export default class StaticHelper implements IStaticHelper{
    static dateMask(text:string):string{
        return ""
    }
    static dateHourMask(text:string):string{
        return ""
    }
    static docMask(text:string):string{
        return ""
    }
    static zipCodeMask(text:string):string{
        return ""
    }
    static phoneMask(text:string):string{
        return ""
    }
    static moneyMask(money:AlfaNumeric):string{
        return ""
    }
    static maskParse(text:string, format:string):string{
        return ""
    }

}