//TODO divide this in multiple script files
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

let database1 = [
    ['Dolphin', 96, 108, 89],
    ['Koala', 88, 91, 110]
];

let database2 = [
    ['Dolphin', 97, 112, 101],
    ['Koala', 109, 95, 106]
];



function mainDataConclusion() {
    let isScoreOVer100 = isMinimumRequirementsToQualify(dolphinMeansData2, 'Dolphin') && isMinimumRequirementsToQualify(koalasMeansData2, 'Koala');
    let isDolphinWinner = displayHigerScoreMessageOnInterface(dolphinMeansData2, koalasMeansData2, isScoreOVer100);
    if (isDolphinWinner === -1 && isScoreOVer100) { log("Final results: Both teams are the Winner!"); return; }
    if (isDolphinWinner) log("As expecte Dolphin Wins!");
    else log("As expected Koala Wins!");
}

/*
function parseArray(database) {
    console.table(database);
    database.forEach((teamData)
    for (let i = 0; i < teamData.length; i++) {

    }
    );
}
*/

function isMinimumRequirementsToQualify(meansOfScores, nameOfTeam) {
    if (meansOfScores > 100) {
        log('Team ${nameOfTeam} is qualified! ');
        return true;
    }
    else {
        log('Team ${nameOfTeam} is disqualified! Cause of ${meansOfScores} is lower then 100.');
        return false;
    }
}
//TO do stings should be const

function displayHigerScoreMessageOnInterface(dolphinData, koalaData, isScoresOver100) {
    changeScoresButtons();
    if (selecWinnerOfCompetition(dolphinData, koalaData) === -1) {
        log("Both teams have the same score!");
        if (isScoresOver100) {
            document.getElementById("scores").innerHTML = "Both teams may be the winner!";
        }
        else {
            document.getElementById("scores").innerHTML = "No one wins! /n Scores are bellow 100!";
        }
        return -1;
    }
    if (selecWinnerOfCompetition(dolphinData, koalaData) === dolphinData) {
        log('Dolphin have the higher score');
        document.getElementById("scores").innerHTML = "Dolphin wins!";
    }
    else {
        log('Koala have the higer score');
        document.getElementById("scores").innerHTML = "Koala wins!";
        return false;
    }
}

function selecWinnerOfCompetition(score1, score2) {
    if (score1 > score2) {
        log('score1 with value ${score1} is with the higer score');
        return score1;
    }
    else if (score1 === score2) {
        log('both have the same value: ${score1}');
        return -1;
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
