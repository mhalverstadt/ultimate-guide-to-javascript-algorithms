/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// For loop
function falsyBouncer(array) {
    let result = []
    //loop throug with each array value
    for(value of array){
        if(value){
            result.push(value)
        }
    }
    return result
}

// filter
function falsyBouncer(array){
    return array.filter((value) => {
        return Boolean(value)
    })
}

let falsyBouncer = array => array.filter(Boolean)

module.exports = falsyBouncer