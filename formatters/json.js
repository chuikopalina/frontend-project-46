const json = (obj) => {
  const result = JSON.stringify(obj, null, '\t');
  return result;
};
export default json;
