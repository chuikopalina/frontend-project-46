const obj2string = (a) => {
  let result = '';
  if (typeof a === 'object') {
    if (a !== null) {
      result = '[complex value]';
    } else {
      result = 'null';
    }
  } else if (typeof a === 'string') {
    result = `'${a}'`;
  } else {
    result = `${a}`;
  }
  return result;
};

const plain = (obj, b = '') => {
  let result = '';
  let skip = false;
  if (obj !== null) {
    const objKeys = Object.keys(obj);
    if (objKeys.length === 0) {
      result = '';
    } else {
      objKeys.forEach((key) => {
        if (skip === false) {
          const prefix = `${`${result}Property`} '${b}${key.slice(2)}' `;
          if (key[0] === '+') {
            result = `${prefix}was added with value: ${obj2string(obj[key])}\n`;
          } else if (key[0] === '-') {
            const plusKey = `+${key.slice(1)}`;
            if (objKeys.includes(plusKey)) {
              skip = true;
              result = `${prefix}was updated. From ${obj2string(obj[key])} to ${obj2string(obj[plusKey])}\n`;
            } else {
              result = `${prefix}was removed\n`;
            }
          } else if (typeof obj[key] === 'object') {
            result += plain(obj[key], `${b}${key.slice(2)}.`);
          }
        } else {
          skip = false;
        }
      });
    }
  }
  return result;
};
export default plain;
