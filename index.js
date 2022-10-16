// Characteristics:
// 1. Beauty: CHALK
// 2. Functionality: Levels (Which can be increased)
// 3. User friendly
// 4. Interactive

// Packages
const chalk = require('chalk');
var readlineSync = require('readline-sync');

// Variables
var score = 0;

// Taking username & giving greeting
var userName = readlineSync.question("Aur meri jaan, kya pukara jaye tumhe? ");
console.log(chalk.blue("Bhot swaagat hai tumhara " + userName + "!"));
console.log("------------------------------");

// Intro & rules
function intro(introQues, introAns) {
  var introUserAns = readlineSync.question(introQues);
  if (introAns === introAns) {
    console.log("------------------------------");
    console.log("Yeh kuch rules hain, inko dhyan mein rakhna boss!");
    var rules = ['1. First five question will be for level 1 and you need to score 3/5 to get into level 2.', '2. After completing the game, Take screenshot of your score and send it to me.'];
    for (i = 0; i < rules.length; i++) {
      console.log(chalk.magenta(rules[i]));
    }
  } else {
    console.log("Chal koi na, next time khelenge fir.")
  }
}
intro("Chalo ab tum itna door humse milne aa hi gaye ho to dekhte hain tum kitna acha jaante ho humein. \nTaiyaar ho? (Hai khud par bharosa then Type 'han'.) ", "han")
console.log("------------------------------");

// Confirmation of acceptence of participation
function rules(rulesQues, rulesAns) {
  var rulesUserAns = readlineSync.question(rulesQues);
  if (rulesAns === rulesAns) {
    console.log("------------------------------");
    console.log(chalk.red("Chaliye Agni Pariksha shuxru karte hain!"));
    console.log("------------------------------");
  } else {
    console.log("Chalo pehli fursat mein niklo ab.")
  }
}
rules("To ab khel shuru kare? (Type 'han' to get started) ", "han")


// Questions, answers & scores
function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log("Right!")
    score++;
  } else {
    console.log("Wrong!");
  }
  console.log("Your current score is: " + chalk.green.bold(score));
  console.log("------------------------------");
}

// Ques & ans database: Old
var level1 = [{
  question: '1. Humari dosti ki shuruaat kitne saal pehle hui thi? ',
  answer: '14'
}, {
  question: '2. Jab hum pehli baar mile the tab humari age kitni thi? ',
  answer: '8'
}, {
  question: '3. Tum mujhe bachpan mein kya kehkar bulate the? ',
  answer: 'chotu'
}, {
  question: '4. Humara bachpan mein sabse pasandida khel konsa tha? ',
  answer: 'cricket'
}, {
  question: '5. Hum kiss school mein sath padte the? ',
  answer: 'mdjain'
}];

var level2 = [{
  question: '6. Kya hum bachpan mein ek dusre se jhagda karte the? ',
  answer: 'han'
}, {
  question: '7. Hum konsa social media use karte the uss samay? ',
  answer: 'fb'
}, {
  question: '8. Kya naam tha uss ladki ka jisse hum dono ne mutually baat ki thi? ',
  answer: 'deeksha'
}, {
  question: '9. 1-10 tak ke scale par tumhe kya lagta hai tum mere liye kaha ho? ',
  answer: '8'
}]

// Repeatation of ques & ans
for (i = 0; i < level1.length; i++) {
  var currentQues = level1[i];
  play(currentQues.question, currentQues.answer);
}

// Qualification for L2
if (score >= 3) {
  console.log(chalk.yellowBright("Congrats!!! You've completed Level 1. \nAll the best for Level 2."));
  console.log("------------------------------");
  for (i = 0; i < level2.length; i++) {
    var currentQues = level2[i];
    play(currentQues.question, currentQues.answer);
  }
} else {
  console.log("Level 1 Completes. \nYou haven't scored >=3")
}

// Final score
console.log(chalk.red.bold("Your final score is: " + score));
console.log("-----------------------------------------------------------");

// Highscorers database
var highScore = [
  {
    name: 'Devu',
    score: 2
  },
  {
    name: 'Billa',
    score: 1
  }
]

// Comparison of current score with highscorers database
if (score > highScore[0].score) {
  console.log(chalk.blue.bold("Bhot bhadhayi " + userName + " bhai. \nTumne sabse zyada score kiya hai aur buss tum hi ho mere sache sakha!"));

  console.log("Check out the highest score makers before you: ");
  for (i = 0; i < highScore.length; i++) {
    var currentScore = highScore[i];
    console.log(currentScore.name, currentScore.score);
  }
} else if (score === highScore[0].score) {
  console.log("Oh it's a tie match. Tumne " + highScore[0].name + " ke barabar score kiya hai!")
} else {
  console.log("Check out the highest score makers before you: ");
  for (i = 0; i < highScore.length; i++) {
    var currentScore = highScore[i];
    console.log(currentScore.name, currentScore.score);
  }
}