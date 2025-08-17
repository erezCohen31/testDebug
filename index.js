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
