const inputWords = process.argv.slice(2).join(' ');
function convertToSchweinisch(word) {
    const vowals = ["a", "e", "i", "o", "u"];
    const lowerCase = word.toLowerCase();
    if (vowals.includes(lowerCase[0])) { // wenn erster buchstabe ein vocal
         return word + "way"; 
    } else if (!vowals.includes(lowerCase[0]) && !vowals.includes(lowerCase[1])) { // wenn buchstabe 1 und 2 vocal = false
       return word.slice(2) + word.slice(0, 2) + "ay"; // alle buchstaben ab 3. position + die ersten zwei buchsten + ay
    } else {
        return word.slice(1) + word[0] + "ay"; // nimm den ersten füge rest an den anfang und füge ay hinzu
    }
}
 const pigLatinOutput = "Schweinisch: " + inputWords.split(' ').map(convertToSchweinisch).join(' ').toLowerCase(); // ja es müsste noch ein logic wenn großbuchstabe dann mache ersten buchen gross

console.log(pigLatinOutput);
