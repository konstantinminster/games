const args = process.argv.slice(2);
const options = ["Rock", "Paper", "Scissors"]

const userPick = args;
const compPick = options[Math.floor(Math.random() * options.length)];

if (userPick == compPick) {
    console.log(`Beide haben ${args}! Es ist unentschieden`);
} else if (userPick == "Rock" && compPick == "Paper" || userPick == "Paper" && compPick == "Scissors" || userPick == "Scissors" && compPick == "Rock"  ) {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Der Computer gewinnt!`); // Stein verliegt gegen Papier
} else if (userPick == "Paper" && compPick == "Rock" || userPick == "Scissors" && compPick == "Paper" || userPick == "Rock" && compPick == "Scissors") {
    console.log(`Du hast ${userPick}! Der Computer hat ${compPick}! Du gewinnst!`); // Papier schlägt Stein
}  else {
    console.log("Something went wrong");
}

// check if user pick something from the array
const found = options.find((element) => element == args );
if (found == undefined) {
    console.log("Bitte wähle zwischen " + options.join(", "));
}