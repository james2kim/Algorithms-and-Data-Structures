function add12Hours(dateString) {
  //Split the original date string into sections that can be concatanated later into a string we can convert to a unix timestamp
let splitString = dateString.split(' ')
let time = splitString[splitString.length - 2].split('')
let firstTime = time.slice(0,time.length - 2).join('')
let secondTime = time.slice(time.length - 2,time.length).join('')

// Helper function to convert short hand months into full month name
const getFullMonthName = (month) => {
    if (month === 'Jan') return 'January'
    if(month === 'Feb') return 'February'
    if(month === 'Mar') return 'March'
    if(month === 'Apr') return 'April'
    if(month === 'May') return 'May'
    if(month === 'Jun') return 'June'
    if(month === 'Jul') return 'July'
    if(month === 'Aug') return 'August'
    if(month === 'Sep') return 'September'
    if(month === 'Oct') return 'October'
    if(month === 'Nov') return 'November'
    if(month === 'Dec') return 'December'    
}

// In order to put together a string tht we can convert into unix timestamp, we need the date in format 'FullMonthName Day Year @ hh:mm (am||pm). Therefore we will bring together the split string that we did above and compile a reformatTime that will work when parsing. We will also save the timezone into a variable to use later '
const timeZone = splitString[splitString.length-1]
let date = `${splitString[0]} ${splitString[1]} ${splitString[2]}`
let reformatTime = `${firstTime} ${secondTime}`
let dateForParsing = `${date} @ ${reformatTime}`

// Now we can parse the date into a unix date, but we must divide this by 1000
 let unix= Date.parse(dateForParsing)
 unix /=1000
//  To add 12 hours to the time, we need to add the time in seconds to the unix time
 const addSeconds = 60 * 60 * 12
 unix += addSeconds

//  The new date is below
let newDate = new Date(unix * 1000).toDateString()

// We need to convert the date back into 'Month Day YYYY HH:MM(am||pm) TimeZone' 

// We will split the string into an array so we can manipulate the individual parts 
newDate = newDate.split(' ')
.slice(1, newDate.length)

// We will convert short hand months to full month names, and if the day is less than 10, we need to convert 09 => 9 and so on. After everything is done, we will join the array back into a string 
newDate[0] = getFullMonthName(newDate[0])
newDate[1] = newDate[1].split('')
newDate[1][0] === '0' 
? newDate[1] = newDate[1][1] 
: newDate[1] = newDate[1].join('')
newDate = newDate.join(' ')

//  We need to convert am to pm and vice versa and also remove the whitespace between the time and time of day
reformatTime = reformatTime.split(' ')
reformatTime[1] === 'pm' ? reformatTime[1] = 'am' : reformatTime[1] = 'pm' 
reformatTime = reformatTime.join('')

// The correctly formated time is 'FullMonthName DD YYYY HH:MMam TZN' 
const newTime = `${newDate} ${reformatTime} ${timeZone}`
return newTime

}
add12Hours("January 17 2017 11:43am EST")
