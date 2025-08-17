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

export function findObjectByValue(objArr, value) {
  for (const obj of objArr) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if (element === value) {
          return obj;
        }
      }
    }
  }
  return "not found";
}

//with foreach return not work, we need to change with for or for of
//in the test we need to use deepstrictequal because an object is not primitive
// and in this case strictequal verify by reference and depp byvalue

export function fetchData() {
  return Promise.resolve({ count: 2 });
}
export function addCount(params) {
  return fetchData()
    .then((d) => {
      d.count += 1;
      return d;
    })
    .then((d) => d.count);
}
//the first then not return d

export const calc = {
  taxRate: 0.2,
  calcFN: function (salary) {
    return salary * this.taxRate;
  },
  calcSalary(salaryList) {
    console.log(`sal list`, salaryList);
    return salaryList.map((salary) => this.calcFN(salary));
  },
};

//taxrate is undefined calcFN not knows taxrate but with the anonymous function he guard the lexical and knows him
console.log(calc.calcSalary([0]));
