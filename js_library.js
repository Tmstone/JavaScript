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
results = filter(myArray, function(element) {
    return element % 2 === 0; 
});
console.log(results);
//reject function
function reject(array, callback) {
    const results = [];
    for(let index = 0; index < array.length; index ++) {
        if (!callback(array[index], index) ) {
            results.push(array[index]);
        }
    }
    return results;
}
results = reject(myArray, function(element) {
    return isNaN(element);
}); 

//find function
function find(array, callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index], index)) {
            return array[index];
        }
    }
}
console.log(find(results, function(element) {
    return element === 4;
}));
//reduce function
function reduce(array, callback, memo) {
    const results = [].concat(array);

    if(memo === undefinded) {
        memo = results.pop();
    }
    for (let i = 0; i < array.length; i++) {
       memo = callback(memo, array[i], i);
    }
    return memo;
}

results = reduce(results, add);

function add(num1, num2, num3) {
    return num1+ num2 + num3;
}
console.log(memo);

//refractor loops  and call the function