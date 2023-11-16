// Clean version of final code; worked version is saved as chromeExtension.js
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBTN = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//Now save the array to local storage, using json.stringify, when input button is clicked.
inputBTN.addEventListener("click", function() {
    myLeads.push(inputEl.value) // push user input to array
    inputEl.value = ""; // empties the input field
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log( localStorage.getItem("myLeads") ) //checks output
})

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `  
<li>
  <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
  </a>
</li>    
`
}

ulEl.innerHTML = listItems
}

let boxEL = document.getElementById("box")
boxEL.addEventListener("click", function () {
  console.log("I want to open the box for a discount code!")
})

