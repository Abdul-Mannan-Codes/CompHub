function loadContent(){
    let image;
    for(let i=1;i<7;i++){
        image = document.querySelector(".item"+i);
        if(i==4)
            image.style.backgroundImage = ` linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1)), url("images/comp${i}.png")`;
        
        else
            image.style.backgroundImage = ` linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1)), url("images/comp${i}.jpg")`;
    }
}