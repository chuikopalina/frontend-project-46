import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import getdiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('test for jsons files', () => {
  const file1 = path.join(__dirname, '__fixtures__/test_file1_1.json');
  const file2 = path.join(__dirname, '__fixtures__/test_file1_2.json');
  expect(getdiff(file1, file2)).toBe('-follow,false,host,hexlet.io,-proxy,123.234.53.22,-timeout,50,+timeout,20,verbose,true');
});

test('test for ymls files', () => {
	const file1 = path.join(__dirname, '__fixtures__/file_before.yml');
	const file2 = path.join(__dirname, '__fixtures__/file_after.yml');
	expect(getdiff(file1, file2)).toBe('-follow,false,host,hexlet.io,-proxy,123.234.53.22,-timeout,50,+timeout,20,verbose,true');
  });
  