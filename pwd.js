module.exports = function pwd() {
  // process.stdin.on("data", (data) => {
  //   const cmd = data.toString().trim(); // remove the newline

  process.stdout.write(process.cwd());
  process.stdout.write("\nprompt > ");
};
