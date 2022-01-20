document.getElementById("count-el").innerText = 0

let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment() {
    count = count + 1
    console.log(count)
    countEl.innerText=count
}

function save() {
    console.log(count)
}