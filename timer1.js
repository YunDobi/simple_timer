let input = process.argv.slice(2);
let convertedNumber = input.map(Number)

for (let i = 0; i < convertedNumber.length; i++) {
  if (convertedNumber[i] <= 0) {
    continue;
  }
  if (isNaN(convertedNumber[i])) {
    continue
  }
  setTimeout(() => {
  process.stdout.write('\x07');
  console.log(`${convertedNumber[i]} seconds`)
}, convertedNumber[i] * 1000)
}
