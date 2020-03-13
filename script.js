quizApp.questions = [
    {
    question: "What music did you listen to as a teenager?",
    answers: [
        { description: "Pink floyd", score: [1, 0, 0, 0] },
        { description: "Beastie boys", score: [0, 1, 0, 0] },
        { description: "nirvana", score: [0, 0, 1, 0] },
        { description: "Nsync", score: [0, 0, 0, 1] },
    ]
    },
    {
        question: "What cartoon did you watch as a kid?",
        answers: [
            { description: "Scooby-Doo and Scrappy-Doo", score: [1, 0, 0, 0] },
            { description: "Teenage Mutant Ninja Turtles", score: [0, 1, 0, 0] },
            { description: "Rugrats ", score: [0, 0, 1, 0] },
            { description: "KIM POSSIBLE", score: [0, 0, 0, 1] },
        ]
    },
];

// in order to present on the website we will be looking over the questions
// we are going to be accessing each element in the questions and answers and we will be looping over the answers each time because we have multiple. for each answer object we are going to access the key description and then place that in the DOM. 
// we are going to place the description in the DOM and we are going to create a field to store the index of the answer in the questions array. 
// we are going to have a variable called finalScore - and the final score starts with 0,0,0,0 - for every time they select an answer (when they press submit) - we are going to get the index of the answer  - we are then able to grab the score by using dot notation


// Pseudo Code
// 
//  App Name | generation, you?
// 
//  A landing page with the app heading, "generation, you?" and a
//  "You're living in the past it's a new generation".
// 
//  present an image and A button that allows user to start their generation quiz, which will navigate to the questions.
// 
//  Listen to the button click event to hide the div with the image that was visible and present the div with the questions.
// 
//  questions with four images that will prompt the user to select their answers - these questions will be rendered using data structures kept in the js file

// quizApp.questions = [
//     {
//         question: "What music did you listen to as a teenager?",
//         answers: [
//             { description: "Pink floyd", score: [1, 0, 0, 0] },
//             { description: "Beastie boys", score: [0, 1, 0, 0] },
//             { description: "nirvana", score: [0, 0, 1, 0] },
//             { description: "Nsync", score: [0, 0, 0, 1] },
//         ]
//     },
//     {
//         question: "What cartoon did you watch as a kid?",
//         answers: [
//             { description: "Scooby-Doo and Scrappy-Doo", score: [1, 0, 0, 0] },
//             { description: "Teenage Mutant Ninja Turtles", score: [0, 1, 0, 0] },
//             { description: "Rugrats ", score: [0, 0, 1, 0] },
//             { description: "KIM POSSIBLE", score: [0, 0, 0, 1] },
//         ]
//     },
// ];


// Submit the answers to the questions using a button - then we will be listening to a button click event for that button. then we will compute the final score based on the answers that the user selected. 

// In order to determine the generation we are going to use an array where each position will represent a score for each generation.
// 

