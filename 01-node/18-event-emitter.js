// simple exmaple
//github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/13-event-emitter.js

// setTimeout make it async function so event is registered and then function is called
// otherwise the emit should be done after on -> on first and then emit

var emitter = require("events").EventEmitter;

function LoopProcessor(num) {
  var e = new emitter();

  setTimeout(function () {
    for (var i = 1; i <= num; i++) {
      e.emit("BeforeProcess", i);

      console.log("Processing number:" + i);

      e.emit("AfterProcess", i);
    }
  }, 0);

  return e;
}
var lp = LoopProcessor(3);

lp.on("BeforeProcess", function (data) {
  console.log("About to start the process for " + data);
});

lp.on("AfterProcess", function (data) {
  console.log("Completed processing " + data);
});
