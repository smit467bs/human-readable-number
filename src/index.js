module.exports = function toReadable(number) {
    var strNumber = number.toString();
    var i = strNumber.length;
    var numHelper = number % 100;
    var result = '';
    var ch = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var ch2 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', '', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var ch3 = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
    
    
    if (i === 3 && (+strNumber[1] === 0 && +strNumber[2] === 0)) result = `${ch3[parseInt(strNumber[0])]}`;    
        else if (i === 3 && +strNumber[1] === 0) result = `${ch3[parseInt(strNumber[0])]} ${ch[parseInt(strNumber[2])]}`;
        else if (i === 3 && +strNumber[2] === 0) result = `${ch3[parseInt(strNumber[0])]} ${ch2[parseInt(strNumber[1])]}`;
        else if (i === 3 &&  (numHelper >= 11 && numHelper <= 19)) result = `${ch3[parseInt(strNumber[0])]} ${ch2[numHelper]}`;
        else if (i === 3) result = `${ch3[parseInt(strNumber[0])]} ${ch2[parseInt(strNumber[1])]} ${ch[parseInt(strNumber[2])]}`;
    if (i === 2 && +strNumber[1] === 0) result = `${ch2[parseInt(strNumber[0])]}`;
        else if (i === 2 && numHelper >= 11 && numHelper <= 19) result = `${ch2[numHelper]}`;
        else if (i === 2) result = `${ch2[parseInt(strNumber[0])]} ${ch[parseInt(strNumber[1])]}`;
    if (i === 1) result = `${ch[parseInt(strNumber[0])]}`;
    
    return result;
}
