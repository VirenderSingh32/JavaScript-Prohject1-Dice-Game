//Function to return the source of the pic:
function returnImageSrc(imageNo){
    var src="images/dice" + imageNo + ".png";
    return src;
}


// Selecting first number randomly and changing the pic accordingly:
var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", returnImageSrc(randomNumber1));

// Selecting first number randomly and changing the pic accordingly:
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", returnImageSrc(randomNumber2));

//Changing the heading:
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="⛳ Player 1";
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 ⛳";
} else{
    document.querySelector("h1").innerHTML="Draw";
}

