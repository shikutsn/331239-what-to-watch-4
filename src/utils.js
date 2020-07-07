const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const removeDuplicates = (array) => {
  return [...new Set(array)];
};

export {extend, removeDuplicates};
