function calculateSecondLargest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let secondLargest = arr[1];

  console.log(secondLargest);
}

let arr = [2, 4, 23, 6, 7];

calculateSecondLargest(arr);
