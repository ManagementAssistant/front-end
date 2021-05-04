import { zero } from "../core/constant/number-constant";

export function isNullOrUndefined(object: any): boolean {
    if (object == null || object == undefined) {
        return true;
    }

    return false;
}

export function isExpressionBlank(string: string): boolean {
    if (string === '') {
        return true;
    }

    return false;
}

export function isEmpty(object: any): boolean {
    if (object.length === zero) {
        return true;
    }

    return false;
}

export function getEnumKeyWithValue(value: number, enumModel: any): string {
    let keys = Object.keys(enumModel).find(condition => enumModel[condition] === value);
    return keys ? keys : "";
}