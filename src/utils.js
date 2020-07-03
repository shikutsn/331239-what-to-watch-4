const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const removeDuplicates = (array) => {
  return array.filter((item, position) => array.indexOf(item) === position);
};

export {extend, removeDuplicates};
