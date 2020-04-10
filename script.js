// Draft 5
// References:
// - https://www.w3schools.com/tags/att_global_data.asp
const generations = [
    "your generation is the 70s",
    "your generation is the 80s",
    "your generation is the 90s",
    "your generation is the 2000s",
];

const questions = [
    {
        style: "music",
        question: "What music did you listen to as a teenager?",
        answers: [
            { description: "Pink Floyd", score: [1, 0, 0, 0], picture: "./assets/Dark_Side_of_the_Moon.png" },
            { description: "Beastie Boys", score: [0, 1, 0, 0], picture: "./assets/BeastieBoysPaul'sBoutique.jpg" },
            { description: "Nirvana", score: [0, 0, 1, 0], picture: "./assets/NirvanaNevermindalbumcover.jpg" },
            { description: "Nsync", score: [0, 0, 0, 1], picture: "./assets/220px-Nsync_(album)_alternate.png" },
        ]
    },
    {
        style: "cartoon",
        question: "What cartoon did you watch as a kid?",
        answers: [
            { description: "Scooby-Doo and Scrappy-Doo", score: [1, 0, 0, 0], picture: "./assets/250px-Scooby-gang-1969.jpg" },
            { description: "Teenage Mutant Ninja Turtles", score: [0, 1, 0, 0], picture: "./assets/Teenage-Mutant-Ninja-Turtles.jpg" },
            { description: "Rugrats", score: [0, 0, 1, 0], picture: "./assets/Rugrats_logo.png" },
            { description: "Kim Possible", score: [0, 0, 0, 1], picture: "./assets/200px-Kim_Possible_(promo_art).jpg" },
        ]
    },
    {
        style: "tvShow",
        question: " Which tv show did you watch as a teen?",
        answers: [
            { description: "different strokes", score: [1, 0, 0, 0], picture: "./assets/Diffrentstrokes.jpg" },
            { description: "cheers", score: [0, 1, 0, 0], picture: "./assets/220px-Cheers_season_11.jpg" },
            { description: "fresh prince of bel-air", score: [0, 0, 1, 0], picture: "./assets/220px-Fresh_Prince_S1_DVD.jpg" },
            { description: "gilmore girls", score: [0, 0, 0, 1], picture: "./assets/2250px-Gilmore_girls_title_screen.jpg" },
        ]
    },
    {
        style: "toy",
        question: "What music did you listen to as a teenager?",
        answers: [
            { description: "atari", score: [1, 0, 0, 0], picture: "./assets/Atari-2600-Wood-4Sw-Set.png" },
            { description: "mr. potato head", score: [0, 1, 0, 0], picture: "./assets/mr-potato-head.jpg" },
            { description: "tamagotchi", score: [0, 0, 1, 0], picture: "./assets/220px-Tamagotchi_0124_ubt.jpeg" },
            { description: "scooter", score: [0, 0, 0, 1], picture: "./assets/Razor_old_a.jpg" },
        ]
    },
];

const App = {
    debug: true,

    finalScore: [0, 0, 0, 0],

    populate: function () {
        App.log("Starting populating application");

        // Loop over each quiz in questions array
        let quizHtml = "";
        for (let questionId = 0; questionId < questions.length; questionId++) {
            const quiz = questions[questionId];
            App.log(`Processing question ${questionId}: ${quiz.question}`);

            quizHtml += `<div id="quiz-${questionId}" class="quiz ${quiz.style}">`;
            quizHtml += `<p>${quiz.question}</p>`;
            quizHtml += `<ul>`

            // Loop over each answer option in answers array
            for (let answerId = 0; answerId < quiz.answers.length; answerId++) {
                const answerOption = quiz.answers[answerId];
                App.log(`Processing answer ${answerId}: ${answerOption.description}`);

                quizHtml += `
                <li>
                <a href="#" onclick="App.evaluateAnswer(this)" data-question-id=${questionId} data-answer-id="${answerId}">${answerOption.description}</a>
                <div>
                <img src="${answerOption.picture}"/>
                </div>
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

        App.log("Finishing populating application");
    },

    evaluateAnswer: function (tag) {
        App.log("Starting handling answer click");

        const questionId = $(tag).attr("data-question-id");
        const answerId = $(tag).attr("data-answer-id");
        App.log(`Retrieved questionId=${questionId} and answerId=${answerId}`);

        const answer = questions[questionId].answers[answerId];
        App.log(`Selected answer is ${answer.description}`);
        App.log(`Selected answer score is ${answer.score}`);

        for (let index = 0; index < App.finalScore.length; index++) {
            App.finalScore[index] = App.finalScore[index] + answer.score[index];
        }
        App.log(`Current score is ${App.finalScore}`);

        // Presentation logic
        const nextQuestionId = parseInt(questionId) + 1;
        const nextQuestionElementId = `#quiz-${nextQuestionId}`;
        $(".quiz").hide();
        if (nextQuestionId >= questions.length) {
            App.log(`showing the final score`)
            $("#score").show();
        } else {
            App.log(`Presenting next question as ${nextQuestionElementId}`);
            $(nextQuestionElementId).show();
        }


        App.log("Finishing handling answer click");
    },

    computeScore: function () {
        App.log("Starting computing score click");

        App.log(`Final score is ${App.finalScore}`);
        let maxScore = 0;
        let maxScoreIndex = 0;
        for (let index = 0; index < App.finalScore.length; index++) {
            App.log(`User score for [${generations[index]}] generation is ${App.finalScore[index]}`);

            if (App.finalScore[index] > maxScore) {
                maxScore = App.finalScore[index];
                maxScoreIndex = index;
            }
        }
        App.log(`User generation is ${generations[maxScoreIndex]}: ${maxScore} score`);

        // Presentation logic
        $("#score").hide();
        $("#generation").show();
        $("#computedGeneration").text(generations[maxScoreIndex]);
        $("#refresh").show();


        App.log("Finishing computing score click");
    },


    log: function (message) {
        if (App.debug) {
            // console.log(message);
        }
    }
};

function reloadThePage() {
    window.location.reload();
} 

$(function () {
    App.populate();
    // function reloadThePage() {
    //     window.location.reload();
    // } 
});
