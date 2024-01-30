import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../formatters/index.js';
import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';
import json from '../formatters/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getResult = (pathResult = '__fixtures__/expect.txt') => {
  const pathToFileResult = path.resolve(__dirname, pathResult);
  const resultJson = fs.readFileSync(pathToFileResult, 'utf8');
  return resultJson;
};

test('input json, output stylish', () => {
  const file1 = path.join(__dirname, '__fixtures__/file_before.json');
  const file2 = path.join(__dirname, '__fixtures__/file_after.json');
  const result = getResult('__fixtures__/expect_stylish.txt');
  const diff = genDiff(file1, file2, stylish);
  expect(diff).toEqual(result);
});

test('input json, output plain', () => {
  const file1 = path.join(__dirname, '__fixtures__/file_before.json');
  const file2 = path.join(__dirname, '__fixtures__/file_after.json');
  const result = getResult('__fixtures__/expect_plain.txt');
  const diff = genDiff(file1, file2, plain);
  expect(diff).toEqual(result);
});

test('input json, output json', () => {
  const file1 = path.join(__dirname, '__fixtures__/file_before.json');
  const file2 = path.join(__dirname, '__fixtures__/file_after.json');
  const result = getResult('__fixtures__/expect_json.json');
  const diff = genDiff(file1, file2, json);
  expect(diff).toEqual(result);
});

test('input yaml, output stylish', () => {
  const file1 = path.join(__dirname, '__fixtures__/file_before.yml');
  const file2 = path.join(__dirname, '__fixtures__/file_after.yml');
  const result = getResult('__fixtures__/expect_stylish.txt');
  const diff = genDiff(file1, file2, stylish);
  expect(diff).toEqual(result);
});

test('input yaml, output plain', () => {
  const file1 = path.join(__dirname, '__fixtures__/file_before.yml');
  const file2 = path.join(__dirname, '__fixtures__/file_after.yml');
  const result = getResult('__fixtures__/expect_plain.txt');
  const diff = genDiff(file1, file2, plain);
  expect(diff).toEqual(result);
});

test('input yaml, output json', () => {
  const file1 = path.join(__dirname, '__fixtures__/file_before.yml');
  const file2 = path.join(__dirname, '__fixtures__/file_after.yml');
  const result = getResult('__fixtures__/output_json.json');
  const diff = genDiff(file1, file2, json);
  expect(diff).toEqual(result);
});
