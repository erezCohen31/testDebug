export function sumTo(n) {
  let s = 0;
  for (let i = 1; i < n; i++) {
    s += i;
  }
  return s;
}
// the function run to n excluded and does not count
