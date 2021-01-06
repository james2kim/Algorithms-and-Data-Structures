const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
        
    let array = []
    
    function helper(obj) {
        if (Object.keys(obj).length === 0) return

        for (let key in obj) {
            if (typeof obj[key] === 'object') helper(obj[key])
            if (typeof obj[key] === 'string') array.push(obj[key])
        }
    }
    helper(obj)
    return array
}


collectStrings(obj)
