
let random = Math.random() * 6 + 1;
let random2 = Math.random() * 6 + 1;
random = Math.floor(random);
random2 = Math.floor(random2);

let randomImage1 = "./images/dice" + random + ".png";
let randomImage2 = "./images/dice" + random2 + ".png";



document.querySelector('.img1').setAttribute('src', randomImage1);
document.querySelector('.img2').setAttribute('src', randomImage2);

if (random > random2){
    document.querySelector('h1').textContent = "🚩 Player 1 Wins!";
}
else if(random2 > random){
    document.querySelector('h1').textContent = "🚩 Player 2 Wins!";
}
else{
    document.querySelector('h1').textContent = "Draw!";
}
