/* eslint-disable max-len */

// get command line args passed by the user and convert them to number
const args = process.argv.slice(2).map((a) => Number(a));

// filter the arguments array and only keep values that aren't NaN and are greater than 0
const filtered = args.filter((arg) => Number.isNaN(arg) !== true && arg > 0 );

// map over each filtered argument, and for each one we'll create a setTimeout that outputs sound
// after the defined time by the user in secs (we multiply it by a 1000 since setTimeout's 2nd arg should be in ms.).
filtered.map((a) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, a * 1000);
});

// eslint Parsing error: 'return' outside of functioneslint line 4 ???
// the closest interval I can use to output system sounds on my system is 1100 ms
// process.stdout.write('\x07');
