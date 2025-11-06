let gameSeq =[];
let userSeq=[];
let rankLevel =[];
let btns =["red","yellow","green","blue"];


let starting = false;
let level =0;

let h2 =document.querySelector("h2");
let para =document.querySelector("p");

document.addEventListener("keypress",function(){
    if(starting ==false){
        console.log("game started");
        starting=true;
        levelUp();
    }
});

/*started = true is exectued then by pressing any key after that clicking any we the eventlisteners for keypress and  will not get executed*/

function btnFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    },250);
};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    rankLevel.push(level);
    h2.innerText =`Level ${level}`;
    para.innerText =` Your highest score till now is ${Math.max(...rankLevel)}`
    let randIdx =Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn =document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
};


function checkAns(idx){
    if(gameSeq[idx] ===userSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML =`Game over! your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){ 
            let bdy =document.querySelector("body");
            bdy.style.backgroundColor ="white";
        },250);
        reset();
        highest();
    }
};


function btnpress() {
    let btn =this;
    userFlash(btn);
    userSeq.push(this.classList[1]);
    console.log(userSeq);
    checkAns(userSeq.length-1);
};

let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn){
    btn.addEventListener("click",btnpress);
};


function reset(){
    starting = false;
    gameSeq = [];
    userSeq =[];
    level =0;
};






