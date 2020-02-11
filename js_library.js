function each(array, callback) {
    for(let index = 0; index ,array.length; index++) {
        callback(array[index], index);
        console.log(array[index])
    }
}

const myArray = ['1','2','3','4','5','6','7','8','9','10'];

each(myArray, function(element, index){
    console.log(`element: ${element} and index: ${index}`);
});
