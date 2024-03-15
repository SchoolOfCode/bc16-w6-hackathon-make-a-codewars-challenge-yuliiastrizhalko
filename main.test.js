import { test, expect } from "vitest";
import { countLeapYears } from "./main.js";

test("Count leap years between 1 and 2024", (t) => {
  const expected = 491; // The expected number of leap years between 1 and 2024
  const actual = countLeapYears(1, 2024);
  expect(actual).toBe(expected);
});
