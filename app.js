"use strict";

let myUsername;

function askName() {
  let myUsername = prompt("Hey, what's your name?");
  document.write(myUsername);
}

// Please answer true or false to the following questions.
// I have a black belt in a martial art.
// I was awarded a Blue Peter badge as a child.
// I had a cat called Ozzy, after Ozzy Osbourne of Black Sabbath.
// I once gave Queen Elizabeth a high-five
// I'm level 6 graded in Drums

function quizQuestions() {
  let correctAnswer = 0;
  let start = confirm(
    "You've clicked to start the quiz. Click Ok to start or Cancel to exit."
  );
  if (start === false) {
    alert("Quiz has been cancelled, you party pooper.");
    return;
  } else {
    alert("Let's begin! Remember, yes or no answers only.");
  }

  let blackBelt = prompt("I have a black belt in a martial art.").toLowerCase();
  if (blackBelt === "no") {
    alert("Wrong! Everbody was Kung Fu fighting! (including me).");
    // } else {
    //   console.log("Everbody was Kung Fu fighting! (including me).");
    // }
  } else {
    correctAnswer++;
    alert("Correct, everbody was Kung Fu fighting! (including me).");
  }

  let bluePeter = prompt(
    "I was awarded a Blue Peter badge as a child."
  ).toLowerCase();
  if (bluePeter === "yes") {
    alert("I wish! My girlfriend got one for doing some drawings though.");
    // } else {
    //   console.log("Yep, I haven't got one.");
    // }
  } else {
    correctAnswer++;
    alert("Yep, I haven't got one. I can still dream though, right?");
  }

  let ozzy = prompt(
    "I had a cat called Ozzy, after Ozzy Osbourne of Black Sabbath."
  ).toLowerCase();
  if (ozzy === "no") {
    alert(
      "Incorrect! I had one called Chilly too, after Red Hot Chilli Peppers."
    );
    // } else {
    //   console.log(
    //     "Nice one, I had another cat called Chilli too, named after the Red Hot Chilli Peppers."
    //   );
  } else {
    correctAnswer++;
    alert(
      "Nice one, I had another cat called Chilli too, named after the Red Hot Chilli Peppers."
    );
  }

  let queen = prompt("I once gave Queen Elizabeth a high-five.").toLowerCase();
  if (queen === "yes") {
    alert("I infact did not high five lizzie.");
    // } else {
    //   console.log("Well done, of course I didn't.");
    // }
  } else {
    correctAnswer++;
    alert("Well done, of course I didn't.");
  }

  let drums = prompt("I'm level 6 graded in Drums").toLowerCase();
  if (drums === "no") {
    alert("Bah dum tiss! I do have a grade 6 in Drums.");
    // } else {
    //   console.log("Yup! I started learning when I was 7 years old");
    // }
  } else {
    correctAnswer++;
    alert("Yup! I started learning when I was 7 years old.");
  }

  let ageQu = prompt(
    "Rounded up to a whole year, how old is my dog? Please answer with a number for this one."
  );
  let userAttempt = 0;

  for (let i = 0; i < 4; i++) {
    userAttempt++;
    if (ageQu > 2) {
      ageQu = prompt("She's not that old, please try again with a lower age!");
    } else if (ageQu < 2) {
      // userAttempt++;
      ageQu = prompt("Kor she's older than that! Please try again.");
    } else {
      correctAnswer++;
      alert("Nice one :) You got it right!");
      break;
    }
  }

  if (userAttempt >= 4) {
    alert("Sorry you have ran out of attempts. She is 2 years old.");
  }

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

  for (let i = 0; i < 5; i++) {
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

  if (answerAttempt >= 5) {
    alert(
      "Ah unlucky! Your options were either: Norwich, Cambridge, Essex or Dubai"
    );
  }

  if (correctAnswer > 6) {
    alert(
      "Wow! Full marks! Thanks for taking part in my quiz. You got " +
        correctAnswer +
        " questions right! Smashed it :)"
    );
    ``;
  } else if (correctAnswer > 3) {
    alert(
      "Nice one, you didn't do too bad. Thanks for taking part in my quiz. You got " +
        correctAnswer +
        " questions correct :)"
    );
  } else {
    alert(
      "Unlucky. You got " +
        correctAnswer +
        " questions correct. They do say it's the participation that counts :)"
    );
  }
}
