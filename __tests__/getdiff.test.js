import { test, expect } from '@jest/globals';
import getdiff from '../gendiff.js';
import file1 from '../file1.json';
import file2 from '../file2.json';

const f1 = file1;
const f2 = file2;

test('getdiff', () => {
  expect(getdiff(f1,f2)).toBe([
	[ '-follow', false ],
	[ 'host', 'hexlet.io' ],
	[ '-proxy', '123.234.53.22' ],
	[ '-timeout', 51 ],
	[ '+timeout', 20 ],
	[ 'verbose', true ]
  ]
  [
	'/Users/palinachuiko/frontend-project-46/file1.json',
	'/Users/palinachuiko/frontend-project-46/file2.json'
  ]);
});
