let input = document.querySelector('.input')
let icon = document.querySelector('.search')
let body = document.querySelector('.body')
let mic = document .querySelector('.mic')

input.addEventListener('click', ()=> {
    icon.style.visibility = 'hidden'
    
    
})
let screen= window.screen.width

body.addEventListener('click', ()=> {
    icon.style.visibility = 'visible'
    icon.style.marginLeft = '420px'
    if(screen == (320) || (420)) {
        mic.style.visibility = 'hidden'
        icon.style.marginLeft = '275px'
        console.log(screen);
        }
})

// let screen= window.screen.width

// if(screen == (414)) {
// icon.style.visibility = 'hidden'
// icon.style.marginLeft = '0px'
// console.log(screen);
// }
console.log(screen)

