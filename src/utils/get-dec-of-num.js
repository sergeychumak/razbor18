const decCache = []
const decCases = [2, 0, 1, 1, 1, 2]

// declension of numbers
function getDecOfNum (number, titles) {
  if (!decCache[number]) {
    // eslint-disable-next-line no-magic-numbers
    decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)]
  }
  return titles[decCache[number]]
}

export default getDecOfNum
