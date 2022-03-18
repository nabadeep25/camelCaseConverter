const toCamelCaseString = (str) => {
  if (typeof str === 'string' || str instanceof String) {
    return str.replace(/([-_][a-zA-Z])/g, (g) => g.toUpperCase().replace('_', ''));
  }
  return str;
};

const toCamelCase = (val) => {
  if (!val) {
    return val;
  }
  if (Array.isArray(val)) {
    const newArr = [];
    val.forEach((element) => {
      newArr.push(toCamelCase(element));
    });
    return newArr;
  }
  if (typeof val === 'object') {
    const newObj = {};
    Object.keys(val).map((key) => {
      newObj[toCamelCase(key)] = toCamelCase(val[key]);
      return newObj;
    });

    return newObj;
  }

  if (typeof val !== 'string') return val;

  return toCamelCaseString(val);
};

module.exports = {
  toCamelCase,
};
