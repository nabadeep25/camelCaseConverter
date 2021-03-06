const { toCamelCase } = require('../app');

test('convert object to camelCase', () => {
  expect(
    toCamelCase({
      first_name: 'first name',
      last_name: 'last name',
    })
  ).toStrictEqual({ firstName: 'first name', lastName: 'last name' });
});
test('convert nested object to camelCase', () => {
  expect(
    toCamelCase({
      name: {
        first_name: 'first name',
        last_name: 'last name',
      },
    })
  ).toStrictEqual({ name: { firstName: 'first name', lastName: 'last name' } });
});

test('convert array  to camelCase', () => {
  expect(
    toCamelCase([
      { country_code: 'IN', other_details: '...' },
      { country_code: 'US', other_details: '...' },
    ])
  ).toStrictEqual([
    { countryCode: 'IN', otherDetails: '...' },
    { countryCode: 'US', otherDetails: '...' },
  ]);
});

test('convert string  to camelCase', () => {
  expect(toCamelCase('hello_world')).toStrictEqual('helloWorld');
});
