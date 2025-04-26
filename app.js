let boxes =document.querySelectorAll(".b");
let reset =document.querySelector("#reset");
let newgame = document.querySelector(".new-game-btn");
let msg = document.querySelector(".msg");
let msgp = document.querySelector("#msgp");

let turn1 = true;

const pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((b) => {
    b.addEventListener("click",() => {
        b.innerHTML="hello";
        if(turn1 === true){
            b.innerHTML ="0";
            turn1 = false;
        }
        else{
            b.innerHTML="X";
            turn1 =true;
        }
        b.disabled = true;

        checkwinner ();
    })
})

const resetgame  = ( ) =>{
    for( let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    } 
    msg.classList.add("hide");
}

const disableboxes = ()=>{
    for( let box of boxes){
        box.disabled = true;
    }
}

const showwinner =(winner)=>
{
    msgp.innerHTML =`Congratulations , Winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
}

const checkwinner = ()=> {
    for(let p of pattern){

        let var1 = boxes[p[0]].innerHTML;
        let var2 = boxes[p[1]].innerHTML;
        let var3 = boxes[p[2]].innerHTML;

        if( var1 != "" && var2 != "" && var3 != ""){

            if( var1 === var2 && var2===var3 && var3===var1){
                console.log('winner', var1);
                showwinner(var1);
                
            }
        }
    }
}

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);