// export function countLeapYears(startYear, endYear) {}

// our code has just two parameters - startYear and endYear
// count leap years from the first year of our era to 2024 A.D. inclusive ➕

// if you would like extra exercises you can try next 👇
// Count leap years from 2000 to 2024
// Count leap years from 100 to 200
// Count leap years from 2020 to 2024
// Good luck 🍀


export function countLeapYears(startYear, endYear) {
  let count = 0;
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countLeapYears(1, 2024));