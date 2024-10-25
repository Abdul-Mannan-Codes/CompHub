function loadContent(){
    let image;
    for(let i=1;i<7;i++){
        image = document.querySelector(".item"+i);
        if(i==4)
            image.style.backgroundImage = ` linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1)), url("images/comp${i}.png")`;
        
        else
            image.style.backgroundImage = ` linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1)), url("images/comp${i}.jpg")`;
    }
    if(localStorage.getItem('username')==null){
        display('#get-started');
    }
    else{
        hide('#get-started');
    }
}
function display(element){
    document.querySelector(element).style.display = "block";
}
function hide(element){
    document.querySelector(element).style.display = "none";
}