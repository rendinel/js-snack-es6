// function arrayNew(arr, min, max) {
//   var arrayNew = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (min <= i <= max) {
//       arrayNew.push(arr[i])
//     }
//   }
//   return arrayNew;
// }
//
// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var numMin = 5;
// var numMax = 7;
//
// console.log(arrayNew(array,numMin, numMax));

// function arrayNew(arr, min, max) {
//   var arrayNew = [];
//   for (var i = 0; i < array.length; i++) {
//     if ((i >= min) && (i <= max)) {
//       arrayNew.push(arr[i])
//     }
//   }
//   return arrayNew;
// }
//
// var array = ['Franco','Giorgio','Chiara','Andrea'];
// var numMin = 2;
// var numMax = 4;
//
// console.log(arrayNew(array,numMin, numMax));

// es6

function arrayNew(arr, min, max) {
  const arrayNew = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i >= min) && (i <= max)) {
      arrayNew.push(arr[i])
    }
  }
  return arrayNew;
}

const array = ['Franco','Giorgio','Chiara','Andrea'];
const numMin = 2;
const numMax = 4;

console.log(arrayNew(array,numMin, numMax));
