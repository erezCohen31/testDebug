import { sumTo } from "../index.js";

import { describe, test } from "node:test";
import assert from "node:assert";

describe("sumTo function test", () => {
  test("number", () => {
    assert.strictEqual(sumTo(5), 15);
  });
});
