function numberToWords(number) {
    if (number < 1 || number > 999) {
        return "Invalid input. Please enter a number between 1 and 999.";
    }

    let ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    let teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                 "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    let tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    let word = "";

    if (number >= 100) {
        let hundred = Math.floor(number / 100);
        word += ones[hundred] + " Hundred";
        number %= 100;
        if (number > 0) word += " ";
    }

    if (number >= 10 && number <= 19) {
        word += teens[number - 10];
    } else {
        let ten = Math.floor(number / 10);
        let one = number % 10;

        switch (ten) {
            case 2: word += "Twenty"; break;
            case 3: word += "Thirty"; break;
            case 4: word += "Forty"; break;
            case 5: word += "Fifty"; break;
            case 6: word += "Sixty"; break;
            case 7: word += "Seventy"; break;
            case 8: word += "Eighty"; break;
            case 9: word += "Ninety"; break;
        }

        if (ten >= 2 && one > 0) word += " ";
        if (ten !== 1 && one > 0) word += ones[one];
    }

    return word;
}

var number = 789;
console.log(numberToWords(number));
