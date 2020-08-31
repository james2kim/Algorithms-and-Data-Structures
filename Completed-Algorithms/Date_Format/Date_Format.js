function getDateFormats() {
    let date = new Date()
    let dateFormat = []
// DATE1: To calculate the first date, we take the current date and convert it into the english version of local date. 
    let date1 = date.toLocaleString('en').split(',')

// Because this version gives us DD/MM/YYYY we need to convert this to YYYY/MM/DD, so we will split the string and reformat it. 
    date1 = date1[0].split('/')
    let newDate1 = `${date1[2]}-${date1[0]}-${date1[1]}`

// DATE2: in order to calculate the second date version, we have an options object that we pass into the to date.toLocalDateString
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date2 = date.toLocaleDateString(undefined, options)
   
// Push the values to the dateFormat array and return 
    dateFormat.push(newDate1,date2)
    return dateFormat
}
getDateFormats()
