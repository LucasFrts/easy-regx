import { AlfaNumeric } from "../Types/DataTypes";
interface IStaticHelper{

}
interface INonStaticHelpers{
    date(text:string):string;
    dateHour(text:string):string;
    doc(text:string):string;
    zipCode(text:string):string;
    phone(text:string):string;
    money(money:AlfaNumeric):string;
    make(text:string, format:string):string;
}
export {IStaticHelper, INonStaticHelpers}