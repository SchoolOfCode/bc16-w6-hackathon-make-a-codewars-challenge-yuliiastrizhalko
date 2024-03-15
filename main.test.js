import { test, expect } from "vitest";
import { countLeapYears } from "./main.js";

test("Count leap years between 1 and 2024", () => {
  const expected = 491; // The expected number of leap years between 1 and 2024
  const actual = countLeapYears(1, 2024);
  expect(actual).toBe(expected);
});

test("Count leap years from 2000 to 2024", () => {
  expect(countLeapYears(2000, 2024)).toBe(6); // 2000, 2004, 2008, 2012, 2016, 2020
});

test("Count leap years from 100 to 200", () => {
  expect(countLeapYears(100, 200)).toBe(24); // Every 4th year starting from 100 is a leap year
});

test("Count leap years from 2020 to 2024", () => {
  expect(countLeapYears(2020, 2024)).toBe(2); // 2020, 2024
});
