const powersOfTwo = function* () {
  let powerOfTwo = 1;
  while (true) {
    yield powerOfTwo *= 2;
  }
};

export default powersOfTwo;
