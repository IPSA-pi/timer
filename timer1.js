/* eslint-disable max-len */
const args = process.argv.slice(2).map((a) => Number(a));

const filtered = args.filter((arg) => Number.isNaN(arg) !== true && arg > 0 );

filtered.map((a) => {
  setTimeout(() => {
    if (args.length === 0) {
      return;
    }
    process.stdout.write('\x07');
  }, a * 1000);
});

// the closest interval I can use to output system sounds on my system is 1100 ms
// process.stdout.write('\x07');
