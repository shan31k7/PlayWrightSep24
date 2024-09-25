function isPositiveNegativeZero(number) {
    if (number < 0)
        console.log("Given Number is less than Zero: " + number);
    else if (number > 0)
        console.log("Given number is greater than Zero: " + number);
    else
        console.log("Given number is Zero");
}

let positive = 15;
let negative = -3;
let zero = 0;

isPositiveNegativeZero(positive);
isPositiveNegativeZero(negative);
isPositiveNegativeZero(zero);