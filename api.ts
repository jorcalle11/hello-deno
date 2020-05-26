const response = await fetch('https://randomuser.me/api');
const data = await response.json();
const [user] = data.results;
export default user;
