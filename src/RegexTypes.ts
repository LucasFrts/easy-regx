import { IRegexTypes } from "./Interfaces/Regex";
export default class RegexTypes implements IRegexTypes{
    onlyNumber(): RegExp {
        return /\D/g;
    }
    alfaNumeric():RegExp{
        return /^[A-Za-z0-9À-ÖØ-öø-ÿ]*$/g;
    }
}