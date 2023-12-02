#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import compareObj from './parsers.js';
import stylish from './stylish.js';

const selectParser = (pathFile1, pathFile2) => {
  let extFile = '';
  const file1 = fs.readFileSync(path.resolve(process.cwd(), pathFile1), 'utf8');
  const file2 = fs.readFileSync(path.resolve(process.cwd(), pathFile2), 'utf8');

  if (path.extname(pathFile1) === '.json' && path.extname(pathFile2) === '.json') {
    extFile = 'json';
  } else if ((path.extname(pathFile1) === '.yaml' || path.extname(pathFile1) === '.yml') && (path.extname(pathFile2) === '.yaml' || path.extname(pathFile2) === '.yml')) {
    extFile = 'yaml';
    // } else if (path.extname(pathFile1) === '.ini' && path.extname(pathFile2) === '.ini') {
    // extFile = 'ini';
  } else if (extFile === '') {
    throw new Error('Not correct file type');
  }

  switch (extFile) {
    case ('yaml'):
      // console.log(file1);
      return ([Object.entries(yaml.load((file1))), Object.entries(yaml.load(file2))]);
    // case ('ini'):
      // return [iniParser.parse(file1), iniParser.parse(file2)];
    default:
      return [(JSON.parse(file1)), (JSON.parse(file2))];
  }
};

const genDiff = (file1, file2) => {
  const [obj1, obj2] = selectParser(file1, file2);
  const resultDiff = compareObj(obj1, obj2);
  const resultFormated = stylish(resultDiff);
  return resultFormated;
};
export default genDiff;
