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

export async function getFloat(prompt) {
  const input = await getInput(prompt);
  const num = parseFloat(input);
  return isNaN(num) ? null : num;
}

export async function getString(prompt, trim=true) {
  const input = await getInput(prompt);
  return trim ? input.trim() : input;
}
