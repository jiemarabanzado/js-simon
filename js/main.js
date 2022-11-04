//variabili globali
let says=[];
let Match=0;
//functions
function Genera(){
    document.getElementById('Gen-Num').style.display='none';
    let NumRow=document.getElementById('Original');
    for (let index = 0; index <5; index++) {
        let here=true;
        while(here){
            let a= parseInt(Math.random()*100+1);
            if(says.includes(a)){
                here=true;
            }else{
                let element=document.createElement('div');
                says[index]=a;
                here=false;
                element.innerHTML=says[index];
                NumRow.append(element);
                element.classList.add('original-num');
            }
        }
        
    }
    console.log(says)
    StartCountDown();
}
function StartCountDown(){
    setTimeout(CountDown, 5000);
}
function CountDown(){
    document.getElementById('Original').style.display='none';
    document.getElementById('Guess').style.display='block';
}
function Confronta(){
    let IsIn=true;
    let guess=document.querySelectorAll('.what');
    for (let index = 0; index < guess.length; index++) {
        let a=parseInt(guess[index].value);
        if(says.includes(a)){
            IsIn=true;
            Match+=1;
        }else{
            IsIn=false;
        }   
    }
    console.log(guess);
    console.log(Match);
    if(Match==5){
        alert(`hai vinto ${Match} su 5`);
    }else{
        alert(`hai perso ${Match} su 5`);
    }
}

//Funzioni Generiche e comportamenti di base
document.getElementById('Gen-Num').addEventListener('click',Genera);
document.getElementById('try').addEventListener('click',Confronta)
