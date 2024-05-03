// n1
// function getLevel2(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i * 2);
//   }
//   return result;
// }

// let n = 5;
// console.log(getLevel2(n));

// n2
// function generateArray(n, A, B) {
//   let result = [A, B];
//   let sum = A + B;
//   for (let i = 2; i < n; i++) {
//     result.push(sum);
//     sum += result[i];
//   }
//   return result;
// }

// // Misol kodi
// let n = 5;
// let A = 2;
// let B = 3;
// console.log(generateArray(n, A, B));

// n3
// function teskariArray(arr) {
//   let teskariArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     teskariArray.push(arr[i]);
//   }
//   return teskariArray;
// }

// let array = [1, 2, 3, 4, 5];

// console.log(teskariArray(array));

// n4
// function toqArray(arr) {
//   let elementlar = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     elementlar.push(arr[i]);
//   }
//   console.log("Toqlar: " + elementlar.join(" "));
//   console.log("Toqlar soni = " + elementlar.length);
// }

// let array = [4, 5, 7, 8, 6, 9];
// toqArray(array);

// n5
// function son(arr) {
//   let element = [];
//   let elementlar = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       element.push(arr[i]);
//     } else {
//       elementlar.unshift(arr[i]);
//     }
//   }
//   console.log(element.join(" "));
//   console.log(elementlar.join(" "));
// }

// // Test kodi
// let array = [4, 5, 7, 8, 6, 9];

// son(array);

// n6
// function getLevel2(n) {
//   let result = [];
//   for (let i = 0; i <= n; i++) {
//     result.push(i * 2 );
//   }
//   return result;
// }

// let n = 5;
// console.log(getLevel2(n));

// n7
// function getLevel2(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i * 2 - 1);
//   }
//   return result;
// }

// let n = 5;
// console.log(getLevel2(n));

// n11
// function rangeSum(arr, K, L) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i < K || i > L) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let K = 2;
// let L = 5;
// console.log(rangeSum(array, K, L));

// n13
// function getOddMin(arr) {
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// let array = [3, 8, 2, 5, 7, 1, 9, 4, 6];

// console.log(getOddMin(array));

// n14
// function getEvenMax(arr) {
//   let maxEven = -Infinity;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] && arr[i] > maxEven) {
//       maxEven = arr[i];
//     }
//   }
//   return maxEven;
// }

// let arr = [1, 4, 7, 2, 9, 6, 3];
// console.log(getEvenMax(arr));
