"use strict";
let correctAnswer = 0;
let userAttempt = 0;
let start = 0;
let myUsername;

function askName() {
  let myUsername = prompt("Hey, what's your name?");
  document.write(myUsername);
  return myUsername;
}

function quizStart() {
  let start = confirm(
    "You've clicked to start the quiz. Click Ok to start or Cancel to exit."
  );
  if (start === true) {
    alert("Let's begin! Remember, yes or no answers only.");
    myQuiz();
  } else {
    alert("Quiz has been cancelled, you party pooper.");
    return;
  }
}

function myQuiz() {
  blackBeltQu();
  bluePeterQu();
  catQu();
  queenQu();
  drumsQu();
  dogQu();
  placesQu();
  marksCheck();
}

function blackBeltQu() {
  let blackBelt = prompt("I have a black belt in a martial art.").toLowerCase();
  if (blackBelt === "no") {
    alert("Wrong! Everbody was Kung Fu fighting! (including me).");
  } else if (blackBelt !== "yes" || blackBelt !== "no") {
    blackBelt = prompt("Sorry! Please answer with either 'yes' or 'no'.");
  } else if (blackBelt === "yes") {
    alert("Correct, everbody was Kung Fu fighting! (including me).");
    correctAnswer++;
  }
}

function bluePeterQu() {
  let bluePeter = prompt(
    "I was awarded a Blue Peter badge as a child."
  ).toLowerCase();
  if (bluePeter === "yes") {
    alert("I wish! My girlfriend got one for doing some drawings though.");
  } else if (bluePeter === "no") {
    alert("Yep, I haven't got one. I can still dream though, right?");
    correctAnswer++;
  } else if (bluePeter !== "yes" || bluePeter !== "no") {
    bluePeter = prompt("Sorry! Please answer with either 'yes' or 'no'.");
  }
}

function catQu() {
  let ozzy = prompt(
    "I had a cat called Ozzy, after Ozzy Osbourne of Black Sabbath."
  ).toLowerCase();
  if (ozzy === "no") {
    alert(
      "Incorrect! I had one called Chilly too, after Red Hot Chilli Peppers."
    );
  } else if (ozzy !== "yes" || ozzy !== "no") {
    ozzy = prompt("Sorry! Please answer with either 'yes' or 'no'.");
  } else {
    correctAnswer++;
    alert(
      "Nice one, I had another cat called Chilli too, named after the Red Hot Chilli Peppers."
    );
  }
}

function queenQu() {
  let queen = prompt("I once gave Queen Elizabeth a high-five.").toLowerCase();
  if (queen === "yes") {
    alert("I infact did not high five lizzie.");
  } else if (queen !== "yes" || queen !== "no") {
    queen = prompt("Sorry! Please answer with either 'yes' or 'no'.");
  } else {
    correctAnswer++;
    alert("Well done, of course I didn't.");
  }
}

function drumsQu() {
  let drums = prompt("I'm level 6 graded in Drums").toLowerCase();
  if (drums === "no") {
    alert("Bah dum tiss! I do have a grade 6 in Drums.");
  } else if (drums !== "yes" || drums !== "no") {
    drums = prompt("Sorry! Please answer with either 'yes' or 'no'.");
  } else {
    correctAnswer++;
    alert("Yup! I started learning when I was 7 years old.");
  }
}

function dogQu() {
  let ageQu = prompt(
    "Rounded up to a whole year, how old is my dog? Please answer with a number for this one."
  );

  for (let i = 1; i < 5; i++) {
    userAttempt++;
    if (ageQu > 2) {
      ageQu = prompt("She's not that old, please try again with a lower age!");
    } else if (ageQu < 2) {
      ageQu = prompt("Kor she's older than that! Please try again.");
    } else {
      correctAnswer++;
      alert("Nice one :) You got it right!");
      userAttempt--;
      break;
    }
  }

  if (userAttempt > 4) {
    alert("Sorry you have ran out of attempts. She is 2 years old.");
  }
}

function placesQu() {
  let myPlaces = [
    "cambridge",
    "norwich",
    "dubai",
    "essex",
    "danbury",
    "norfolk",
    "middle east",
  ];

  let placesAnswer = prompt(
    "After reading my About Me page, please tell me one place I have lived in."
  ).toLowerCase();
  let answerAttempt = 0;

  for (let i = 0; i <= 5; i++) {
    answerAttempt++;
    if (myPlaces.indexOf(placesAnswer) < 0) {
      placesAnswer = prompt(
        "Ah not quite, please try that again."
      ).toLowerCase();
    } else {
      correctAnswer++;
      alert("Yeah 100%! Well done for remembering that :)");
      break;
    }
  }

  if (answerAttempt > 5) {
    alert(`Ah unlucky! Your options were either: ${myPlaces}`);
  }
}

function marksCheck() {
  if (correctAnswer > 6) {
    alert(
      `Wow! Full marks! Thanks for taking part in my quiz. You got ${correctAnswer} questions right! Smashed it :)`
    );
  } else if (correctAnswer > 3) {
    alert(
      `Nice one, you didn't do too bad. Thanks for taking part in my quiz. You got ${correctAnswer} questions correct :)`
    );
  } else {
    alert(
      `Unlucky. You got ${correctAnswer} questions correct. They do say it's the participation that counts :)`
    );
  }
}
