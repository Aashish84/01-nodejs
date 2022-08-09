console.log("start");

async function sum(a, b) {
  return a + b;
}

sum(1, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("end");
