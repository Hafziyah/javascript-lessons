document.getElementById("count-el").innerText = 0

let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)


 let saveEl = document.getElementById("save-el")
 console.log (saveEl)

 
function increment() {
    count = count + 1 //same as count += 1
    console.log(count)
    countEl.innerText=count
}

function save() {
   let savedN = count + " -"
   saveEl.innerText += savedN
   console.log(count)
}