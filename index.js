let count = 0
let countEl = document.getElementById("count-el")
let paraEl = document.getElementById("para-el")
let sumEl = document.getElementById("sum-el")
let total = []
function increment(){
    count += 1
    countEl.textContent = count
 }

function zero(){
   countEl.textContent = 0
   count = 0
}

 function save(){
    paraEl.textContent += count + "-"
    total.push(count)
    sumEl.textContent = "Total:" + total.reduce((a, b) => a + b, 0)
    zero()
 }
 function reset(){
    paraEl.textContent = "Previous enteries:"
    zero()
    total = []
    sumEl.textContent = "Total:"
 }