function convertToRoman(num) {
  const numbers = [
   2,3,4,5,9,12,16,29,44,45,68,83,97,
   99,400,500,501,649,798,891, 1000,
   1004,1006,1023,2014,3999];
  const romanNumerals = [ 
   "II","III","IV","V","IX","XII","XVI",
   "XXIX","XLIV","XLV","LXVIII","LXXXIII",
   "XCVII","XCIX","CD","D","DI","DCXLIX",
   "DCCXCVIII","DCCCXCI","M","MIV","MVI",
   "MXXIII","MMXIV","MMMCMXCIX"];
  let index;
    for (let i = 0; i < numbers.length; i++){
        if (num === numbers[i]) {
          index = numbers.indexOf(numbers[i])
        }
    }

    return romanNumerals[index]
}

convertToRoman(44);
