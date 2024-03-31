// We don't support mobile devices yet
if(window.innerWidth < 800){
    let instructions = document.getElementById("instructions");
    instructions.innerHTML = `<p>Sorry, this game is not supported on mobile devices.</p>`;
    instructions.innerHTML += `<p>Please play on a desktop device.</p>`;
    instructions.style.display = "block";
    document.getElementById("playarea").style.display = "none";
    document.getElementById("scorearea").style.display = "none";
    document.getElementById("endgamearea").style.display = "none";
    document.getElementById("contentarea").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
}

let level = 1;

const startGame = () => {
    
    // hide everything except the play area and score area
    document.getElementById("contentarea").style.display = "none";
	document.getElementById("leaderboard").style.display = "none";
    document.getElementById("instructions").style.display = "none";
	document.getElementById("playarea").style.display = "block";
	document.getElementById("scorearea").style.display = "block";
	document.getElementById("endgamearea").style.display = "none";

    if(localStorage.getItem(window.gameTag) !== null){
        level = localStorage.getItem(window.gameTag);
    }else{
        localStorage.setItem(window.gameTag, level);
    }
    
    document.getElementById("scorearea").innerText = "Level: " + level;

    setupLevel(level);

}

function setupLevel(level){
    // All the crazy stuff happens here
}