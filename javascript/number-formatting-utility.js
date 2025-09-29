// Number Formatting Utility
//   Create functions to:
//     Format numbers with comma separators (1234567 → "1,234,567")
//     Convert numbers to currency format
//     Handle negative numbers and decimals
//     Parse formatted strings back to numbers



//     Format numbers with comma separators (1234567 → "1,234,567")
function formatWithCommas(num){
  return num.toLocaleString('en-US')
}


console.log(formatWithCommas(121425368294.27))


//     Convert numbers to currency format
function formatCurrency(num, currency = 'KES') {
  return num.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
  });
}

console.log(formatCurrency(8934.50))



// Handle negative numbers and decimals
function formatCustom(num) {
  const sign = num < 0 ? '-' : '';
  const absNum = Math.abs(num).toFixed(2);
  return sign + formatWithCommas(absNum);
}

console.log(formatCurrency(-2845745.2384))



//     Parse formatted strings back to numbers
function parseFormatted(str) {
  return parseFloat(str.replace(/[^0-9.-]+/g, ''));
}

console.log(parseFormatted("-KES 2,845,745.24"))