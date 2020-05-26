import * as _ from 'https://cdn.pika.dev/lodash-es@^4.17.15';

const users = [
  { id: 1, name: 'Jorge', profession: 'Web Developer' },
  { id: 2, name: 'Jacinto', profession: 'Teacher' },
  { id: 3, name: 'Siedrix', profession: 'Writter' },
  { id: 4, name: 'Nicole', profession: 'Web Developer' },
];

const usersGroupedByProfession = _.groupBy(users, 'profession');
console.log(usersGroupedByProfession);
