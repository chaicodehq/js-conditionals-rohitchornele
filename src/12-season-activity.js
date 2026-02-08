/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here

  if(month < 1 || month > 12) {
    return null
  }
  let seasonString;

  let plan = {
    season: "",
    activity : ""
  }

  if(month <= 2 || month === 12) {
    seasonString = "Winter";
  } else if(month <= 5) {
    seasonString = "Spring";
  } else if(month <= 8) {
    seasonString = "Summer";
  } else if(month <= 11) {
    seasonString = "Autumn";
  } else {
    return null
  }


  if(seasonString === "Winter") {
    plan.season = seasonString;
    if(temperature < 0) {
      plan.activity = "skiing"
    } else {
      plan.activity = "ice skating"
    }

  } else if(seasonString === "Spring") {
    plan.season = seasonString;
    if(temperature > 20) {
      plan.activity = "hiking"
    } else {
      plan.activity = "museum visit"
    }

  } else if(seasonString === "Summer") {
    plan.season = seasonString;
    if(temperature > 35) {
      plan.activity = "swimming"
    } else {
      plan.activity = "cycling"
    }

  } else if(seasonString === "Autumn") {
    plan.season = seasonString;
    if(temperature > 15) {
      plan.activity = "nature walk"
    } else {
      plan.activity = "reading at a cafe"
    }

  } else {
    return null
  }

  return plan;

}
