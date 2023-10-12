## camel-case-converter

convert Array Object String, Json to **camelCase** format from snake_case/snake-case format

### usage exmaple

install  
```sh
 npm i camel-case-converter 
 ```

#### toCamelCase

```js
const { toCamelCase  } = require('camel-case-converter');


let simpleObject = {
  first_name: 'first name',
  last_name: 'last name',
};
simpleObject = toCamelCase(simpleObject);
console.log(simpleObject);

/* { firstName: 'first name', lastName: 'last name' } */


let nestedObject = {
  name: {
    first_name: 'first name',
    last_name: 'last name',
  },
};
nestedObject = toCamelCase(nestedObject);
console.log(nestedObject);

/* { name: { firstName: 'first name', lastName: 'last name' } } */


let array = [
  { country_code: 'IN', other_details: '...' },
  { country_code: 'US', other_details: '...' },
];
array = toCamelCase(array);
console.log(array);

/*
[
    { countryCode: 'IN', otherDetails: '...' },
    { countryCode: 'US', otherDetails: '...' }
  ]
*/

let string = 'hello_world';
string = toCamelCase(string);
console.log(string);

/* helloWorld */



```

#### toCamelCaseString

```js
const { toCamelCaseString  } = require('camel-case-converter');


let string = 'hello_world';
string = toCamelCaseString(string);
console.log(string);

/* helloWorld */

let string = 'hello-world';
string = toCamelCaseString(string);
console.log(string);

/* helloWorld */

```
