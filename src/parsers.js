import _ from 'lodash';

function compareObj(fileArray1, fileArray2) {
  const objKeysFile1 = Object.keys(fileArray1);
  const sortKeysFile1 = _.sortBy(objKeysFile1);
  const objKeysFile2 = Object.keys(fileArray2);
  const sortKeysFile2 = _.sortBy(objKeysFile2);

  const n = sortKeysFile1.length;
  const m = sortKeysFile2.length;

  let i = 0;
  let j = 0;
  const result = {};

  while (i < n && j < m) {
    const a1 = sortKeysFile1[i];
    const a2 = sortKeysFile2[j];
    if (a1.toUpperCase() < a2.toUpperCase()) {
      result[`- ${a1}`] = fileArray1[a1];
      i += 1;
    } else if (a1.toUpperCase() > a2.toUpperCase()) {
      result[`+ ${a2}`] = fileArray2[a2];
      j += 1;
    } else if (typeof fileArray1[a1] !== 'object' && typeof fileArray2[a2] !== 'object') {
      if (String(fileArray1[a1]).toUpperCase() !== String(fileArray2[a2]).toUpperCase()) {
        result[`- ${a1}`] = fileArray1[a1];
        result[`+ ${a2}`] = fileArray2[a2];
        j += 1;
        i += 1;
      } else {
        result[`  ${a1}`] = fileArray1[a1];
        j += 1;
        i += 1;
      }
    } else if (typeof fileArray1[a1] === 'object' && typeof fileArray2[a2] === 'object') {
      result[`  ${a1}`] = compareObj(fileArray1[a1], fileArray2[a2]);
      j += 1;
      i += 1;
    } else {
      result[`- ${a1}`] = fileArray1[a1];
      result[`+ ${a2}`] = fileArray2[a2];
      j += 1;
      i += 1;
    }
  }
  for (let a = j; a < m; a += 1) {
    const a2 = sortKeysFile2[a];
    result[`+ ${a2}`] = fileArray2[a2];
  }
  for (let a = i; a < n; a += 1) {
    const a1 = sortKeysFile1[a];
    result[`- ${a1}`] = fileArray1[a1];
  }
  return result;
}
export default (compareObj);
