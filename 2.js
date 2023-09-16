// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

function getMaxSum(arr, num) {
  let result = 0;
  for (let i = 0; i < arr.length - (num - 1); i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (result < temp) result = temp;
  }
  return result;
}

let result = getMaxSum([100, 200, 300, 400], 2);
let result2 = getMaxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
let result3 = getMaxSum([-3, 4, 0, -2, 6, -1], 2);
console.log(result);
console.log(result2);
console.log(result3);
