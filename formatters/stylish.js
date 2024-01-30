const stylish = (obj, depth = 0, symbol = ' ') => {
  const repeatCount = 4;
  const shiftLeft = 2;
  let result = '';
  if (obj !== null) {
    const objKeys = Object.keys(obj);
    if (objKeys.length === 0) {
      result = '';
    } else {
      result = `${result}{\n`;
      objKeys.forEach((key) => {
        let shift = 0;
        if (['+', '-', ' '].includes(key[0])) {
          shift = shiftLeft;
        }
        if (typeof obj[key] !== 'object') {
          result = `${result + symbol.repeat(repeatCount * (depth + 1) - shift)}${key}: ${obj[key]}\n`;
        } else {
          result = `${result + symbol.repeat(repeatCount * (depth + 1) - shift)}${key}: ${stylish(obj[key], depth + 1, symbol)}\n`;
        }
      });
    }
    result = `${result + symbol.repeat(repeatCount * depth)}}`;
  } else {
    result = 'null';
  }
  return result;
};
export default stylish;
