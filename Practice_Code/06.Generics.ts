
function logString(arg: string) {
    console.log(arg);
    return arg;
}

function logNumber(arg: number) {
    console.log(arg);
    return arg;
}

function logArray(arg: any[]) {
    console.log(arg);
    return arg;
}

function logAnything<T>(arg: T): T {
    console.log(arg);
    return arg;
}

logAnything(['hello']);

