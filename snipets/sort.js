result.sort((a, b) => b.isUpdated - a.isUpdated)

var myArray = [5, 3, 4, 1, 2]
myArray.sort(function (a, b) {
  return a - b
})
console.log(myArray)
// 결과: [1, 2, 3, 4, 5]
myArray.sort(function (a, b) {
  return b - a
})
console.log(myArray)
// 결과: [5, 4, 3, 2, 1]
