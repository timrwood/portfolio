// usage: node dev/image-imports.js src/routes/projects/muse-athletic-club/images

import { readdirSync } from 'fs';

function camelCase(str) {
  return str
    .split('-')
    .map((word, i) => (i ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');
}

readdirSync(process.argv[2]).forEach((file) => {
  console.log(`import ${camelCase(file.replace(/\..+/, ''))}Image from "./images/${file}";`);
});
