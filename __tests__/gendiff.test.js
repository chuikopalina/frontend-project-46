import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getResult = (pathResult = '__fixtures__/expect.txt') => {
  // console.log(JSON.parse(fs.readFileSync(path.resolve(__dirname, pathResult))))
  // return fs.readFileSync(path.join(__dirname, pathResult));
  const pathToFileResult = path.resolve(__dirname, pathResult);
  console.log(pathToFileResult);
  const resultJson = fs.readFileSync(pathToFileResult, 'utf8');
  console.log(resultJson);
  return resultJson;
};

test('for jsons files', () => {
  const file1 = path.join(__dirname, '__fixtures__/file_before.json');
  console.log(file1);
  const file2 = path.join(__dirname, '__fixtures__/file_after.json');
  const result = getResult();
  const diff = genDiff(file1, file2);
  console.log(diff);
  expect(diff).toEqual(result);
});

// test('test for ymls files', () => {
// 	const file1 = path.join(__dirname, '__fixtures__/file_before.yml');
// 	const file2 = path.join(__dirname, '__fixtures__/file_after.yml');
// 	expect(genDiff(file1, file2)).toBe();
//   });
