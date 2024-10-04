function getLengthOfLastWord(givenString) {
    listOfWords = givenString.split(" ");
    lastWord = listOfWords[listOfWords.length - 1];
    return lastWord.length;
}

console.log(getLengthOfLastWord('Baba black sheep, have you any wool'));
console.log(getLengthOfLastWord('Your enemy is I'));
console.log(getLengthOfLastWord('Father of Nation is Gandhi'));