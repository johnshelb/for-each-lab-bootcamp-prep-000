function iterativeLog(array){
  array.forEach(function(element,index){
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  arrayB = [1,2,3,4]
  arrayB.forEach(callback)
  return arrayB
}
function doToArray(array,callback) {
  array.forEach(callback)
}
