let myLeads = [];
const inputEl = document.querySelector("#input-el");
const savEl = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
const tabs = [
  {url:"www.google.com"}
]
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads)
}

function render(leads) {
  let listItems = "";
   for (i = 0; i < leads.length; i++) {
      listItems += `
       <li>
     <a href='${leads[i]}' target ='__blank'>${leads[i]}
     </a>
      </li>`;
  }
   ulEl.innerHTML = listItems;
  }

tabBtn.addEventListener("click",function(){
chrome.tabs.query({active: true, currentWindow: true},function(tabs){
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads",JSON.stringify(myLeads));
  render(myLeads)
})

})

deleteBtn.addEventListener("click",function(){
  localStorage.clear();
  myLeads = [];
  render(myLeads);

})
 savEl.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
     render(myLeads)
 });


































