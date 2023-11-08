#!/usr/bin/env node
import {program} from 'commander';
import getdiff from '../src/index.js';
//const { program } = require('commander');
//const path = require('node:path');
//const fs = require('fs');
//const _ = require('lodash');

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type> ','output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
		console.log(getdiff(filepath1, filepath2));
	})
  .parse(process.argv);

//program.parse();
	