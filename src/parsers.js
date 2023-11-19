import _ from 'lodash';

function compareFiles(fileArray1, fileArray2) {
	console.log(fileArray1);
	const fileSort1 = _.sortBy(fileArray1, [(o) => o[0]]);
	const fileSort2 = _.sortBy(fileArray2, [(o) => o[0]]);

	const n = fileSort1.length;
	const m = fileSort2.length;

	let i = 0;
	let j = 0;
	const f = [];

	while (i < n && j < m) {
		if (fileSort1[i][0].toUpperCase() < fileSort2[j][0].toUpperCase()) {
			fileSort1[i][0] = `-${fileSort1[i][0]}`;
			f.push(fileSort1[i]);
			i += 1;
		} else if (fileSort1[i][0].toUpperCase() > fileSort2[j][0].toUpperCase()) {
			f.push(fileSort2[j]);
			j += 1;
		} else if (String(fileSort1[i][1]).toUpperCase() !== String(fileSort2[j][1]).toUpperCase()) {
			fileSort1[i][0] = `-${fileSort1[i][0]}`;
			fileSort2[j][0] = `+${fileSort2[j][0]}`;
			f.push(fileSort1[i]);
			f.push(fileSort2[j]);
			j += 1;
			i += 1;
		} else {
			f.push(fileSort1[i]);
			j += 1;
			i += 1;
		}
	}

	for (let a = j; a < m; a += 1) {
		f.push(fileSort2[a]);
	}
	for (let a = i; a < m; a += 1) {
		f.push(fileSort1[a]);
	}
	//console.log(f)
	//const resultJson = JSON.parse(fs.readFileSync(f));
	//console.log(Object.fromEntries(f));
	//console.log(JSON.stringify(Object.fromEntries(f), null, ' '));
	return (f.join());
}
export default compareFiles;
