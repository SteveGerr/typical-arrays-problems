
exports.min = function min (array) {
    if (arguments.length !== 0 && array.length !== 0) {
        return Math.min.apply(null, array)
    }
  return 0;
}

exports.max = function max (array) {
    if (arguments.length !== 0 && array.length !== 0) {
        return Math.max.apply(null, array)
    }

  return 0;
}

exports.avg = function avg (array) {
    if (arguments.length !== 0 && array.length !== 0) {
        // Получаем сумму всех чисел и делим на количество этих чисел
        return array.reduce((a, b) => (a + b)) / array.length;
    }

  return 0;
}
