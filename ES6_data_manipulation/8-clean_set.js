export default function cleanSet(set, startString) {
  // Handle edge case: empty startString
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const results = [];

  // Iterate through each element in the set
  for (const element of set) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const stringTail = element.slice(startString.length);
      results.push(stringTail);
    }
  }

  return results.join('-');
}