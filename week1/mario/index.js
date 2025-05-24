import { getInt } from "../../helper/helper.js";

async function main() {
  let height = null;

  while (height === null || height < 1 || height > 8) {
    height = await getInt("Height (1-8): ");
    if (height === null) {
      console.log("Not an integer. Try again.");
    } else if (height < 1 || height > 8) {
      console.log("Out of range");
    }
  }

  console.log("\nMario: Less\n");
  marioLess(height);

  console.log("\nMario: More\n");
  marioMore(height);
}

function marioLess(height) {
  for (let row = 1; row <= height; row++) {
    console.log("#".repeat(row));
  }
}

function marioMore(height) {
  const gap = "  ";
  for (let row = 0; row < height; row++) {
    const bricks = row + 1;
    const blanks = height - bricks;

    let left = " ".repeat(blanks) + "#".repeat(bricks);
    let right = "#".repeat(bricks);

    console.log(`${left}${gap}${right}`);
  }
}

main();
