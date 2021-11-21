bt=document.querySelectorAll("button");
function handleClick(){
    console.log(this.name);
    var audio= new Audio("sounds/"+this.name+".mp3");
    audio.play();
    this.classList.toggle("pressed");
}
for(i=0;i<bt.length;i++){
    bt[i].addEventListener("click",handleClick);
}
document.addEventListener("keydown",function(event){
    // console.log(event);
    makeSound(event.key);
})
function makeSound(keysss){
    switch(keysss){
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelectorAll("button")[0].classList.toggle("pressed");
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelectorAll("button")[1].classList.toggle("pressed");
            break;
        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            document.querySelectorAll("button")[2].classList.toggle("pressed");
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            document.querySelectorAll("button")[3].classList.toggle("pressed");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelectorAll("button")[4].classList.toggle("pressed");
            break;
        case "k":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelectorAll("button")[5].classList.toggle("pressed");
            break;
        case "l":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelectorAll("button")[6].classList.toggle("pressed");
            break;
        default:
    }

}