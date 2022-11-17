let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let front = document.querySelector('#front')
let behind = document.querySelector('#behind')
let text = document.querySelector('#text')
let btn = document.querySelector('#btn')
let header = document.querySelector('#header')

window.addEventListener('scroll',function(){

    let value = window.scrollY;
    console.log(value)
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.5 + 'px'
    behind.style.top = value * 0.5 + 'px'
    front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 0.8 + 'px'
    btn.style.marginTop = value * 1.2 + 'px'
    header.style.top = value * 0.5 + 'px' 







})