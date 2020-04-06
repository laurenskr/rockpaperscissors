let userScore = 0;
let cpuScore = 0;
        //computer kiest random r p s
        function randomThrow() {
            let num = Math.floor(Math.random() * 3);
            let cpuThrow;
            (num == 0) ? cpuThrow = "rock" :
            (num == 1) ? cpuThrow = "paper" :
            (num == 2) ? cpuThrow = "scissors" : cpuThrow= "probleem in de wiskunde!";
            return cpuThrow;
        };
        //speler voert keuze in
        function getUserThrow() {
            const picks = document.querySelectorAll('img');
            picks.forEach((pick) => {
                pick.addEventListener('click', (e) => {
                    let userThrow = pick.id;
                    console.log(userThrow)
                    playRound(userThrow,randomThrow());
                })
            });
        }
        //ronde starten en score toevoegen
        function playRound(userThrow,cpuThrow) {
            let userScoreCounter = document.getElementById("usrScore");
            let cpuScoreCounter = document.getElementById("cpuScore");
            const result = document.getElementById("round-result");
            result.innerText = `You play ${userThrow}...
            
            Computer plays ${cpuThrow}`
            if (userThrow === "rock") {
                switch (cpuThrow) {
                    case "rock":
                        result.innerHTML += "\n\n It's a <h3><b>tie!</b></h3>";
                        setTimeout(() => {result.innerText=""}, 2000)
                        break
                    case "paper":
                        result.innerText += "\n\n You lose!";
                        cpuScore += 1;
                        cpuScoreCounter.innerText = cpuScore;
                        displayWinner();
                        setTimeout(() => {result.innerText=""}, 2000)
                        break
                    case "scissors":
                        result.innerText += "\n\n You Win!";
                        userScore += 1;
                        userScoreCounter.innerText = userScore;
                        displayWinner();
                        setTimeout(() => {result.innerText=""}, 2000)
                        break
                };
            }
            else if (userThrow === "paper") {
                switch (cpuThrow) {
                    case "rock" :
                        result.innerText += "\n\n You Win!";
                        userScore += 1;
                        userScoreCounter.innerText = userScore;
                        displayWinner();
                        setTimeout(() => {result.innerText=""}, 2000)
                        break
                    case "paper" :                        
                        result.innerText += "\n\n It's a tie!";
                        setTimeout(() => {result.innerText=""}, 2000);
                        break
                    case "scissors" :
                        result.innerText += "\n\n You lose!";
                        cpuScore += 1;
                        cpuScoreCounter.innerText = cpuScore;
                        displayWinner();
                        setTimeout(() => {result.innerText=""}, 2000)
                }
            }
            else if (userThrow === "scissors") {
                switch (cpuThrow) {
                    case "rock":
                        result.innerText += "\n\n You lose!";
                        cpuScore += 1;
                        cpuScoreCounter.innerText = cpuScore;
                        displayWinner();
                        setTimeout(() => {result.innerText=""}, 2000)
                        break
                    case "paper":
                        result.innerText += "\n\n You Win!";
                        userScore += 1;
                        userScoreCounter.innerText = userScore;
                        displayWinner();
                        setTimeout(() => {result.innerText=""}, 2000);
                        break
                    case "scissors" :
                        result.innerText += "\n\n It's a tie!";
                        setTimeout(() => {result.innerText=""}, 2000);
                }
            }
        }
        //game starten voor vijf rondes
        function game() {
            const textBox = document.getElementById("instructions");
            textBox.textContent = "Pick one of the above to play a round!"
            getUserThrow();
            /* playRound(getUserThrow(),randomThrow());
            playRound(getUserThrow(),randomThrow());
            playRound(getUserThrow(),randomThrow());
            playRound(getUserThrow(),randomThrow());
            playRound(getUserThrow(),randomThrow());
            if (score >= 3) {
                alert("You just won the game!!!!!! (P.S. You lost the game at the same time...)");
            }
            else {
                alert("You just lost the game. Metaphorically. Also, you lost the game literally.")
            }*/

        };
        function hideButton() {
            console.log("bye!")
            const startRound = document.getElementById("start-round");
            startRound.style.display = 'none';
        }

        function displayWinner() {
            if (userScore > 2) {
                document.getElementById('overlay-text').innerHTML = `<h1>You Win!</h1>
                <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/cOtvwSHKaFK3Ul1VVu" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
                document.getElementById("overlay").style.display = "block";
                document.getElementById("overlay").addEventListener("click", function(){location.reload()});  
            }
            else if (cpuScore > 2) {
                document.getElementById('overlay-text').innerHTML = `<h1>You lose!</h1><div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/ARj2OMThsPoAw" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
                document.getElementById("overlay").style.display = "block";
                document.getElementById("overlay").addEventListener("click", function(){location.reload()}); 
            }
        }