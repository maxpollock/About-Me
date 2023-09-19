function askName() {
  let username = prompt("Hey, what's your name?");
  document.write(username);
}

// Please answer true or false to the following questions.
// I have a black belt in a martial art.
// I was awarded a Blue Peter badge as a child.
// I had a cat called Ozzy, after Ozzy Osbourne of Black Sabbath.
// I once gave Queen Elizabeth a high-five
// I'm level 6 graded in Drums

function quizQuestions() {
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
    alert("Well done, of course I didn't.");
  }

  let drums = prompt("I'm level 6 graded in Drums").toLowerCase();
  if (drums === "no") {
    alert("Bah dum tiss! I do have a grade 6 in Drums.");
    // } else {
    //   console.log("Yup! I started learning when I was 7 years old");
    // }
  } else {
    alert("Yup! I started learning when I was 7 years old.");
  }

  alert("Thanks for taking part in my quiz. You did a good job :).");
}
