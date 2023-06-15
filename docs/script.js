
// List json file und übergibt Daten an Main-function appendData
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });



// Main-Function
function appendData(data) {
    let mainContainer = document.getElementById("allArticles");
    // Loop über alle Artikel
    for (let i = 0; i < data.length; i++) {
        //Headlineelemente erstellen
        let divTitleheader = document.createElement("div");
        divTitleheader.classList.add('titleheader');
        divTitleheader.innerHTML = data[i].titleheader 

        let divTitle = document.createElement("div");
        divTitle.classList.add('title');
        divTitle.innerHTML = data[i].title
        
        let divLead = document.createElement("div");
        divLead.classList.add('lead');
        divLead.innerHTML = data[i].lead

        // Original-Text und Button dazu erstellen
        let divOriginal = document.createElement("div");
        divOriginal.classList.add('original');
        divOriginal.classList.add('hidden');
        let idName = 'originalText' + i
        divOriginal.id = idName;
        divOriginal.innerHTML = '<b>Original:</b> ' + data[i].originaltext  + '<br><b>' + data[i].flesch[0] + '</b>'

        let originalButton = document.createElement('button');
        originalButton.innerHTML = 'Original';
        originalButton.classList.add('buttonOriginal');
        originalButton.onclick =  function() {
            originalButton.classList.toggle("active");
            let idName = 'originalText' + i
            let original = document.getElementById(idName);
            if (original.classList.contains("hidden")) {
                original.classList.remove("hidden");
                original.classList.add("visible");
            } else {
                original.classList.remove("visible");
                original.classList.add("hidden");
            }
          };

        //  Button zu Artikel-Link erstellen
        let urlButton = document.createElement('button');
        urlButton.innerHTML = 'Artikel >>';
        urlButton.classList.add('url');
        urlButton.onclick = function() {
            //urlButton.classList.toggle("active");
            window.open(data[i].url, '_blank');
            };

        //  Owwn = Wortbewertungsalgo-Text und Button dazu erstellen
        let divOwn = document.createElement("div");
        divOwn.classList.add('own');
        divOwn.classList.add('hidden');
        let idOwn = 'own' + i
        divOwn.id = idOwn;
        divOwn.innerHTML = '<b>Own:</b> ' + data[i].own 

        let ownButton = document.createElement('button');
        ownButton.innerHTML = 'Own';
        ownButton.classList.add('buttonSumy');
        ownButton.onclick =  function() {
            ownButton.classList.toggle("active");
            let idOwn = 'own' + i
            let own = document.getElementById(idOwn);
            if (own.classList.contains("hidden")) {
                own.classList.remove("hidden");
                own.classList.add("visible");
            } else {
                own.classList.remove("visible");
                own.classList.add("hidden");
            }
          };

        //  Sumy-Text und Button dazu erstellen        
        let divSumy = document.createElement("div");
        divSumy.classList.add('sumy');
        divSumy.classList.add('hidden');
        let idSumy = 'sumy' + i
        divSumy.id = idSumy;
        divSumy.innerHTML = '<b>Sumy:</b> ' + data[i].lexrank_sumy 

        let sumyButton = document.createElement('button');
        sumyButton.innerHTML = 'Sumy';
        sumyButton.classList.add('buttonSumy');
        sumyButton.onclick =  function() {
            sumyButton.classList.toggle("active");
            let idSumy = 'sumy' + i
            let sumy = document.getElementById(idSumy);
            if (sumy.classList.contains("hidden")) {
                sumy.classList.remove("hidden");
                sumy.classList.add("visible");
            } else {
                sumy.classList.remove("visible");
                sumy.classList.add("hidden");
            }
        };

        //  Normale Summaries-Text und Button dazu erstellen
        let divSummary = document.createElement("div");
        divSummary.classList.add('gpt-summary');
        divSummary.classList.add('hidden');
        let idSummary = 'summary' + i
        divSummary.id = idSummary;
        text = '<b>Normal Summary:</b> ' + data[i].text_api_normal_words_05_512 + '<br><b>' + data[i].flesch[4] + '</b>'
        text = text.replaceAll("ß","ss")
        divSummary.innerHTML = text

        let summaryButton = document.createElement('button');
        summaryButton.innerHTML = 'Normal gpt3';
        summaryButton.classList.add('buttonSummary');
        summaryButton.onclick =  function() {
            summaryButton.classList.toggle("active");
            let idSummary = 'summary' + i
            let summary = document.getElementById(idSummary);
            if (summary.classList.contains("hidden")) {
                summary.classList.remove("hidden");
                summary.classList.add("visible");
            } else {
                summary.classList.remove("visible");
                summary.classList.add("hidden");
            }
          };

        //  Simple Summaries-Text und Button dazu erstellen
        let divSimple = document.createElement("div");
        divSimple.classList.add('gpt-simple');
        divSimple.classList.add('hidden');
        let idSimple = 'simple' + i
        divSimple.id = idSimple;
        divSimple.innerHTML = '<b>Simple Summary</b>: ' + data[i].text_api_simple_words_07_512  + '<br><b>' + data[i].flesch[3] + '</b>'

        let simpleButton = document.createElement('button');
        simpleButton.innerHTML = 'Simple gpt3';
        simpleButton.classList.add('buttonSimple');
        simpleButton.onclick =  function() {
            simpleButton.classList.toggle("active");
            let idSimple = 'simple' + i
            let simple = document.getElementById(idSimple);
            if (simple.classList.contains("hidden")) {
                simple.classList.remove("hidden");
                simple.classList.add("visible");
            } else {
                simple.classList.remove("visible");
                simple.classList.add("hidden");
            }
        }; 

        //  Child Summaries-Text und Button dazu erstellen
        let divChild = document.createElement("div");
        divChild.classList.add('gpt-child');
        divChild.classList.add('hidden');
        let idChild = 'child' + i
        divChild.id = idChild;
        divChild.innerHTML = '<b>Child Summary:</b> ' + data[i].text_api_child_09_350  + '<br><b>' + data[i].flesch[5] + '</b>'

        let childButton = document.createElement('button');
        childButton.innerHTML = 'Child gpt3';
        childButton.classList.add('buttonChild');
        childButton.onclick =  function() {
            childButton.classList.toggle("active");
            let idChild = 'child' + i
            let child = document.getElementById(idChild);
            if (child.classList.contains("hidden")) {
                child.classList.remove("hidden");
                child.classList.add("visible");
            } else {
                child.classList.remove("visible");
                child.classList.add("hidden");
            }
        };


        //  KeyNote GPT-3-Text und Button dazu erstellen
        let divKey = document.createElement("div");
        divKey.classList.add('gpt-key');
        divKey.classList.add('hidden');
        let idKey = 'key' + i
        divKey.id = idKey;
        keynotes = data[i].text_api_keynotes_07_256 
        keynotes = keynotes.replace("1. ", "<br><b>1.</b> ").replace("2. ","<br><b>2.</b> ").replace("3. ","<br><b>3.</b> ").replaceAll("ß","ss")
        divKey.innerHTML = '<b>Keynotes gpt3:</b><br> ' + keynotes

        let keyButton = document.createElement('button');
        keyButton.innerHTML = 'Keynotes gpt3';
        keyButton.classList.add('buttonKey');
        keyButton.onclick =  function() {
            keyButton.classList.toggle("active");
            let idKey = 'key' + i
            let key = document.getElementById(idKey);
            if (key.classList.contains("hidden")) {
                key.classList.remove("hidden");
                key.classList.add("visible");
            } else {
                key.classList.remove("visible");
                key.classList.add("hidden");
            }
        };

        //  KeyNote davinci-Text und Button dazu erstellen
        let divKeyDavi = document.createElement("div");
        divKeyDavi.classList.add('davinci');
        divKeyDavi.classList.add('hidden');
        let idDavi = 'davi' + i
        divKeyDavi.id = idDavi;
        keynotesDavi = data[i].text_davinci_api_key_07_256 
        //keynotes = keynotes.replace(/(\d+\.)|(-)/g, '\n$1$2');
        keynotesDavi = keynotesDavi.replace("1. ", "<br><b>1.</b> ").replace("2. ","<br><b>2.</b> ").replace("3. ","<br><b>3.</b> ").replaceAll("ß","ss")
        divKeyDavi.innerHTML = '<b>Keynotes davinci:</b><br> ' + keynotesDavi

        let keyDaviButton = document.createElement('button');
        keyDaviButton.innerHTML = 'Keynotes davinci';
        keyDaviButton.classList.add('buttonKeyDavi');
        keyDaviButton.onclick =  function() {
            keyDaviButton.classList.toggle("active");
            let idDavi = 'davi' + i
            let keyDAvi = document.getElementById(idDavi);
            if (keyDAvi.classList.contains("hidden")) {
                keyDAvi.classList.remove("hidden");
                keyDAvi.classList.add("visible");
            } else {
                keyDAvi.classList.remove("visible");
                keyDAvi.classList.add("hidden");
            }
        };


        //  KeyNote GPT-4-Text und Button dazu erstellen
        let divKeyGpt4 = document.createElement("div");
        divKeyGpt4.classList.add('keyGpt4');
        divKeyGpt4.classList.add('hidden');
        let idkeyGpt4 = 'keyGpt4' + i
        divKeyGpt4.id = idkeyGpt4;
        keynotesGpt4 = data[i].text_gpt4_api_keynotes_07_256 
        //keynotes = keynotes.replace(/(\d+\.)|(-)/g, '\n$1$2');
        keynotesGpt4 = keynotesGpt4.replaceAll("- ", "<br><b>-</b> ").replaceAll("ß","ss")
        divKeyGpt4.innerHTML = '<b>Keynotes gpt4:</b><br> ' + keynotesGpt4

        let keyGPT4Button = document.createElement('button');
        keyGPT4Button.innerHTML = 'Keynotes gpt4';
        keyGPT4Button.classList.add('buttonKeyGpt4');
        keyGPT4Button.onclick =  function() {
            keyGPT4Button.classList.toggle("active");
            let idkeyGpt4 = 'keyGpt4' + i
            let keygpt4 = document.getElementById(idkeyGpt4);
            if (keygpt4.classList.contains("hidden")) {
                keygpt4.classList.remove("hidden");
                keygpt4.classList.add("visible");
            } else {
                keygpt4.classList.remove("visible");
                keygpt4.classList.add("hidden");
            }
        };

        
/* ------- Fragen / Antworten   Spacy*/
            //Randomisiert Fragen zusammenstellen, Zahl zwischen 1 und 3 ausgebe
            // 1 => Reihenfolge: 1 2 3; 2 => Reihenfolge: 2 3 1; 3 => Reihenfolge: 3 1 2;
            answerOrderSpacy = (Math.floor(Math.random() * 3)+1);

            // frage darstellen
            questionSpacy = data[i].frage_antwort[0]
            let formQASpacy = document.createElement("form");
            formQASpacy.classList.add('hidden');
            formQASpacy.id = 'qaSpacy' + i
            let questSpacy = document.createElement("p");
            questSpacy.innerHTML = '<b>' + questionSpacy + '</b>' + '<br>'

            //Frage in Form einfügen
            formQASpacy.appendChild(questSpacy)

            //Antwort 1 darstellen
            answer1spacy = data[i].frage_antwort[1]
            let ans1spacy = document.createElement("input");
            ans1spacy.type = "radio"
            let idA1spacy = "answSpacy" + "_" + i + "_1"
            ans1spacy.id = idA1spacy
            ans1spacy.name =  'qaSpacy' + i
            ans1spacy.value = "1"
            let ans1Labelspacy = document.createElement("label");
            // ans1Label.for = "answ" + "_" + i + "_1"
            ans1Labelspacy.innerHTML = answer1spacy + '<br>'

            //Antwort 2 darstellen
            answer2spacy = data[i].frage_antwort[2]
            let ans2spacy = document.createElement("input");
            ans2spacy.type = "radio"
            let idA2spacy = "answSpacy" + "_" + i + "_2"
            ans2spacy.id = idA2spacy
            ans2spacy.name =  'qaSpacy' + i
            ans2spacy.value = "2"
            let ans2Labelspacy = document.createElement("label");
            // ans2Label.for = "answ" + "_" + i + "_2"
            ans2Labelspacy.innerHTML = answer2spacy + '<br>'

            //Antwort 3 darstellen
            answer3spacy = data[i].frage_antwort[3]
            let ans3spacy = document.createElement("input");
            ans3spacy.type = "radio";
            let idA3spacy = "answSpacy" + "_" + i + "_3";
            ans3spacy.id = idA3spacy;
            ans3spacy.name =  'qaSpacy' + i
            ans3spacy.value = "3";
            let ans3Labelspacy = document.createElement("label");
            // ans3Label.for = "answ" + "_" + i + "_3"
            ans3Labelspacy.innerHTML = answer3spacy + '<br>';


            // Fragen nach AnswerOrder einfügen:
            if (answerOrderSpacy ==1){
                formQASpacy.appendChild(ans1spacy);
                formQASpacy.appendChild(ans1Labelspacy);
                formQASpacy.appendChild(ans2spacy);
                formQASpacy.appendChild(ans2Labelspacy);
                formQASpacy.appendChild(ans3spacy);
                formQASpacy.appendChild(ans3Labelspacy);
            }
            else if (answerOrderSpacy ==2){
                formQASpacy.appendChild(ans2spacy);
                formQASpacy.appendChild(ans2Labelspacy);
                formQASpacy.appendChild(ans3spacy);
                formQASpacy.appendChild(ans3Labelspacy);
                formQASpacy.appendChild(ans1spacy);
                formQASpacy.appendChild(ans1Labelspacy);
            }
            else if (answerOrderSpacy ==3){
                formQASpacy.appendChild(ans3spacy);
                formQASpacy.appendChild(ans3Labelspacy);
                formQASpacy.appendChild(ans1spacy);
                formQASpacy.appendChild(ans1Labelspacy);
                formQASpacy.appendChild(ans2spacy);
                formQASpacy.appendChild(ans2Labelspacy);
            }

            // Checkbutton
            let checkButtonSpacy = document.createElement("button");
            checkButtonSpacy.innerHTML = 'check Antwort spacy';
            checkButtonSpacy.type = "button";
            idFormSpacy = 'qaSpacy' + i
            let inputnameSpacy = `input[name="${idFormSpacy}"]`

            checkButtonSpacy.onclick = function() {
                let rightAnsSpacy = document.querySelector(`${inputnameSpacy}:checked`);
                if (rightAnsSpacy.value == '1'){
                    checkDivSpacy.innerHTML = "Richtig!"
                } else {
                    checkDivSpacy.innerHTML = "Falsch!"
                }
            }

            formQASpacy.appendChild(checkButtonSpacy);

            //Create Div für Checkantwort
            let checkDivSpacy = document.createElement("div");
            let idCheckQuestionSpacy = "checkSpacy" + i;
            checkDivSpacy.id = idCheckQuestionSpacy;

            formQASpacy.appendChild(checkDivSpacy);
        
    
            // CheckButton für Antworten
            let qaButtonSpacy = document.createElement('button');
            qaButtonSpacy.innerHTML = '? spacy';
            qaButtonSpacy.classList.add('buttonQASpacy');
            qaButtonSpacy.onclick =  function() {
                qaButtonSpacy.classList.toggle("active");
                let idQaSpacy = 'qaSpacy' + i
                let qaSpacy = document.getElementById(idQaSpacy);
                if (qaSpacy.classList.contains("hidden")) {
                    qaSpacy.classList.remove("hidden");
                    qaSpacy.classList.add("visible");
                } else {
                    qaSpacy.classList.remove("visible");
                    qaSpacy.classList.add("hidden");
                }
            };


/* ------------- Fragen / Antworten   GPT3 */

        //Randomisiert Fragen zusammenstellen, Zahl zwischen 1 und 3 ausgebe
        // 1 => Reihenfolge: 1 2 3; 2 => Reihenfolge: 2 3 1; 3 => Reihenfolge: 3 1 2;
        answerOrder = (Math.floor(Math.random() * 3)+1);

        // frage darstellen
        question = data[i].qa_list[0]
        let formQA = document.createElement("form");
        formQA.classList.add('hidden');
        formQA.id = 'qa' + i
        let quest = document.createElement("p");
        quest.innerHTML = '<b>' + question + '</b>' + '<br>'

        //Frage in Form einfügen
        formQA.appendChild(quest)

        //Antwort 1 darstellen
        answer1 = data[i].qa_list[1]
        let ans1 = document.createElement("input");
        ans1.type = "radio"
        let idA1 = "answ" + "_" + i + "_1"
        ans1.id = idA1
        ans1.name =  'qa' + i
        ans1.value = "1"
        let ans1Label = document.createElement("label");
        // ans1Label.for = "answ" + "_" + i + "_1"
        ans1Label.innerHTML = answer1 + '<br>'

        //Antwort 2 darstellen
        answer2 = data[i].qa_list[2]
        let ans2 = document.createElement("input");
        ans2.type = "radio"
        let idA2 = "answ" + "_" + i + "_2"
        ans2.id = idA2
        ans2.name =  'qa' + i
        ans2.value = "2"
        let ans2Label = document.createElement("label");
        // ans2Label.for = "answ" + "_" + i + "_2"
        ans2Label.innerHTML = answer2 + '<br>'

        //Antwort 3 darstellen
        answer3 = data[i].qa_list[3]
        let ans3 = document.createElement("input");
        ans3.type = "radio";
        let idA3 = "answ" + "_" + i + "_3";
        ans3.id = idA3;
        ans3.name =  'qa' + i
        ans3.value = "3";
        let ans3Label = document.createElement("label");
        // ans3Label.for = "answ" + "_" + i + "_3"
        ans3Label.innerHTML = answer3 + '<br>';


        // Fragen nach AnswerOrder einfügen:
        if (answerOrder ==1){
            formQA.appendChild(ans1);
            formQA.appendChild(ans1Label);
            formQA.appendChild(ans2);
            formQA.appendChild(ans2Label);
            formQA.appendChild(ans3);
            formQA.appendChild(ans3Label);
        }
        else if (answerOrder ==2){
            formQA.appendChild(ans2);
            formQA.appendChild(ans2Label);
            formQA.appendChild(ans3);
            formQA.appendChild(ans3Label);
            formQA.appendChild(ans1);
            formQA.appendChild(ans1Label);
        }
        else if (answerOrder ==3){
            formQA.appendChild(ans3);
            formQA.appendChild(ans3Label);
            formQA.appendChild(ans1);
            formQA.appendChild(ans1Label);
            formQA.appendChild(ans2);
            formQA.appendChild(ans2Label);
        }


        // Checkbutton
        let checkButton = document.createElement("button");
        checkButton.innerHTML = 'check Antwort gpt3';
        checkButton.type = "button";
        idForm = 'qa' + i
        let inputname = `input[name="${idForm}"]`

        checkButton.onclick = function() {
            let rightAns = document.querySelector(`${inputname}:checked`);
            if (rightAns.value == '3'){
                checkDiv.innerHTML = "Richtig!"
            } else {
                checkDiv.innerHTML = "Falsch!"
            }
        }

        formQA.appendChild(checkButton);

        //Create Div für Checkantwort

        let checkDiv = document.createElement("div");
        let idCheckQuestion = "check" + i;
        checkDiv.id = idCheckQuestion;

        formQA.appendChild(checkDiv);
       
        // CheckButton für Antworten
        let qaButton = document.createElement('button');
        qaButton.innerHTML = '? gpt3';
        qaButton.classList.add('buttonQA');
        qaButton.onclick =  function() {
            qaButton.classList.toggle("active");
            let idQa = 'qa' + i
            let qa = document.getElementById(idQa);
            if (qa.classList.contains("hidden")) {
                qa.classList.remove("hidden");
                qa.classList.add("visible");
            } else {
                qa.classList.remove("visible");
                qa.classList.add("hidden");
            }
        };


/* ----------- Fragen / Antworten  gpt4 */

        //Randomisiert Fragen zusammenstellen, Zahl zwischen 1 und 3 ausgebe
        // 1 => Reihenfolge: 1 2 3; 2 => Reihenfolge: 2 3 1; 3 => Reihenfolge: 3 1 2;
        answerOrderB = (Math.floor(Math.random() * 3)+1);

        // Frage darstellen
        questionB = data[i].qa_list_gpt4[0]
        let formQAB = document.createElement("form");
        formQAB.classList.add('hidden');
        formQAB.id = 'Bqa' + i
        let questB = document.createElement("p");
        questB.innerHTML = '<b>' + questionB + '</b>' + '<br>'

        //Frage in Form einfügen
        formQAB.appendChild(questB)

        //Antwort 1 darstellen
        answerB1 = data[i].qa_list_gpt4[1]
        let ansB1 = document.createElement("input");
        ansB1.type = "radio"
        let idBA1 = "answB" + "_" + i + "_1"
        ansB1.id = idBA1
        ansB1.name =  'Bqa' + i
        ansB1.value = "1"
        let ansB1Label = document.createElement("label");
        // ans1Label.for = "answ" + "_" + i + "_1"
        ansB1Label.innerHTML = answerB1 + '<br>'

        //Antwort 2 darstellen
        answerB2 = data[i].qa_list_gpt4[2]
        let ansB2 = document.createElement("input");
        ansB2.type = "radio"
        let idBA2 = "answB" + "_" + i + "_2"
        ansB2.id = idBA2
        ansB2.name =  'Bqa' + i
        ansB2.value = "2"
        let ansB2Label = document.createElement("label");
        // ans2Label.for = "answ" + "_" + i + "_2"
        ansB2Label.innerHTML = answerB2 + '<br>'

        //Antwort 3 darstellen
        answerB3 = data[i].qa_list_gpt4[3]
        let ansB3 = document.createElement("input");
        ansB3.type = "radio";
        let idBA3 = "answB" + "_" + i + "_3";
        ansB3.id = idBA3;
        ansB3.name =  'Bqa' + i
        ansB3.value = "3";
        let ansB3Label = document.createElement("label");
        // ans3Label.for = "answ" + "_" + i + "_3"
        ansB3Label.innerHTML = answerB3 + '<br>';

        // Fragen nach AnswerOrder einfügen:
        if (answerOrderB ==1){
            formQAB.appendChild(ansB1);
            formQAB.appendChild(ansB1Label);
            formQAB.appendChild(ansB2);
            formQAB.appendChild(ansB2Label);
            formQAB.appendChild(ansB3);
            formQAB.appendChild(ansB3Label);
        }
        else if (answerOrderB ==2){
            formQAB.appendChild(ansB2);
            formQAB.appendChild(ansB2Label);
            formQAB.appendChild(ansB3);
            formQAB.appendChild(ansB3Label);
            formQAB.appendChild(ansB1);
            formQAB.appendChild(ansB1Label);
        }
        else if (answerOrderB ==3){
            formQAB.appendChild(ansB3);
            formQAB.appendChild(ansB3Label);
            formQAB.appendChild(ansB1);
            formQAB.appendChild(ansB1Label);
            formQAB.appendChild(ansB2);
            formQAB.appendChild(ansB2Label);
        }



        // Checkbutton
        let checkButtonB = document.createElement("button");
        checkButtonB.innerHTML = 'check Antwort gpt4';
        checkButtonB.type = "button";
        idBForm = 'Bqa' + i
        let inputnameB = `input[name="${idBForm}"]`

        checkButtonB.onclick = function() {
            let rightAnsB = document.querySelector(`${inputnameB}:checked`);
            if (rightAnsB.value == '3'){
                checkDivB.innerHTML = "Richtig!"
            } else {
                checkDivB.innerHTML = "Falsch!"
            }
        }

        formQAB.appendChild(checkButtonB);

        //Create Div für Checkantwort

        let checkDivB = document.createElement("div");
        let idCheckQuestionB = "checkB" + i;
        checkDivB.id = idCheckQuestionB;

        formQAB.appendChild(checkDivB);
       
 
        // CheckButton für Antworten
        let qaButtonB = document.createElement('button');
        qaButtonB.innerHTML = '? gpt4';
        qaButtonB.classList.add('buttonQAB');
        qaButtonB.onclick =  function() {
            qaButtonB.classList.toggle("active");
            let idBQa = 'Bqa' + i
            let qaB = document.getElementById(idBQa);
            if (qaB.classList.contains("hidden")) {
                qaB.classList.remove("hidden");
                qaB.classList.add("visible");
            } else {
                qaB.classList.remove("visible");
                qaB.classList.add("hidden");
            }
        };



/* ----------------         Wordle        */

        // wird als iFrame in Seite eingebettet
        let iframe = document.createElement('iframe');
        iframe.classList.add('hidden');
        iframe.classList.add('iframe');
        let idFrame = 'frame' + i
        iframe.id = idFrame;
        iframe.src = "wordle.html";
        iframe.width = "340px";
        // Höhe variiert, je nach Anzahl der möglichen Wörter
        hei = 330
        if (data[i].five_letter_word_list.length > 20) {
            hei = 330;
        }
        if (data[i].five_letter_word_list.length > 30) {
            hei = 370;
        }
        if (data[i].five_letter_word_list.length > 40) {
            hei = 400;
        }
        if (data[i].five_letter_word_list.length > 50) {
            hei = 440;
        }
        if (data[i].five_letter_word_list.length > 60) {
            hei = 480;
        }
        if (data[i].five_letter_word_list.length > 70) {
            hei = 520;
        }
        if (data[i].five_letter_word_list.length > 80) {
            hei = 560;
        }

        iframe.height = hei;

        //
        let wordleButton = document.createElement('button');
        wordleButton.innerHTML = 'wordle';
        wordleButton.classList.add('buttonWordle');
        let firstclick = true;
        wordleButton.onclick = function() {
            wordleButton.classList.toggle("active");
            let idFrame = 'frame' + i
            let frame = document.getElementById(idFrame);
            if (frame.classList.contains("hidden")) {
                frame.classList.remove("hidden");
                frame.classList.add("visible");
            } else {
                frame.classList.remove("visible");
                frame.classList.add("hidden");
            }
            // Infos welche Wörter es gibt, soll beim ersten klick an iFrame übergeben werden
            if (firstclick == true){
                let message = {data: data[i].five_letter_word_list}
                frame.contentWindow.postMessage(message, '*');
                firstclick = false
            }

        };


        

        

        // Trennlinien erstellen

        let divLine = document.createElement("div");
        divLine.classList.add('line');
        divLine.innerHTML = '<br><br><hr><br><br>'

        let divLineExt =  document.createElement("h4");
        divLineExt.classList.add('lineEx');
        divLineExt.innerHTML = '&nbsp;Original and extractive summaries&nbsp;'

        let divLineAbs =  document.createElement("h4");
        divLineAbs.classList.add('lineAbs');
        divLineAbs.innerHTML = '&nbsp;Abstractive summaries&nbsp;'

        let divLineKey =  document.createElement("h4");
        divLineKey.classList.add('lineKey');
        divLineKey.innerHTML = '&nbsp;Keynotes&nbsp;'


        let divLineQA=  document.createElement("h4");
        divLineQA.classList.add('lineKey');
        divLineQA.innerHTML = '&nbsp; Question/answers/quiz&nbsp;'


        //Trennlinien und Button-Trennlinien in Maincontaier einfügen
        mainContainer.appendChild(divTitleheader);
        mainContainer.appendChild(divTitle);
        mainContainer.appendChild(divLead);
        // Trennlinie Ex
        mainContainer.appendChild(divLineExt);

        mainContainer.appendChild(urlButton); 
        mainContainer.appendChild(originalButton);
        mainContainer.appendChild(ownButton);
        mainContainer.appendChild(sumyButton);  
        // Trennlinie Abs
        mainContainer.appendChild(divLineAbs);

        mainContainer.appendChild(summaryButton);  
        mainContainer.appendChild(simpleButton); 
        mainContainer.appendChild(childButton);   
        // Trenn linie Key
        mainContainer.appendChild(divLineKey);

        mainContainer.appendChild(keyButton); 
        mainContainer.appendChild(keyDaviButton);
        mainContainer.appendChild(keyGPT4Button);
        //Trennlinie QA
        mainContainer.appendChild(divLineQA);
        // Nur zeigen, wenn auch Frage/Antwort mit Spacy existiert.
        if (data[i].frage_antwort.length != 0){
            mainContainer.appendChild(qaButtonSpacy);
        }
        mainContainer.appendChild(qaButton);
        mainContainer.appendChild(qaButtonB);
        mainContainer.appendChild(wordleButton); 
        // Ende Buttons
        // Divs mit Content, hidden or active
        mainContainer.appendChild(divOriginal);   
        mainContainer.appendChild(divOwn);
        mainContainer.appendChild(divSumy);    
        mainContainer.appendChild(divSummary);       
        mainContainer.appendChild(divSimple);
        mainContainer.appendChild(divChild); 
        mainContainer.appendChild(divKey);
        mainContainer.appendChild(divKeyDavi);
        mainContainer.appendChild(divKeyGpt4);
        // Nur zeigen, wenn auch Frage/Antwort mit Spacy existiert.
        if (data[i].frage_antwort.length != 0){
            mainContainer.appendChild(formQASpacy);
        }
        mainContainer.appendChild(formQA);
        mainContainer.appendChild(formQAB);
        mainContainer.appendChild(iframe); 
        mainContainer.appendChild(divLine);
        

    }

}




