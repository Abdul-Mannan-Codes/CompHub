var flag=true, n=0,timer1,timer2,timer3;
var acc = document.querySelector('#account-count');
var res = document.querySelector('#resource-count');
var proj = document.querySelector('#project-count');
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
        display('#create-account');
    }
    else{
        hide('#create-account');
    }
}
function display(element){
    document.querySelector(element).style.display = "";
}
function hide(element){
    document.querySelector(element).style.display = "none";
}
function startCounter(){
    if(flag){
        timer1=setInterval(incAccount,10);
        timer2=setInterval(incResource,10);
        timer3=setInterval(incProject,10);
        flag=false;
    }
}
function incAccount(){
    acc.textContent = n;
    if(n==100){
        clearInterval(timer1);
        acc.textContent += '+';
        n=0;
    }
    n++;
}
function incResource(){
    res.textContent = n;
    if(n==250){
        clearInterval(timer2);
        res.textContent += '+';
        n=0;
    }
    n++;
}
function incProject(){
    proj.textContent = n;
    if(n==25){
        clearInterval(timer3);
        proj.textContent += '+';
    }
    n++;
}
