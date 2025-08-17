import { sumTo } from "../index.js";

import { describe, test } from "node:test";
import assert from "node:assert";

describe("sumTo function test", () => {
  test("with 0", () => {
    assert.strictEqual(sumTo(0), 0);
  });
  test("with negative number", () => {
    assert.strictEqual(sumTo(-1), -1);
  });
  test("positve number", () => {
    assert.strictEqual(sumTo(4), 10);
  });
});
