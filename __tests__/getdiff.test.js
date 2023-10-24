//import { test, expect } from '@jest/globals';
import gendiff from '../gendiff.js';
//import file1_1 from '../__fixtures__/test_file1_1.json' assert { type: "json" };
//import file1_2 from '../__fixtures__/test_file1_2.json' assert { type: "json" };
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//const f1 = file1_1;
//const f2 = file1_2;

test('gendiff', () => {
  const file1_1 = path.join(__dirname, '__fixtures__/test_file1_1.json');
  const file1_2 = path.join(__dirname, '__fixtures__/test_file1_2.json');
  expect(gendiff(file1_1,file1_2)).toBe('-follow,false,host,hexlet.io,-proxy,123.234.53.22,-timeout,50,+timeout,20,verbose,true');
});


//import { fileURLToPath } from 'url';
//import getDiff from '../src/index.js';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//test('get diff json files', () => {
  //const path1 = path.resolve(__dirname, 'fixtures/before.json');
  //const path2 = path.resolve(__dirname, 'fixtures/after.json');
  //const pathResult = path.resolve(__dirname, 'fixtures/expect.json');
  //const resultJson = JSON.parse(fs.readFileSync(pathResult));

  //const diff = getDiff(path1, path2);
  //const result = JSON.stringify(resultJson, null, ' ');

  //expect(diff).toBe(result);
//});