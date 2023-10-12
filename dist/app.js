"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCaseString = exports.toCamelCase = void 0;
/**
 * converted string to camelCase  from  snake_case/snake-case format
 * @param {string} str string to be converted
 * @returns string
 */
const toCamelCaseString = (str) => {
    if (typeof str === 'string') {
        return str.replace(/([-_][a-zA-Z])/g, (g) => g.toUpperCase().replace(/[-_]/, ''));
    }
    return str;
};
exports.toCamelCaseString = toCamelCaseString;
/**
 * Convert string, array, object to camelCase  from  snake_case/snake-case format
 * @param {any} input
 * @returns converted value
 */
const toCamelCase = (input) => {
    if (!input) {
        return input;
    }
    if (Array.isArray(input)) {
        const newArr = [];
        input.forEach((element) => {
            newArr.push(toCamelCase(element));
        });
        return newArr;
    }
    if (typeof input === 'object') {
        const newObj = {};
        Object.keys(input).map((key) => {
            newObj[toCamelCase(key)] = toCamelCase(input[key]);
            return newObj;
        });
        return newObj;
    }
    if (typeof input !== 'string')
        return input;
    return toCamelCaseString(input);
};
exports.toCamelCase = toCamelCase;
