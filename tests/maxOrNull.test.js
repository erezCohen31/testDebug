import { maxOrNull } from "../index.js";

import { describe, test } from "node:test";
import assert from "node:assert";

describe("max orNull function test", () => {
  test("arr with positve number", () => {
    assert.strictEqual(maxOrNull([1, 2, 3]), 3);
  });
  test("with empty arr ", () => {
    assert.strictEqual(maxOrNull([]), null);
  });
  test("arr with mix of negative and positive number", () => {
    assert.strictEqual(maxOrNull([1, -4, 2]), 2);
  });
  test("arr with negative number", () => {
    assert.strictEqual(maxOrNull([-5, -2]), -2);
  });
});
