const { expect } = require('chai');
const { split, merge, mergeSort } = require('../src/mergesort');

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2])).to.be.deep.equal([[1], [2]]);
  });

  it('should still split an array into two halves with an odd number', function() {
    expect(split([1, 2, 3])).to.be.deep.equal([[1], [2, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 2, 9], [3, 5, 6])).to.be.deep.equal([1, 2, 3, 5, 6, 9]);
  });
});

describe('Merge Sort function', function() {
  it('is able to sort an empty array', function() {
    expect(mergeSort([])).to.be.deep.equal([]);
  });
});

describe('Merge Sort function', function() {
  it('is able to sort an array', function() {
    expect(mergeSort([2, 9, 7, 3, 4])).to.be.deep.equal([2, 3, 4, 7, 9]);
    expect(
      mergeSort([8, 2, 5, 11, 3, 123, 54, 125, -12, -54, 7312, 1])
    ).to.be.deep.equal([-54, -12, 1, 2, 3, 5, 8, 11, 54, 123, 125, 7312]);
  });
});

describe('Merge Sort function2', function() {
  let arrToSort = [
    { age: 9 },
    { age: 2 },
    { age: 4 },
    { age: 55 },
    { age: 0 },
    { age: 67 },
    { age: 101 },
    { age: 99 },
  ];

  const ageTest = (a, b) => {
    // return a.age < b.age;
    // return a.age > b.age;
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  };
  const result = mergeSort(arrToSort, ageTest);
  it('is able to take an additional parameter', function() {
    expect(result).to.be.deep.equal(arrToSort.sort(ageTest));
  });
});
