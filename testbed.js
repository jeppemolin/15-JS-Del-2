//javascript
function changeText(){
	var rubrik = document.getElementById('rubrik');
	rubrik.innerHTML = 'Omegalul';
}

function changecolor(){
	var contain = document.getElementById('contain').style.backgroundColor = "lightblue";
	
}
function changecoloragain(){
	var contain = document.getElementById('contain').style.backgroundColor = "lightgreen"
}
function changecoloragein(){
	var contain = document.getElementById('contain').style.backgroundColor = "purple"
}
var andraflagga = 0 
function changeHeading(){
	var rubrik = document.getElementById('rubrik');
	if (andraflagga == 0) {
		rubrik.innerHTML = 'yeet';
		andraflagga = 1;

	} 
	else{
		rubrik.innerHTML = 'javascript baby!';
		andraflagga = 0;
	}
}
