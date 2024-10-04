function isAnagram(value1, value2) {
    value1 = value1.trim().toLowerCase().split("").sort().join();
    value2 = value2.trim().toLowerCase().split("").sort().join()

    console.log(value1);
    console.log(value2);

    if (value1 === value2)
        return true;
    else
        return false;
}

console.log(isAnagram('listen', 'silent')); // returns true
console.log(isAnagram('hello', 'world'));   // returns false