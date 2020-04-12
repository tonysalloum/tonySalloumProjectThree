const generations = [
    "Your generation grew up in the 70s",
    "Your generation grew up in the 80s",
    "Your generation grew up in the 90s",
    "your generation grew up in the 00s",
];

const questions = [
    {
        style: "music",
        question: "What music did you listen to as a teenager?",
        answers: [
            { description: "Pink Floyd", score: [1, 0, 0, 0], picture: "./assets/pinkFloyd.jpg", alt: "Pink Floyd album cover the Piper at the Gates of Dawn" },
            { description: "Beastie Boys", score: [0, 1, 0, 0], picture: "./assets/beastieBoys.jpg", alt: "Beastie Boys album cover check your head" },
            { description: "Nirvana", score: [0, 0, 1, 0], picture: "./assets/NirvanaNevermindAlbumCover.jpg", alt: "Nirvana album cover Nevermind"  },
            { description: "Nsync", score: [0, 0, 0, 1], picture: "./assets/nSync.png", alt: "NSync album cover of their self titled album" },
        ]
    },
    {
        style: "cartoon",
        question: "What cartoon did you watch as a kid?",
        answers: [
            { description: "Scooby-Doo", score: [1, 0, 0, 0], picture: "./assets/scoobyDoo.jpg", alt: "a cartoon cover of The Scooby Doo Show" },
            { description: "TMNT", score: [0, 1, 0, 0], picture: "./assets/teenageMutantNinjaTurtles.jpg", alt: "a cartoon cover of the Teenage Mutant Ninja Turtles" },
            { description: "Rugrats", score: [0, 0, 1, 0], picture: "./assets/rugrats1.jpg", alt: "a cartoon cover of the Rugrats show" },
            { description: "Kim Possible", score: [0, 0, 0, 1], picture: "./assets/kimPossible.jpg", alt: "a cartoon cover of Kim Possible show" },
        ]
    },
    {
        style: "tvShow",
        question: " What tv show did you watch as a teenager?",
        answers: [
            {
                description: "Different Strokes", score: [1, 0, 0, 0], picture: "./assets/differentStrokes.jpg", alt: "a dvd cover of the Different Strokes show" },
            { description: "Cheers", score: [0, 1, 0, 0], picture: "./assets/cheers.jpg" },
            { description: "Fresh Prince", score: [0, 0, 1, 0], picture: "./assets/freshPrince.jpg" },
            { description: "Gilmore Girls", score: [0, 0, 0, 1], picture: "./assets/gilmoreGirls.jpg" },
        ]
    },
    {
        style: "toy",
        question: "What toy did you play with as a kid?",
        answers: [
            { description: "Atari", score: [1, 0, 0, 0], picture: "./assets/atariConsole.png" },
            { description: "Mr. Potato Head", score: [0, 1, 0, 0], picture: "./assets/mrPotatoHead.png" },
            { description: "Tamagotchi", score: [0, 0, 1, 0], picture: "./assets/tamagotchi.png" },
            { description: "Scooter", score: [0, 0, 0, 1], picture: "./assets/razorScooterOld.png" },
        ]
    },
];

const App = {

    finalScore: [0, 0, 0, 0],

    populate: function () {


        // Loop over each quiz in questions array
        let quizHtml = "";
        for (let questionId = 0; questionId < questions.length; questionId++) {
            const quiz = questions[questionId];

            quizHtml += `<div id="quiz-${questionId}" class="quiz ${quiz.style}">`;
            quizHtml += `<p>${quiz.question}</p>`;
            quizHtml += `<ul>`

            // Loop over each answer option in answers array
            for (let answerId = 0; answerId < quiz.answers.length; answerId++) {
                const answerOption = quiz.answers[answerId];

                quizHtml += `
                <li>
                <a href="#" onclick="App.evaluateAnswer(this)" dataQuestionId=${questionId} dataAnswerId="${answerId}">${answerOption.description}
                <div class="imageContainer">
                <img src="${answerOption.picture}"/>
                </div>
                </a>
                </li>`;

                quizHtml += ``;
            }
            quizHtml += `</ul>`
            quizHtml += `</div>`;
        }

        // Presentation logic
        $("#score").hide();
        $("#quiz").append(quizHtml);
        $(".quiz").hide();
        $("#quiz-0").show();
        $("#refresh").hide();

    },

    evaluateAnswer: function (tag) {
        const questionId = $(tag).attr("dataQuestionId");
        const answerId = $(tag).attr("dataAnswerId");
        const answer = questions[questionId].answers[answerId];
        for (let index = 0; index < App.finalScore.length; index++) {
            App.finalScore[index] = App.finalScore[index] + answer.score[index];
        }

        // Presentation logic
        const nextQuestionId = parseInt(questionId) + 1;
        const nextQuestionElementId = `#quiz-${nextQuestionId}`;
        $(".quiz").hide();
        if (nextQuestionId >= questions.length) {
            $("#score").show();
        } else {
            $(nextQuestionElementId).show();
        }
    },

    computeScore: function () {
        let maxScore = 0;
        let maxScoreIndex = 0;
        for (let index = 0; index < App.finalScore.length; index++) {
            if (App.finalScore[index] > maxScore) {
                maxScore = App.finalScore[index];
                maxScoreIndex = index;
            }
        }

        // Presentation logic
        $("#score").hide();
        $("#generation").show();
        $("#computedGeneration").text(generations[maxScoreIndex]);
        $("#refresh").show();
    },


    log: function (message) {
        if (App.debug) {
        }
    }
};

function reloadThePage() {
    window.location.reload();
}

$(function () {
    App.populate();
});

