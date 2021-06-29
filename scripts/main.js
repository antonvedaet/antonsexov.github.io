var myImage = document.querySelector('img');
var clickCounter = 0
var screamer = new Audio('audio/Scream12.wav')
var body = document.querySelector('body');
myImage.onclick = function() {
    clickCounter+=1
    if(clickCounter==10){
      myImage.setAttribute ('src','images/image3.png');
      document.body.style.background = 'black';
      screamer.play();
    }
}
