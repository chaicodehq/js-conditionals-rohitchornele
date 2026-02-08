/**
 * 💰 Sam's Tax Calculator
 *
 * Sam is a freelance graphic designer who dreads tax season every year.
 * Help Sam by building a tax calculator that uses progressive tax brackets.
 *
 * How progressive tax works:
 *   You don't pay the same rate on ALL your income. Each "slice" of income
 *   is taxed at its own rate:
 *
 *   Bracket 1: $0 – $10,000        → 0%  (tax-free!)
 *   Bracket 2: $10,001 – $30,000   → 10% (only on the amount ABOVE $10,000)
 *   Bracket 3: $30,001 – $70,000   → 20% (only on the amount ABOVE $30,000)
 *   Bracket 4: Over $70,000        → 30% (only on the amount ABOVE $70,000)
 *
 * Examples:
 *   - Income $8,000   → Tax = $0 (all in bracket 1)
 *   - Income $20,000  → Tax = 10% of ($20,000 - $10,000) = $1,000
 *   - Income $50,000  → Tax = $2,000 + 20% of ($50,000 - $30,000) = $6,000
 *   - Income $100,000 → Tax = $2,000 + $8,000 + 30% of ($100,000 - $70,000) = $19,000
 *
 * Rules:
 *   - If income is 0 or negative, return 0
 *
 * @param {number} income - Annual income in dollars
 * @returns {number} Total tax amount owed
 */
export function calculateTax(income) {
  // Your code here
  let taxAmount;
  let bracket1 = 10000;
  let bracket2 = 30000;
  let bracket3 = 70000;

  if (income <= bracket1) {
    taxAmount = 0;
  } else if (income <= bracket2) {
    taxAmount = bracketTwoTax(income, bracket1);
  } else if (income <= bracket3) {
    taxAmount = bracketThreeTax(income, bracket1, bracket2);
  } else {
    taxAmount = bracketFourTax(income, bracket1, bracket2, bracket3);
  }

  return taxAmount

} 


  function percentage(amount, percent) {
    let taxAmount = 0
    taxAmount = (amount * percent / 100);
    console.log(taxAmount)
    return taxAmount;
  }

  function bracketTwoTax (income, bracket1) {
    let amount = income - bracket1
    return amount = percentage(amount, 10)
  }

   function bracketThreeTax (income, bracket1, bracket2) {
    let firstTaxBracket = bracket2 - bracket1;
    let TaxBracket = income - bracket2;
     let firstTax = percentage(firstTaxBracket, 10);
    let amount = percentage(TaxBracket, 20);
    let total = firstTax + amount;

    return total
  }

  function bracketFourTax (income, bracket1, bracket2, bracket3) {
    let firstTaxBracket = bracket2 - bracket1;
    let secondTaxBracket = bracket3 - bracket2;
    let TaxBracket = income - bracket3;
    let firstTax = percentage(firstTaxBracket, 10)
    let secondTax = percentage(secondTaxBracket, 20)
    let amount = percentage(TaxBracket, 30)
    let total = amount + firstTax + secondTax;

    return total
  }
