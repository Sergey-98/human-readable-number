module.exports = function toReadable (number) {
  const simpleNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let arr = [];
  let sot = simpleNumber[Math.floor(number / 100)];
  let des = dozens[Math.floor((number % 100) / 10) - 2];
  let edin = simpleNumber[(number % 100) % 10];
  console.log(sot, des, edin);

  if (number < 20) {
    return simpleNumber[number];
  }
  else if (number >= 20 && number < 100 && ((number % 10) == 0)) {
    return (dozens[(number-20)/10]);
  }
  else if (number >= 100 && number < 1000 && ((number % 100) == 0)) {
    return (simpleNumber[number / 100] + ' ' + 'hundred');
  }
  else if (number >= 100 && number < 1000 && ((number % 100) < 20)) {
    return (simpleNumber[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + simpleNumber[number % 100]);
  }
  else if (number >= 100 && number < 1000 && ((number % 100) >= 20 && (number % 100) < 100 && (((number % 100) % 10) == 0))) {
    return (simpleNumber[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + dozens[((number % 100)-20)/10]);
  }
  if (sot == 'zero') {
    return (des + ' ' + edin);
  }
  else if (sot != 'zero' && des != 'zero' && des != undefined) {
    return (sot + ' ' + 'hundred' + ' ' + des + ' ' + edin);
  }
  else if (sot != 'zero' && (des == 'zero' || des == undefined)) {
    return (sot + ' ' + 'hundred' + ' ' + edin);
  }
}
