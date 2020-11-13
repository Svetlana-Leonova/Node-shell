const pwd = require("./pwd");
const dirList = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data event fires after a user types in a line
process.stdin.on("data", function (data) {
  const cmd = data.toString().trim(); // remove the newline
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    dirList();
  } else if (cmd.includes("cat")) {
    let str = cmd.slice(4);
    console.log(str, "aaaa");
    cat(str);
  } else if (cmd.includes("curl")) {
    let str = cmd.slice(5);
    curl(str);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
