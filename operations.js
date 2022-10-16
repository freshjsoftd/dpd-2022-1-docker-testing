module.exports.multiply = (x, y) => {
  return x * y;
}

module.exports.asyncSum = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 500)
}