function moveNegative(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] < 0) {
      j++;
      continue;
    }
    if (arr[i] < 0 && arr[j] >= 0) {
      [arr[i], arr[j++]] = [arr[j], arr[i]];
    }
  }
  console.log("res==", arr);
}

moveNegative([-12, 11, -13, -5, 6, -7, 5, -3, -6]);
