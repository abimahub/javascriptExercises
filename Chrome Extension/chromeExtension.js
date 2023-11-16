// CREATING A CHROME EXTENSION
// This file is chromeExtension.js and is the worked examples with notes.
// full clean copy of code saved as index.js.
// *********************************************
// For deployment ensure:
// - manifest is present and correct (correct files etc)
// - icon.png is present (whichever filetype, must be the same in the manifest)
// In Chrome:
// - go to chrome://extensions/ in Chrome, then ensure developer mode is toggled on
// - click on Load Unpacked, then navigate to your working folder location
// - it will say 'no items match' or similar in the main pane, just check your folder is
// noted below and press Select.
// - the extension should then be available to use locally (usually shows up top left)
// **********************************************
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// function saveInput() {
//     console.log("save button clicked from onclick attribute")
// }
// // the html for the button contains an onclick attribute
// // <button id="input-btn" onclick="saveInput()">save input</button>
//cleaner way is to use addEventListener in js, and not use onclick in html
// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = []
const inputEl = document.getElementById("input-el") //const rather than let
const inputBTN = document.getElementById("input-btn") // const cannot be reassigned, eg. inputEl = "hello" would not work now.
const ulEl = document.getElementById("ul-el") // using the DOM to control the list output element

//using the data we saved
// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

// inputBTN.addEventListener("click", function() {
//     myLeads.push(inputEl.value) // push user input to array
//     renderLeads()
//     inputEl.value = ""; // empties the input field
    
// })

// for (let i = 0; i < myLeads.length; i++) {
//         ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//         console.log(myLeads[i])
//      }

// Using the addEventListener to manipulate the #box div
// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked
// let boxEL = document.getElementById("box")
// boxEL.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })
// // second method: 
// for (let i = 0; i < myLeads.length; i++) {
//     const li = document.createElement("li") //specify the element tag
//     li.textContent = myLeads[i]  //tag followed by textcontent
//     ulEl.append(li)          // append the closing tag element
//  }
 // 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
// next, wrap the code below in a renderLeads() function, to dynamically display new entries
// call the renderLeads() function; maybe when input is clicked?
function renderLeads() {
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
//     // Wrap the lead in an anchor tag (<a>) inside the <li>
//         // Can you make the link open in a new tab?
// *** NB: if using a local html file (not web-served) then you should copy the full URL from the browser; 
// typing eg www.scrimbs.com won't work because you need the http:// or https:// ***
//      listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
// }  // this is fine, but unwieldy. Template strings allow the string to be broken onto different lines.
//template strings use the single backslant quote mark (not apostrophe) and dynamic variables ${var}
listItems += `  
<li>
  <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
  </a>
</li>    
`
}

ulEl.innerHTML = listItems
//console.log(listItems)
}

// next, to start to deploy the extension, you need to set up an icon file and a manifest.json file.
// go to chrome://extensions/ , ensure developer toggle is on, then select 'load unpacked' option, 
// navigate to the folder your extension is saved in, and click OK. your extension can now be used locally.
// At this point, the extension will refresh each time you click away from it, so you need to persist the memory.
// Persisting data in local storage: (NB both key and value need to be strings.)
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage
// methods:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// localStorage.setItem("myLeads", "https://www.wikipedia.org/") //1
// localStorage.getItem("myLeads")                               //2
// localStorage.clear()                                  //3. try 1 again and get 'null'
// use json.stringify and json.parse to save the array as a string, to use in local storage
// //Example:
//  myLeads = `["www.awesomelead.com"]`
// // 1. Turn the myLeads string into an array
// // 2. Push a new value to the array
// // 3. Turn the array into a string again
// // 4. Console.log the string using typeof to verify that it's a string
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// console.log(myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)

//Now save the array to local storage, using json.stringify, when input button is clicked.
inputBTN.addEventListener("click", function() {
    myLeads.push(inputEl.value) // push user input to array
    inputEl.value = ""; // empties the input field
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log( localStorage.getItem("myLeads") )
})