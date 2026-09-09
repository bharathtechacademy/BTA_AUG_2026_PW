//Named exports are all about exporting the data and functions with their names separately. 

export const PI :number = 3.13333;

export function sumOfTwoNumbers(a: number, b: number): number {
    return a + b;
}

export function multiplyOfTwoNumbers(a: number, b: number): number {
    return a * b;
}

export function divideOfTwoNumbers(a: number, b: number): number {
    if(b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

export const id : number = 1234;