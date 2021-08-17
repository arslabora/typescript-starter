var copy = require('cpy');

var destination = process.argv[1];

var source = [
  'nodemon.json',
  'tsconfig.json,',
  '.eslintrc',
  '.eslintignore',
  '.prettierrc',
  '.gitignore'
];

for (let index = 0; index < source.length; index++) {
  const element = source[index];
}

(async () => {
  await copy(source, destination);
  console.log('Files copied!');
})();
