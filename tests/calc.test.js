import { calc } from "../index.js";
import { describe, test } from "node:test";
import assert from "node:assert";

describe("calc function", () => {
  test("with one salary 0", async () => {
    assert.deepStrictEqual(calc.calcSalary([0]), [0]);
  });
  test("with one salary ", async () => {
    assert.deepStrictEqual(calc.calcSalary([100]), [20]);
  });
  test("with two salary ", async () => {
    assert.deepStrictEqual(calc.calcSalary([100, 200]), [20, 40]);
  });
});
