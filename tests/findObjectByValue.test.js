import { findObjectByValue } from "../index.js";

import { describe, test } from "node:test";
import assert from "node:assert";

describe("findObjectByValue functio", () => {
  test("with empty arr", () => {
    assert.strictEqual(findObjectByValue([], "alice"), "not found");
  });
  test("with good arr", () => {
    assert.deepStrictEqual(
      findObjectByValue([{ name: "alice" }, { name: "bob" }], "alice"),
      { name: "alice" }
    );
  });
});
