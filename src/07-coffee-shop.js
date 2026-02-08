/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  let basePrice;

  if (size === "small" || size === "medium" || size === "large") {
    if (type === "regular" || type === "latte" || type === "cappuccino" || type === "mocha") {
      if (size === "small") {
        basePrice = 3.00;
      } else if (size === "medium") {
        basePrice = 4.00;
      } else if (size === "large") {
        basePrice = 5.00;
      } else {
        basePrice = basePrice;
      }

      if (type === "latte") {
        basePrice = basePrice + 1.00;
      } else if (type === "cappuccino") {
        basePrice = basePrice + 1.50;
      } else if (type === "mocha") {
        basePrice = basePrice + 2.00;
      } else {
        basePrice = basePrice;
      }

      if (extras.whippedCream) {
        basePrice = basePrice + 0.50;
      }
      if (extras.extraShot) {
        basePrice = basePrice + 0.75;
      }

    } else {
      return -1;
    }
  } else {
    return -1;
  }

  return basePrice;

}
