import { IRegexTypes } from "./Interfaces/Regex";
export default class RegexTypes implements IRegexTypes{
    onlyNumber(): RegExp {
        return /\D/g;
    }
}