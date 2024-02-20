const hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C','D','E','F']

let btn = document.querySelector('#btn')
let color = document.querySelector('#color')

btn.addEventListener('click',function(){
    let textcolor = '#'
    for(let i = 0; i<6;i++){
        textcolor += hex[randomNumber()]
       
    }
color.textContent = textcolor 
document.body.style.background = textcolor
})

function randomNumber(){
    return Math.floor(Math.random() * hex.length)
}