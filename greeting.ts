import user from './api.ts';
const name = Object.values(user.name).join(' ');
console.log(`Hello ${name}!`);
