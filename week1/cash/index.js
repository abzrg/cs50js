import { getInt } from "../../helper/helper.js";

async function main() {
  const COINS = [25, 10, 5, 1];

  let change = null;
  while (true) {
    change = await getInt("Change owed: ");
    if (change !== null && change > 0) {
      break;
    }
    console.log("Not a positive integer. Try again.");
  }

  let coinCount = 0;
  // use 'of' instead of 'in'
  // 'in' only gives you index
  for (let coin of COINS) {
    const quotient = Math.floor(change / coin);
    coinCount += quotient;
    change -= coin * quotient;
  }

  console.log(coinCount);
}

main();
