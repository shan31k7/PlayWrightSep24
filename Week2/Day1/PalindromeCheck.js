function StringReversal(stringValue) {
    let splitted = stringValue.split("");
    console.log(splitted);

    let accumulator = "";
    let i = 0;
    for (i = splitted.length - 1; i >= 0; i--) {
        accumulator = accumulator + splitted[i];
    }
    console.log("Reverse of: " + stringValue + " is :" + accumulator);

    if (stringValue === accumulator)
        return true;
    else
        return false;
}

console.log(StringReversal(`testleaf`)); // returns false
console.log(StringReversal(`madam`));   // returns true