const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable: ', (answer1) => {
  rl.question('What is an activity you like doing?: ', (answer2) => {
    rl.question('What is your favorite thing to eat?: ', (answer3) => {
      rl.question('What is your favorite sport? ', (answer4) => {
          console.log(`${answer1} loves to ${answer2}. His/her favorite thing to eat is ${answer3}. His/her favorite sport is ${answer4}.`);
          rl.close();
      });
    });
  }); 
});



