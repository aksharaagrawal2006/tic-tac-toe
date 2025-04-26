let a=document.getElementsByClassName("box")

console.log(a)

function random() {

let val1=Math.ceil(Math.random()*255)
let val2=Math.ceil(Math.random()*255)

let val3=Math.ceil(Math.random()*255)

return `rgb(${val1},${val2},${val3})`


}

Array.from(a).forEach(e => {

    e.style.color=random()
    e.style.backgroundColor=random()

    
});