// ne prend pas en compte les nombres après le premier string
function filterArray(arr){
    var arr_number = [];
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "string"){
            var index = arr.indexOf(arr[i]);
            arr.splice(index,1);
            i-- ;
        }
    }
    return arr ;
}

console.log(filterArray(['hhc',1,3,"jnj",'hucc ',10,'vfdf',5]))
// je n'ai pas pu tester
function filterArray1(arr){
    var arr_number = [];
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            arr_number.push(arr[i]);
        }
    }
    return arr_number ;
}

console.log(filterArray1(['hhc',1,3,"jnj",'hucc ',10,'vfdf',5]))

function possibleBonus(a, b) {
    var count = 0 ;
	for (let i =0 ; i <= 6; i++){
        if (a + i === b){
            count += 1 ;
            return true ;
        }
    }
    return false;
}

console.log(possibleBonus(9,6));
console.log(possibleBonus(2,6));

function shiftToRight(x, y) {
	var div = x / (2**y);
    return Math.round(div);
}
console.log(shiftToRight(3777,6));
console.log(shiftToRight(-512,10));