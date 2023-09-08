// Find array pair of two number is 7

function arraypair(array, sum) {
  for (i = 0; i < array.length; i++) {
    var first = array[i];
    // console.log(first)
    for (j = i + 1; j < array.length; j++) {
      var second = array[j];
      // console.log("---",second)
      if (first + second == sum) {
        console.log("First: " + first + " Second " + second + " SUM " + sum);
      }
    }
  }
}

var a = [1, -2, 0, 3, 4, 5, 6, 8, 2, 9];
arraypair(a, 7);
