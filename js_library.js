function each(array, callback) {
    for(let index = 0; index < array.length; index++) {
        callback(array[index], index);
        //console.log(array[index], index)
    }
}

const myArray = ['1','2','3','4','5','6','7','8','Nine','Ten'];

  //anonymous function
each(myArray, function(element, index){
    console.log(`element: ${element} and index: ${index}`);
});
//map function
function map(array, callback) {
    const newArr = [];
    for (let index = 0; index < array.length; index++) {
        newArr.push(callback(array[index], index));
    }
    return newArr;
}

let newArr = map(myArray, function(element, index) {
    return parseInt(element, 10);
});
console.log(newArr);

//filter function
function filter(array, callback) {
    const results = [];
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index], index)) {
            results.push(array[index]);
        }
    }
    return results;
}

results = filter(myArray, function(element) {
    return !isNaN(element);
});

