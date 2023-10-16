#!/usr/bin/env node
import {program} from 'commander';
//const { program } = require('commander');
//const path = require('node:path');
//const fs = require('fs');
//const _ = require('lodash');
import { cwd } from 'node:process';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gendiff = (file1, file2) => {
	const fileNewObj1 = path.resolve(cwd(), file1);
	console.log(__dirname);
	//console.log(typeof(path.resolve(process.cwd(), file1))); //process.cwd() возвращает текущий рабочий каталог; Метод path.resolve() преобразует последовательность путей или сегментов путей в абсолютный путь
	const fileArray1 = Object.entries(JSON.parse(fs.readFileSync(fileNewObj1, "utf-8"))); //Object. entries(obj) – возвращает массив пар [ключ, значение]; 

	const fileNewObj2 = path.resolve(process.cwd(), file2);
	const fileArray2 = Object.entries(JSON.parse(fs.readFileSync(fileNewObj2, "utf-8")));

	const fileSort1 = _.sortBy(fileArray1, [function(o) { return o[0]}]);
	const fileSort2 = _.sortBy(fileArray2, [function(o) { return o[0]}]);

	//console.log(fileSort1);
	//console.log(fileSort2);
	const n = fileSort1.length;
	const m = fileSort2.length;

	//console.log(n);
	let i = 0;
	let j = 0;
	let f = [];

	while (i < n && j < m) {
		if (fileSort1[i][0].toUpperCase() < fileSort2[j][0].toUpperCase()) {
			fileSort1[i][0] = `-${fileSort1[i][0]}`
			f.push(fileSort1[i]);
			i = i + 1 
		} else if (fileSort1[i][0].toUpperCase() > fileSort2[j][0].toUpperCase()) {
			f.push(fileSort2[j]);
			j = j + 1;
		} else {
			if (String(fileSort1[i][1]).toUpperCase() !== String(fileSort2[j][1]).toUpperCase()) {
				fileSort1[i][0] = `-${fileSort1[i][0]}`
				fileSort2[j][0] = `+${fileSort2[j][0]}`
				f.push(fileSort1[i]);
				f.push(fileSort2[j]);
				j = j + 1;
				i = i + 1;
			} else {
				f.push(fileSort1[i]);
				j = j + 1;
				i = i + 1;
			}
		}
	}

	for( let a = j; a < m; a+=1) {
		f.push(fileSort2[a]);
	}
	for( let a = i; a < m; a+=1) {
		f.push(fileSort1[a]);
	}
	//const s = Object.fromEntries(fileSort1);
	//console.log(f);


	return (f.join());
}

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type> ','output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
		console.log(gendiff(filepath1, filepath2));
	})
//program.parse();

export default gendiff;

	// myObj.sort((a, b) => {
	// 	if (a[0].toUpperCase() < b[0].toUpperCase()) {
	// 		return -1;
	// 	}
	
	// 	if (a[0].toUpperCase() > b[0].toUpperCase()) {
	// 		return 1;
	// 	}
	// 	return 0;
	// });


// const getPath = (file) => {
// 	return path.resolve(process.cwd(), file);
// }

// const gendiff = (filepath1, filepath2) => {
// 	const fileNew = path.resolve(process.cwd(), fs.readFileSync(filepath1, "utf-8"));
// 	console.log(fileNew);
// }
// gendiff();
// const { program } = require('commander');

// program
//   .option('--first')
//   .option('-s, --separator <char>');
