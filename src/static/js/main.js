INDEX_ANSWER = 0;
playerScore = 0;
getQuestion(INDEX_ANSWER);

function getQuestion(index) {
    objectQuestion = questions[index];
    optiones = [...objectQuestion.optiones];
    optiones.push(objectQuestion.answer);

    for(let i = 0; i <= 4; i++) {
        optiones.sort(()=> Math.random() -0.5);
    }

    document.getElementById('categoryQ').innerHTML = objectQuestion.category;
    document.getElementById('imgJs').src = objectQuestion.img;
    document.getElementById('questionQ').innerHTML = objectQuestion.question;
    document.getElementById('btn0').innerHTML = optiones[0];
    document.getElementById('btn1').innerHTML = optiones[1];
    document.getElementById('btn2').innerHTML = optiones[2];
    document.getElementById('btn3').innerHTML = optiones[3];
}


async function checkOption(index) {
    let optionUser = optiones[index] == objectQuestion.answer; //hace una comprobación y le da ese valor a la variable
    if(optionUser) {
        document.getElementById(`btn${index}`).style.background = "green";
        document.getElementById(`btn${index}`).style.color = "white";
        playerScore += 1;
    }
    else {
        document.getElementById(`btn${index}`).style.background = "red";
        document.getElementById(`btn${index}`).style.color = "white";

        for(let i = 0; i <= optiones.length; i++) {
            if(optiones[i] == objectQuestion.answer) {
                answer = i;
            }
        }

        document.getElementById(`btn${answer}`).style.background = "green";
        document.getElementById(`btn${answer}`).style.color = "white";

        // document.getElementById(`btn${index}`).style.background = "green";
        // document.getElementById(`btn${index}`).style.color = "white";
    }
    INDEX_ANSWER++;

    

    if(INDEX_ANSWER >= (questions.length)){
        console.log(`Tu puntuaje fue de: ${playerScore}/${questions.length}`);
        INDEX_ANSWER = 0;
        playerScore = 0;
    }
}

function resetTargets() {
    for(let i = 0; i <= (optiones.length-1); i++) {
        document.getElementById(`btn${i}`).style.background = "white";
        document.getElementById(`btn${i}`).style.color = "black";
    }
    setTimeout(getQuestion, 105, INDEX_ANSWER);
    // getQuestion(INDEX_ANSWER);
}



