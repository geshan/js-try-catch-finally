const jsonString = '{"key: "value"}';

try {
  const json = JSON.parse(jsonString);
  console.info(json.key);
} catch (err) {
  console.error('Error parsing JSON string: ', err.message);
  console.error('Error stack: ', err.stack);
  console.error('Error name: ', err.name);
  console.info(err instanceof SyntaxError); // true
}
