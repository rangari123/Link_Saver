// -
let Savebtn = document.getElementById("save-el");
let inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");


//  functions

// fetch data from local storage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage)

// check locst is empty or not
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}


// const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

tabBtn.addEventListener("click", function () {
  // Grab the URL of the current tab! -> stack overflow..
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

  
});

// 1. Wrap the code below in a renderLeads() function
function render(leads) {
  let listItems = ""; // store links
  for (let i = 0; i < leads.length; i++) {
    // loop through array
    // store links inside list items
    listItems += `
        <li>
          <a target="_blank" href="${leads[i]}">
             ${leads[i]}
          </a>
        </li>
        `;
    // console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}

// remove localstorage
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

//  functions
Savebtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""; // 3.Clear out the input field

  // item stores in  LOCAL STORAGE .5
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads); // 2. Call the renderLeads() function
});
