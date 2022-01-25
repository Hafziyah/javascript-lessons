document.getElementById("count-el").innerText = 0

let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)


 let saveEl = document.getElementById("save-el")
 console.log (saveEl)

 
function increment() {
    count = count + 1 //same as count += 1
    console.log(count)
    countEl.textContent=count // textContent in place of innerText
}

function save() {
   let savedN = count + " - "
   saveEl.textContent += savedN //textContent in place of innerText
   countEl.textContent = 0
   count = 0
}