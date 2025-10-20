function greet() {
    let fname = "";
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " years old " + fname + " " + lname;
}

function trivia1() {
    let fname = document.getElementById("fname").value;
    let triviaAnswer = document.getElementById("trivia1-answer");

    // get values from the form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give results based off of what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong."
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong"
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are right!"
    }
    else {
        triviaAnswer.innerHTML = fname + ", you didn't select anything."
    }
}

function trivia2() {
    let fname = document.getElementById("fname").value;
    let triviaAnswer = document.getElementById("trivia2-answer");

    // get values from the form
    let spiderSelected = document.getElementById("spider").checked;
    let octopusSelected = document.getElementById("octopus").checked;
    let flamingoSelected = document.getElementById("flamingo").checked;

    // give results based off of what they selected
    if (spiderSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong."
    }
    else if (octopusSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong"
    }
    else if (flamingoSelected) {
        triviaAnswer.innerHTML = fname + ", you are right!"
    }
    else {
        triviaAnswer.innerHTML = fname + ", you didn't select anything."
    }

}

function trivia3() {
    let fname = document.getElementById("fname").value;
    let triviaAnswer = document.getElementById("trivia3-answer");

    // get value from the form
    let enteredPassword = document.getElementById("password").value;

    if (enteredPassword === "red" || enteredPassword === "Red") {
        triviaAnswer.innerHTML = fname + ", wow, how did you guess that!";
    } else {
        triviaAnswer.innerHTML = fname + ", ooh not right.";
    }
}
