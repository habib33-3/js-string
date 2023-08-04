function average(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }

  let avg = sum / arr.length;
  console.log(avg);
}

let arr = [2, 3, 63, 2, 23, 1, 2, 3, 3, 9];

average(arr);
