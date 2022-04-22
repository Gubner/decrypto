var miniGame = {}
var snd = new  Audio("data:audio/wav;base64,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");
var message, pos, timer1, timer2, base, attempt, time, attempts, success;
var qbgreen = '#20bb44', qbred = '#c10114'; //values from qb-notify css
var pool = [];
var ended = false;

$(document).ready(function(){
  window.addEventListener('message', function(event) {
		switch(event.data.action) {
			case "open":
				miniGame.Open(event.data);
				break;
			case "close":
				miniGame.Close();
				break;
		}
	})
});

$(document).on('keydown', function() {
	switch(event.keyCode) {
		case 27: // ESC
			if(ended == false){
				ended = true;
				miniGame.Close();
			}
			break;
	}
});

miniGame.Open = function(data) {
	ended = false;
	container.style.visibility = "visible";
	if(data.base == 16) {
		pool = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];
		base = 16;
	} else {
		pool = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
		base = 10;
	}
	if(data.timeLimit != null) {
		time = data.timeLimit;	
	} else {
		time = 60;
	}
	if(data.attemptLimit != null) {
		attempts = data.attemptLimit;	
	} else {
		attempts = 10;
	}
	account = (Math.floor(Math.random()*1e6) + 1e11).toString(16).toUpperCase();
	//message information: ~ creates a pause and a line feed. Spaces will not trigger audio.
	message = " ESTABLISHING NETWORK CONNECTION~.~.~.~~ *CONNECTED*~~~ PROBING FIREWALL~.~.~.~~ *FIREWALL PINHOLE FOUND ON PORT: 30120*~~~ \
		TARGETING ACCOUNT: " + account + "~.~.~.~~ *CIPHER IDENTIFIED: 4-DIGIT PIN BASE " + base + "*~~~~ \
		>> STARTING DECRYPTOMATIC GUI <<~.~.~.~ ";
	success = false;
	newCode();
	startTyping();
}

function newCode() {
	d1 = pool[Math.floor(Math.random()*pool.length)];
	d2 = pool[Math.floor(Math.random()*pool.length)];
	d3 = pool[Math.floor(Math.random()*pool.length)];
	d4 = pool[Math.floor(Math.random()*pool.length)];
	attempt = 1;
}

function startTyping() {
	snd.volume = 0.0;
	snd.play();
	document.getElementById('message').innerHTML = "";
	pos = 0;
	timer1 = setInterval(typeMessage, 800);
}

function typeMessage() {
	if (message.charAt(pos) == "~") {
		document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + "<br>";
	} else {
		document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + message.charAt(pos);
	}
	if (message.charAt(pos) != " " && message.charAt(pos) != "~") {
		snd.volume = 0.6;
		snd.play();
	}
	if (message.charAt(pos) == "~") {
		stopTyping();
		timer1 = setInterval(typeMessage, 800);
	}
	if (message.charAt(pos) != "~") {
		stopTyping();
		timer1 = setInterval(typeMessage, 30);
	}
	pos++;
	if (pos > message.length) {
		stopTyping();
		startGame();
	}
}

function stopTyping() {
	clearInterval(timer1);
}

