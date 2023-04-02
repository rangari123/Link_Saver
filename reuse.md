----------------------------------------------------------------------------------
 # Log out the items in the myLeads array using a for loop 
- 2.Grab the unordered list and store it in a const variable called ulEl
- 3. Render the leads in the unordered list using ulEl.textContent ans innerHtml
const container = document.getElementById("container")
 
 
 
 # crerate Element 
  
 container.innerHTML+= "<p>"+"Thank you for buying!"+"</p"
    create element    -let li = document.createElement("li);
    set text content - li.textContent = 'hello'
    append to ul    - ulEl.append(li)


-----------------------------<>-----------------------------------------
# Wrap the lead in an anchor tag (<a>) inside the <li>
# Can you make the link open in a new tab?
<!-- "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" -->
template strings
listItems += `<li>
                  <a target='_blank' href='${myLeads[i]}'>
                      ${myLeads[i]}
                  </a>
             </li>
            `

# Local Storgae

// 1. Save a key-value pair in localStorage
localStorage.setItem("myName", "Per Harald Borgen")

// 2. Refresh the page. Get the value and log it to the console
let name = localStorage.getItem("myName")
console.log(name)

localStorage.clear()
// 3. Clear localStorage

# conversion of string and array

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

# string into an array

let myLeads = `["www.awesomelead.com"]`--strings
// myLeads = JSON.parse(myLeads) --to array
// myLeads.push("www.myexample.com")
// console.log(myLeads) 

# array into a string again

let myLeads = ["www.awesomelead.com"]--arrays
// myLeads = JSON.stringify(myLeads)--string
// console.log( typeof myLeads)

#  Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage

let leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

----------------------------------------<t&f>-----------------------------------
# truthy
# falsy
- there are only  <6> falsy values
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

# localstorage empty or not
// ["lead1", "lead2"] or null
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

# 2. Listen for double clicks on the delete button (google it!)
#  3. When clicked, clear localStorage, myLeads, and the DOM

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear() --clear localStorage
    myLeads = []  --myLeads,
    renderLeads() --DOM clear
})

# save tab 
 chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0];
    let activeTabId = activeTab.id; // or do whatever you need

  });


 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    D:\2JAVASCRIPT PROJECT\ChromeExtension\Screenshot 2023-04-01 201500.png

     })