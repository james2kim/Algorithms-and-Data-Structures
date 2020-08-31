// Greedy Algorithm
function convertSeconds(sec) {
let minutes = 0
let hours = 0
let days = 0
let weeks = 0

while (sec >= 604800) {
  weeks++
  sec -= 604800
}
while (sec >= 86400) {
  days++
  sec -= 86400
}
while (sec >= 3600) {
  hours++
  sec -= 3600
}
while(sec>=60){
  minutes++
  sec -= 60
}

if (weeks > 0) {
  return `${weeks} wk, ${days} d, ${hours} hr, ${minutes} min`
} else if (days > 0) {
  return `${days} d`
} else if(hours > 0) {
  return `${hours} hr, ${sec} sec`
}

}
convertSeconds(6000000)
