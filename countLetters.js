const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};

  for (const char of string) {
    if (char !== ' ') {
      results[char] ? results[char] += 1 : results[char] = 1;
    }
  }

  return results;
};

const string = "Lighthouse in the house";
const result1 = countLetters(string);

assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
assertEqual(result1['g'], 1);
assertEqual(result1['h'], 4);
assertEqual(result1['t'], 2);
assertEqual(result1['o'], 2);
assertEqual(result1['u'], 2);
assertEqual(result1['s'], 2);
assertEqual(result1['e'], 3);
assertEqual(result1['n'], 1);