function startGame() {
	var gameGrid = "<table><tr id='a0'><td id='info' colspan='5'><p>Attempt: <a id='attempt'>0</a>/" + attempts + "&#160;&#160;&#160;Timer: <a id='timer'></a> s</p></td></tr><tr id='a'>";
	for(let i = 1; i < 6; i++) {
		if(i < 5) {
			gameGrid = gameGrid + "<td id='ag" + i + "'><input type='text' id='g" + i + "' value='' style='width:7vh;height:" + (46/attempts) + "vh;' onkeyup='validate(this.id)'></td>";
		} else {
			gameGrid = gameGrid + "<td id='ar'><input type='button' id='g" + i + "' value='&rArr;&cap;' style='width:7.3vh;height:" + (46/attempts + 0.1) + "vh;' onclick='Guess()'></td></tr>";
		}
	}
	for(let j = attempts; j > 0; j--) {
		gameGrid = gameGrid + "<tr id='a" + j + "'>";
		for(let i = 1; i < 6; i++) {
			if(i < 5) {
				gameGrid = gameGrid + "<td id='a" + j + "c" + i + "'><input type='text' id='a" + j + "g" + i + "' value='' disabled='disabled' style='width:7vh;height:" + (46/attempts) + "vh;' ></td>";
			} else {
				gameGrid = gameGrid + "<td id='a" + j + "c" + i + "'><input type='text' id='a" + j + "r' value='' disabled='disabled' style='width:7vh;height:" + (46/attempts) + "vh;' ></td></tr>";
			}
		}	
	}
	gameGrid = gameGrid + "</table>";
	document.getElementById('message').innerHTML = gameGrid;
	timer2 = setInterval(gameTimer, 1000);
	document.getElementById('timer').innerHTML = time;
	document.getElementById('g1').focus();
}

function gameTimer() {
	var ctime = parseInt(document.getElementById('timer').innerHTML);
	ctime = ctime - 1;
	document.getElementById('timer').innerHTML = ctime;
	if(ctime<=0) {
		stopTimer();
		document.getElementById('a' + attempt).style.borderColor = qbred;
		document.getElementById('timer').style.color = qbred;
		document.getElementById('a0').style.borderColor = qbred;
	}
}

function stopTimer() {
	clearInterval(timer2);
	stopHack();
}

function Guess() {
	var g1 = document.getElementById('g1').value.toUpperCase();
	var g2 = document.getElementById('g2').value.toUpperCase();
	var g3 = document.getElementById('g3').value.toUpperCase();
	var g4 = document.getElementById('g4').value.toUpperCase();
	if(!pool.includes(g1)) {	
		document.getElementById('g1').value = '';
		document.getElementById('g1').focus();
	}
	else if(!pool.includes(g2)) {
		document.getElementById('g2').value = '';
		document.getElementById('g2').focus();
	}
	else if(!pool.includes(g3)) {
		document.getElementById('g3').value = '';
		document.getElementById('g3').focus();
	}
	else if(!pool.includes(g4)) {
		document.getElementById('g4').value = '';
		document.getElementById('g4').focus();
	}
	else {
		document.getElementById('a' + attempt).style.display = "table-row";	
		document.getElementById('a' + attempt + 'g1').value = document.getElementById('g1').value;
		document.getElementById('a' + attempt + 'g2').value = document.getElementById('g2').value;
		document.getElementById('a' + attempt + 'g3').value = document.getElementById('g3').value;
		document.getElementById('a' + attempt + 'g4').value = document.getElementById('g4').value;
		var clue = getClue();
		document.getElementById('attempt').innerHTML = attempt;
		document.getElementById('a' + attempt + 'r').value = clue;
		var state = document.getElementById('g1');
		if(state !== null) {
			document.getElementById('g1').value = '';
			document.getElementById('g2').value = '';
			document.getElementById('g3').value = '';
			document.getElementById('g4').value = '';
			document.getElementById('g1').focus();
		}
		attempt++;
		if(attempt > attempts && clue != '!!!!') {
			//document.getElementById('a').style.visibility = 'hidden';
			document.getElementById('attempt').style.color = qbred;
			stopTimer();
			document.getElementById('a10').style.borderColor = qbred;
			document.getElementById('a0').style.borderColor = qbred;
		}
	}
}

