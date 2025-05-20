import readline from "node:readline";

function getInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      // Close immediately after input
      rl.close();
      resolve(answer);
    });
  });
}

export async function getInt(prompt) {
  const input = await getInput(prompt);
  const num = parseInt(input);
  return isNaN(num) ? null : num;
}
