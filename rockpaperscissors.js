let score = 0;
        //TODO:
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
            //let userThrow = prompt("Rock, paper, scissors? ").toLowerCase();
            // return userThrow;
        }
        //ronde starten en score toevoegen
        function playRound(userThrow,cpuThrow) {
            const result = document.getElementById("round-result");
            result.innerText = `You play ${userThrow}...
            
            Computer plays ${cpuThrow}`
            if (userThrow === "rock") {
                switch (cpuThrow) {
                    case "rock":
                        result.innerText += "\n\n It's a tie!";
                        setTimeout(() => {result.innerText=""}, 1500)
                        //console.log("tie");
                        break
                    case "paper":
                        result.innerText += "\n\n You lose!";
                        setTimeout(() => {result.innerText=""}, 1500)
                        break
                    case "scissors":
                        result.innerText += "\n\n You Win!";
                        score += 1;
                        setTimeout(() => {result.innerText=""}, 1500)
                        break
                };
            }
            else if (userThrow === "paper") {
                switch (cpuThrow) {
                    case "rock" :
                        result.innerText += "\n\n You Win!";
                        score += 1;
                        break
                    case "paper" :                        
                        result.innerText += "\n\n It's a tie!";
                        break
                    case "scissors" :
                        console.log("loser!");
                }
            }
            else if (userThrow === "scissors") {
                switch (cpuThrow) {
                    case "rock":
                        console.log("loser!");
                        break
                    case "paper":
                        result.innerText += "\n\n You Win!";
                        score += 1;
                        break
                    case "scissors" :
                        result.innerText += "\n\n It's a tie!";
                }
            }
            else {
                alert("Incorrect pick. Shutting down now...")
            }
        }
        //game starten voor vijf rondes
        function game() {
            const textBox = document.getElementById("instructions");
            textBox.textContent = "Pick one of the above to get started!"
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
        