function submit(){
    let score = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    
    answers.forEach(answer => {
        score += parseInt(answer.value);
    });

    // Store the score in localStorage
    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizName", "Q2");

    // Redirect to the results page
    window.location.href = "/scoring.html";
}

function getInterpretation(score) {
    if (score == 0) return "Grabe ba.";
    else if (score <= 5) return "Needs Improvement.";
    else if (score <= 10) return "There is still room for improvement.";
    else if (score <= 15) return "You're almost there. Keep it up!";
    else if (score <= 19) return "You made it! You're a GENIUS!";
    else if (score == 20) return "You are a master of Analytic Geometry! In this quiz I guess. ;)";
    else return "";
}