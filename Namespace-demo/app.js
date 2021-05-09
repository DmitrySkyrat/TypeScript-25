/// <reference path="utility-functions.ts" />
var result1 = Utility.maxBooksAllowed(30);
Utility.Fees.calculateLateFee(3);
console.log(result1);
var util = Utility.Fees;
var result2 = util.calculateLateFee(3);
console.log(result2);
