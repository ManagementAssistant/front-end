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