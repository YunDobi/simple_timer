const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

let input = process.argv.slice(2);
let convertedNumber = input.map(Number)
console.log("setting timer for x seconds...");

for (let i = 0; i < convertedNumber.length; i++) {
  if (convertedNumber[i] <= 0) {
    continue;
  }
  if (isNaN(convertedNumber[i])) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`${convertedNumber[i]} seconds`);
  }, convertedNumber[i] * 1000);
  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!");
      process.exit();
    } else if (key === "b") {
      process.stdout.write('\x07');
    }
  });
}
