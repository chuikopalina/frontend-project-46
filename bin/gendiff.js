#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../formatters/index.js';
import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';
import json from '../formatters/json.js';

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type> ', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    if (program.opts().format === 'stylish') {
      console.log(genDiff(filepath1, filepath2, stylish));
    } else if (program.opts().format === 'plain') {
      console.log(genDiff(filepath1, filepath2, plain));
    } else if (program.opts().format === 'json') {
      console.log(genDiff(filepath1, filepath2, json));
    } else {
      console.log('Format is not defined');
    }
  })
  .parse(process.argv);
