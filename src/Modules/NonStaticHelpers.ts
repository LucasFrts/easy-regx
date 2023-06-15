import { INonStaticHelpers } from "../Interfaces/Modules";
import StaticHelper from "./StaticHelper";
import { AlfaNumeric } from "../Types/DataTypes";
export default class NonStaticHelper extends StaticHelper implements INonStaticHelpers{
    date(text:string):string{
        return StaticHelper.dateMask(text)
    }
    dateHour(text:string):string{
        return StaticHelper.dateHourMask(text)
    }
    doc(text:string):string{
        return StaticHelper.docMask(text)
    }
    zipCode(text:string):string{
        return StaticHelper.zipCodeMask(text)
    }
    phone(text:string):string{
        return StaticHelper.phoneMask(text)
    }
    money(money:AlfaNumeric):string{
        return StaticHelper.moneyMask(money)
    }

}