function getClue() {
	var pMatch = sMatch = d1Guessed = d2Guessed = d3Guessed = d4Guessed = g1Used = g2Used = g3Used = g4Used = 0;
	var clue = '';
	var g1 = document.getElementById('g1').value.toUpperCase();
	var g2 = document.getElementById('g2').value.toUpperCase();
	var g3 = document.getElementById('g3').value.toUpperCase();
	var g4 = document.getElementById('g4').value.toUpperCase();
	if(g1==d1) {
		pMatch++;
		d1Guessed = 1;
		g1Used = 1;
	}
	if(g2==d2) {
		pMatch++;
		d2Guessed = 1;
		g2Used = 1;
	}
	if(g3==d3) {
		pMatch++;
		d3Guessed = 1;
		g3Used = 1;
	}
	if(g4==d4) {
		pMatch++;
		d4Guessed = 1;
		g4Used = 1;
	}
	if(g1Used==0 && d2Guessed==0) {
		if(g1==d2) {
			sMatch++;
			d2Guessed = 1;
			g1Used = 1;
		}
	}
	if(g1Used==0 && d3Guessed==0) {
		if(g1==d3) {
			sMatch++;
			d3Guessed = 1;
			g1Used = 1;
		}
	}
	if(g1Used==0 && d4Guessed==0) {
		if(g1==d4) {
			sMatch++;
			d4Guessed = 1;
			g1Used = 1;
		}
	}
	if(g2Used==0 && d1Guessed==0) {
		if(g2==d1) {
			sMatch++;
			d1Guessed = 1;
			g2Used = 1;
		}
	}
	if(g2Used==0 && d3Guessed==0) {
		if(g2==d3) {
			sMatch++;
			d3Guessed = 1;
			g2Used = 1;
		}
	}
	if(g2Used==0 && d4Guessed==0) {
		if(g2==d4) {
			sMatch++;
			d4Guessed = 1;
			g2Used = 1;
		}
	}
	if(g3Used==0 && d1Guessed==0) {
		if(g3==d1) {
			sMatch++;
			d1Guessed = 1;
			g3Used = 1;
		}
	}
	if(g3Used==0 && d2Guessed==0) {
		if(g3==d2) {
			sMatch++;
			d2Guessed = 1;
			g3Used = 1;
		}
	}
	if(g3Used==0 && d4Guessed==0) {
		if(g3==d4) {
			sMatch++;
			d4Guessed = 1;
			g3Used = 1;
		}
	}
	if(g4Used==0 && d1Guessed==0) {
		if(g4==d1) {
			sMatch++;
			d1Guessed = 1;
			g4Used = 1;
		}
	}
	if(g4Used==0 && d2Guessed==0) {
		if(g4==d2) {
			sMatch++;
			d2Guessed = 1;
			g4Used = 1;
		}
	}
	if(g4Used==0 && d3Guessed==0) {
		if(g4==d3) {
			sMatch++;
			d3Guessed = 1;
			g4Used = 1;
		}
	}
	for(let i=1; i <= pMatch; i++) {
		clue = clue + '!';
	}
	for(let j=1; j <= sMatch; j++) {
		clue = clue + '*';
	}
	if(pMatch==4) {
		success = true;
		stopTimer();
		document.getElementById('a' + attempt).style.borderColor = qbgreen;
		document.getElementById('a0').style.borderColor = qbgreen;
	}
	return clue;
}

function validate(sender) {
	var guess = document.getElementById(sender).value.toUpperCase();
	document.getElementById(sender).value = guess;
	var length = guess.length;
	var nextid = sender.charAt(1);
	nextid = parseInt(nextid);
	nextid++;
	if(!pool.includes(guess) || length > 1) {
		document.getElementById(sender).value = '';
		document.getElementById(sender).focus();
	}
	else {
		document.getElementById('g'+nextid).focus();
	}
}

function stopHack() {
	if(success == true) {
		document.getElementById('a').innerHTML = "<td id='end' colspan='5' style='height:" + (46/attempts) + "vh;'>Hack Successful, PIN: " + d1 + d2 + d3 + d4 + " Accepted!</td>";
		document.getElementById('end').style.backgroundColor = qbgreen;
	} else {
		document.getElementById('a').innerHTML = "<td id='end' colspan='5' style='height:" + (46/attempts) + "vh;'>Hack Failed!</td>";
		document.getElementById('end').style.backgroundColor = qbred;
	}
}

miniGame.Close = function() {
	container.style.visibility = "hidden";
	stopTyping();
	$.post(`https://${GetParentResourceName()}/close`, JSON.stringify(success));
}
