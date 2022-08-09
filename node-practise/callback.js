console.log("start");

function demo(a, b, fun) {
  let sum = a + b;
  fun(sum);
}

demo(4, 5, (param) => {
  console.log(param);
});

demo(4, 4, (param) => {
  if (param % 2 == 0) {
    console.log("the sum is even");
  } else {
    console.log("the sum is odd");
  }
});

console.log("end");
