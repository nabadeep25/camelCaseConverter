import {ToCamelCaseType} from '../types/types'
/**
 * converted string to camelCase  from  snake_case/snake-case format
 * @param {string} str string to be converted
 * @returns string
 */
const toCamelCaseString = (str: string): string => {
  if (typeof str === 'string') {
    return str.replace(/([-_][a-zA-Z])/g, (g) => g.toUpperCase().replace(/[-_]/, ''));
  }
  return str;
};

/**
 * Convert string, array, object to camelCase  from  snake_case/snake-case format
 * @param {any} input
 * @returns converted value
 */

const toCamelCase = (input: ToCamelCaseType): ToCamelCaseType => {
  if (!input) {
    return input;
  }
  if (Array.isArray(input)) {
    const newArr: ToCamelCaseType[] = [];
    input.forEach((element:ToCamelCaseType) => {
      newArr.push(toCamelCase(element));
    });
    return newArr;
  }
  if (typeof input === 'object') {
    const newObj: { [key: string]: ToCamelCaseType } = {};
    Object.keys(input).map((key) => {
      newObj[toCamelCase(key) as string] = toCamelCase(input[key]);
      return newObj;
    });

    return newObj;
  }

  if (typeof input !== 'string') return input;

  return toCamelCaseString(input);
};

export { toCamelCase, toCamelCaseString };
