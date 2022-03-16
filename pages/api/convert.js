// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

export default function handler(req, res) {
  let type = req.body.type
  let valueToConvert = req.body.value

  // Convert from Integer to Roman Numeral
  if (type === "roman") {
    valueToConvert = Number(valueToConvert)
    if (Number.isNaN(valueToConvert)) return res.status(400).json({ errMsg: 'Please enter an integer' })
    if (valueToConvert > 1000 || valueToConvert < 1) return res.status(400).json({ errMsg: 'Keep input between 1 and 1000' })
    let ans = convertToRoman(valueToConvert)
    res.status(200).json({ converted: ans })

    // Roman to Integer
  } else if (type === 'integer') {
    let ans = convertToInteger(valueToConvert.toUpperCase())
    if (!ans) return res.status(400).json({ errMsg: "Please enter a valid roman numeral" })
    else res.status(200).json({ converted: ans })
  } else {
    res.status(400).json({ errMsg: 'There was an error on our side, please refresh and try again' })
  }
}


function convertToRoman(num) {
  let ans = ""
  for (let i = 0; num; i++)
    while (num >= val[i]) ans += rom[i], num -= val[i]
  return ans
}

function convertToInteger(s) {
  let symbs = ["I", "V", "X", "L", "C", "D", "M"]
  let vals = [1, 5, 10, 50, 100, 500, 1000]
  let ans = 0;
  let legend = new Map()
  symbs.forEach((v, i) => {
    legend[v] = vals[i]
  })
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (legend[char] < legend[s[i + 1]]) {
      ans -= legend[char]
    } else {
      ans += legend[char]
    }
  }
  return ans
}