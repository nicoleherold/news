wordList = []
chosenWord = []
numberOfRows = 6;
window.addEventListener('message', receiveMessage, false);

/* Funktionen */
// List Message vom Frontend aus und speichert Wortliste
function receiveMessage(event) {
  if (event.origin !== window.location.origin) return; // Verhindert Zugriff von anderen Ursprüngen
  let message = event.data;
  wordList = message.data;
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  let allWords =   document.getElementById('words');
  let wordsString = "";
  for (let w = 0; w < wordList.length; w++) {
    if (w != wordList.length -1) {
      wordsString = wordsString + wordList[w].toUpperCase() + ", ";
    }
    if (w == wordList.length -1) {
      wordsString = wordsString + wordList[w].toUpperCase();
    }

  }
  allWords.innerHTML += wordsString;
  // console.log(wordList);
}

//zählt wie oft ein Buchstabe im Wort vorkommt
function countLetterInWord(letter, word) {
  let letters = word.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letter) {
      count++;
    }
  }
  // gibt zurück, wie oft Buchstabe im Wort vorkommt
  return count;
}

// definiert, dass wir in Zeile mit index 0 sind:
let wordRows = 0;

const inputContainer = document.getElementById("inputs");
const feedbackDiv = document.getElementById('feedback');

// i ist die Zeile, j die Spalte
for (let i = 0; i < numberOfRows; i++) {
  const row = document.createElement("div");
  row.id = "row" + i;
  row.classList.add("row");


  for (let j = 0; j < 5; j++) {
    const letterInput = document.createElement("input");
    letterInput.maxLength = 1;
    letterInput.id = "letter"+i+j;
    letterInput.type = "text";

    // Funktion um zum nächsten Buchstaben zu springen
    letterInput.addEventListener('input', function () {
      if (this.value.length == this.maxLength) {
          var next = this.nextElementSibling;
          if (next) {
              next.focus();
          }
      }
  });

    
    //falls nicht die erste Zeile, dann input nicht möglich machen
    if (i !== 0) {
      letterInput.disabled = true;
      letterInput.classList.add("gray")
    }
    row.appendChild(letterInput);
  }
  inputContainer.appendChild(row);
}

const checkButton = document.getElementById("check");
checkButton.addEventListener("click", () => {
  const currentRow = document.getElementById(`row${wordRows}`);
  // inputs: alle Buchstaben
  const inputs = currentRow.querySelectorAll("input");

  feedbackDiv.textContent = "";
  let guessedWord = "";

  // eingegebenes Wort wird erstellt
  inputs.forEach(input => {
    guessedWord += input.value.toLowerCase();
  });

  if (guessedWord.length === 5) {
    if (wordList.includes(guessedWord)) {
      let correct = 0;
      let incorrectCount = {};
      foundCharacters = {}
      for (let i = 0; i < 5; i++) {
        //falls Buchstaben gleich, dann grün
        if (guessedWord[i] === chosenWord[i]) {
          inputs[i].classList.add("green");
          correct++;

          if (!(guessedWord[i] in foundCharacters)) {
            foundCharacters[guessedWord[i]] = 0;
          }
          foundCharacters[guessedWord[i]] = foundCharacters[guessedWord[i]] + 1;


          // falls Buchstabe schon vorkam und auf orange gesetzt wurde --> nachkorrigieren:
          // falls Buchstabe schon mal an falscher Stelle vorkam, aber nur einmal und derBuchstabe genau einmal vorkommt im Wort, dann organge-Klasse removen
          if ((guessedWord[i] in incorrectCount) && (incorrectCount[guessedWord[i]].value == 1) && countLetterInWord(guessedWord[i], chosenWord)==1){
            indexToChange = incorrectCount[guessedWord[i]].indexes[0]
            inputs[indexToChange].classList.remove("orange");
          }


          // falls Buchstabe vorkommt, dann checken wie oft er vorkommt und orange
        } else if (chosenWord.includes(guessedWord[i])) {
            //Buchstabe der im Wort vorkommt aber an falscher Stelle ist
            const letter = guessedWord[i];
            //falls letter noch nicht in Objekt incorrectCount vorhanden, dann reinschreiben mit Value 0
            if (!(letter in incorrectCount)) {
                incorrectCount[letter] = {value:0, indexes:[]};
                
              }
              console.log(incorrectCount)
              // falls schon vorhanden, dann um 1 erhöhen
              number = incorrectCount[letter].value + 1
              incorrectCount[letter].value = number;
              incorrectCount[letter].indexes.push(i)
            // falls Anzahl des Buchstabens kleiner oder gleich der Anzahl des Letters im Wort ist: orange
            if (incorrectCount[letter].value <= countLetterInWord(letter, chosenWord)) {
                inputs[i].classList.add("orange");
                // falls aber character bereits gefunden, also grün ist und der character nicht öfter vorkommt, dann nicht orange machen
                if ((letter in foundCharacters) && (countLetterInWord(letter, chosenWord))<=foundCharacters[letter]){
                  inputs[i].classList.remove("orange");
                }
          }
        }
        // aktuelle geprüfte Zeile wird read only gesetzt
        inputs[i].readOnly = true;
      }

      if (correct === 5) {         
        feedbackDiv.textContent = `Gefunden! Das gesuchte Wort ist ${chosenWord.toUpperCase()}`;
      } else {
        wordRows++;
        if (wordRows < numberOfRows) {
          const nextRowInputs = document.querySelectorAll(`#row${wordRows} input`);
          nextRowInputs.forEach(input => {
            input.disabled = false;
            input.classList.remove("gray")
          });
        } else {
          feedbackDiv.textContent = `Verloren! Das gesuchte Wort war ${chosenWord.toUpperCase()}`;
        }
      }
    } else {
      feedbackDiv.textContent = `Ungültiges Wort! Bitte geben Sie ein Wort mit 5 Buchstaben aus dem Artikel ein!`;
    }
  } else {
    feedbackDiv.textContent = `Das Wort muss 5 Buchstaben haben. Bitte geben Sie ein Wort mit 5 Buchstaben aus dem Artikel ein`;
  }
});