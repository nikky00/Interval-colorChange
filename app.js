let btn = document.body.querySelector('.change')

let bgrcChanger =()=>{
    let colors =['red','yellow','blue','green','aqua']
    let random = Math.floor(Math.random()* colors.length)
    document.body.style.backgroundColor = colors[random]
}
setInterval(bgrcChanger, 3000)
// btn.addEventListener('click',bgrcChanger)