const mergeSort = arr => {
  _mergeSort(arr, 0, arr.length - 1);
  return arr;
};

const _mergeSort = function(array, p, r) {
  if (p < r) {
    // we do something
    // calculate mid
    var mid = Math.floor((p + r) / 2);
    _mergeSort(array, p, mid);
    _mergeSort(array, mid + 1, r);
    merge(array, p, mid, r);
  }
};

// var array = [14, 7, 3, 12, 9, 11, 6, 2];
// mergeSort(array, 0, array.length-1);

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
const merge = function(array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      k++;
      i++;
    } else {
      array[k] = highHalf[j];
      k++;
      j++;
    }
  }

  // Once one of lowHalf and highHalf has been fully copied
  //  back into array, copy the remaining elements from the
  //  other temporary array back into the array
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    k++;
    i++;
  }
  while (j < highHalf.length) {
    array[k] = highHalf[j];
    k++;
    j++;
  }
};

module.exports = { mergeSort };
