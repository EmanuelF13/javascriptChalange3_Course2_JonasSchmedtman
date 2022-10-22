
var log = console.log.bind(console);
var debugLog = console.log.bind(console, "DEBUG");
var xmlhttp = new XMLHttpRequest();
//const DATABASE_PATH = "E:/GitTest/javascriptBegining/scoreDatabase.json";
//const testDB = "file://E:/GitTest/javascriptBegining/scoreDatabase.json"
const DATABASE_PATH = "./scoreDatabase.json";


/*
function addData() {
    // scores = prompt("Please insert scores separated by values, or leave blank to show from database");
    console.log("Hello World!");
    parseJSON(DATABASE_PATH);
}

function removeData() {
    document.getElementById("scores").style.display = "none";
    changeScoresButtons();
}



async function parseJSON(path_to_database) {
    document.getElementById("scores").style.display = "block";
    changeScoresButtons();
    log('This p with id scores was made visible');
    let data = readTextFile(await path_to_database);
    log("Data extracted form db is: " + data);
}
*/
function changeScoresButtons() {
    const statusofScoresButton = window.getComputedStyle(scores).display;
    log(`Score button display status is ${statusofScoresButton}`);
    if (statusofScoresButton !== "block") {
        document.getElementById("getScoresButton").style.display = "none";
        document.getElementById("removeScoresButton").style.display = "block";
        document.getElementById("scores").style.display = "block";
    }
    else {
        document.getElementById("getScoresButton").style.display = "block";
        document.getElementById("removeScoresButton").style.display = "none";
        document.getElementById("scores").style.display = "none";
    }
}


let dolphinMeansData1 = averageScore(96, 108, 89);
let koalasMeansData1 = averageScore(88, 91, 110);

let dolphinMeansData2 = averageScore(97, 112, 101);
let koalasMeansData2 = averageScore(109, 95, 106);

function displayHigerScoreMessage() {
    changeScoresButtons();
    if (selecWinnerOfCompetition(dolphinMeansData1, koalasMeansData1) === dolphinMeansData1) {
        log('Dolphin have the higher score');
        document.getElementById("scores").innerHTML = "Dolphin wins!";
    }
    else {
        log('Koala have the higer score');
        document.getElementById("scores").innerHTML = "Koala wins!";
    }
}

function selecWinnerOfCompetition(score1, score2) {
    if (score1 > score2) {
        log('score1 with value ${score1} is with the higer score');
        return score1;
    }
    else if (score1 === score2) {
        log('both have the same value: ${score1}');
        return score1;
    }
    else {
        log('score2 with value ${score2} is with the higer score');
        return score2;
    }
}

function averageScore(...scores) {
    var scoreCounter = 0;
    var sumOfScores = 0;
    /*
    foreach(score in scores){
        score = converterIntoNumber(score);
        console.log("This score was added to the calculation :" + score);
        scoreCounter++;
        sumOfScores = sumOfScores + score;
}
        */
    scores.forEach(score => {
        score = converterIntoNumber(score);
        log("This score was added to the calculation :" + score);
        scoreCounter++;
        sumOfScores = sumOfScores + score;
    });
    let meanOfScores = sumOfScores / scoreCounter;
    console.log(`There where added a total of ${scoreCounter} scores that sum up to ${sumOfScores}. The means value obtain is ${meanOfScores}`);
    return meanOfScores;
}

function converterIntoNumber(valueToBeConverted) {
    if (typeof valueToBeConverted === 'number') {
        console.log("This value is a number " + valueToBeConverted);
        return valueToBeConverted;
    }
    else {
        console.log("Trying to convert value " + valueToBeConverted + "into a number!");
        return Number(valueToBeConverted);
    }
}
