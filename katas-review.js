const repeatNumbers = function(data) {
  let final = '';
  for (let i = 0; i < data.length; i++) {
    let numberOne = data[i][0];
    let numberTwo = data[i][1];
    for (let j = 0; j < numberTwo; j ++) {
      final += numberOne;
    }
    if (i < data.length - 1) {
      final += ', ';
    }
  }
  return final;
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));