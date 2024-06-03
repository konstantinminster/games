const args = process.argv.slice(2);
const options = ["Rock", "Paper", "Scissors"]

// console.log("Es wurde gefunden: " + found);



const userPick = args;
const compPick = options[Math.floor(Math.random() * options.length)];

// console.log("You chose " + args);
// console.log("Computer chose " + compPick);

// Möglich kombinationen
// Rock / Paper = Paper wins
// Rock / Scissors = Rock wins
// Paper / Scissors = Scissors wins

if (userPick == compPick) {
    console.log(`Beide haben ${args}! Es ist unentschieden`);
} else if (userPick == "Rock" && compPick == "Paper" ) {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Der Computer gewinnt!`); // Stein verliegt gegen Papier
} else if (userPick == "Paper" && compPick == "Rock" ) {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Du gewinnst!`); // Papier schlägt Stein
} else if (userPick == "Paper" && compPick == "Scissors" ) {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Der Computer gewinnt!`); // Papier verliert gegen Schere
} else if (userPick == "Scissors" && compPick == "Paper" ) {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Du gewinnst!`); // Schäre schlägt papier
} else if (userPick == "Scissors" && compPick == "Rock" ) {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Der Computer gewinnt!`); // Stein schlägt schere
} else if (userPick == "Rock" && compPick == "Scissors" ) {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Du gewinnst!`); // Schere verliert gegen Stein
} else {
    console.log("Something went wrong");
}



// check if user pick something from the array
const found = options.find((element) => element == args );
if (found == undefined) {
    console.log("Bitte wähle zwischen " + options.join(", "));
}

