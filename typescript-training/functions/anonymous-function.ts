// Normal function


//name of the function : calculate
//parameter : x 
//input parameter data type : number
//return type : number

function calculate(x: number): number {
    return x * x;
}

//calling the normal function
console.log(calculate(2));
console.log(calculate(200));

// function as a parameter to another function

//name of the function : calculator
//parameter : y
//input parameter data type : function  ((x:number) => number)
//return type : number
function calculator(y: (x: number) => number) {
    console.log(y(2));
}

//calling the function
calculator(
    function (x: number): number {
        return x * x;
    }
)

//calling the function
calculator(
    function (a: number): number {
        return a / a;
    }
)


//calling the function
calculator(
    function (a: number): number {
        return a % a;
    }
)



function calc(y: (x: number) => void) {
    y(2);
}


calc(

    function (a: number): void {
        console.log(a * a * a);
    }
)

function get(y: () => number) {
    console.log(y());
}


get(

    function():number {
        return new Date().getFullYear();
    }

)