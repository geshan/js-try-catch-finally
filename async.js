
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com1/users/1');
    console.log('User data:', await response.json());
  } catch (err) {
    console.error('Error fetching user:', err.message);
    console.error('Error stack: ', err.stack);
    console.error('Error name: ', err.name);
    console.info(err instanceof TypeError); // true
  }
}

getUser();
