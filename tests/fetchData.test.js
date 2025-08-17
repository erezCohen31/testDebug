import { addCount } from "../index.js";
import { describe, test } from "node:test";
import assert from "node:assert";
import { count } from "node:console";

describe("fetchData function", () => {
  test("func", async () => {
    const result = await addCount();
    assert.deepStrictEqual(result, 3);
  });
});
