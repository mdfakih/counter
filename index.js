let count = 0
let countEl = document.getElementById("count-el")
let paraEl = document.getElementById("para-el")

function increment(){
    count += 1
    countEl.textContent = count
 }

 function save(){
    paraEl.textContent += count + "-"
    countEl.textContent = 0
    count = 0
 }
 function reset(){
    paraEl.textContent = "Previous enteries:"
    countEl.textContent = 0
    count = 0
 }