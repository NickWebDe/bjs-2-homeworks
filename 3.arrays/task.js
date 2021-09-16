function compareArrays(arr1,arr2) {
  let result;
  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  return result;
}

function advancedFilter(arr) {
  let resultArr;
  let newArray = arr.map((currentValue) => currentValue * 10);
  resultArr = newArray.filter((element) => element > 0 && element % 3 === 0);
  return resultArr; // array
}
