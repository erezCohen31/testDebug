export function sumTo(n) {
  let s = 0;
  if (n < 0) {
    for (let i = n; i < 0; i++) {
      s += i;
    }
  } else {
    for (let i = 0; i <= n; i++) {
      s += i;
    }
  }
  return s;
}
// the function run to n excluded and does not count
//if  n  negative  is not run

export function maxOrNull(arr) {
  let max = arr[0];
  for (const x of arr) if (x > max) max = x;
  return arr.length ? max : null;
}

//the max befin with the 0 in case of only negative number in arr its not work
