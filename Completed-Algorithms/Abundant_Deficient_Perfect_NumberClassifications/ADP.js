function getDPA(num) {
function sumOfProperDivisors(n) {
let temp = 0;
   for(var i=1;i<=n/2;i++)
     {
        if(n%i === 0) temp += i;  
     }
     return temp
}

let ADP = [0,0,0]

for (let i = 1; i <= 20000; i++) {
    if (sumOfProperDivisors(i) < i) ADP[0]++
    else if (sumOfProperDivisors(i) > i) ADP[2]++
    else ADP[1]++
}
return ADP
}
getDPA(20000)
