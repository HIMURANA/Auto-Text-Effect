const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text ='Web Designer'

let idx =1
let speed = 300  / speedEl.value

speedEl.addEventListener('input', (e)=> speed = 300 / e.target.value)

writeText()

function writeText(){
   
    textEl.innerHTML =` ${text.slice( 0, idx)}_`
    idx++

    if(idx > text.length){
        idx=1
    }

    setTimeout(writeText,speed)

}

