function findSmallest(arr) {
  let smallest = arr[0];
  for (const element of arr) {
    if (element < smallest) {
      smallest = element;
    }
  }

  console.log(smallest);
}

let arr = [2, 3, 1, 4, 16, 5];

findSmallest(arr);
