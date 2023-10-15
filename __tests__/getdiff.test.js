import { test, expect } from '@jest/globals';
import getdiff from '../gendiff.js';
import file1_1 from '../test_file1_1.json';
import file1_2 from '../test_file1_2.json';

const f1 = file1_1;
const f2 = file1_2;

test('getdiff', () => {
  expect(getdiff(f1,f2)).toBe('-follow,false,host,hexlet.io,-proxy,123.234.53.22,-timeout,50,+timeout,20,verbose,true');
});
