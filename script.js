myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const saveInput = document.getElementById("save-input")
const leadsEl = document.getElementById("leads-el")
const deleteEl = document.getElementById("delete-el")
const saveTabBtn = document.getElementById("save-tab-btn")

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

saveTabBtn.addEventListener("click", function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0];
    let activeTabId = activeTab.id; // or do whatever you need
    });
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})


saveInput.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    renderLeads()

})

function renderLeads(){
    leadsEl.innerHTML = ""
    for(let i =0; i<myLeads.length;i++){
        const li = document.createElement("li")
        li.innerHTML += `<a href="#">${myLeads[i]} </a>`
        leadsEl.appendChild(li)
        console.log(myLeads[i])
    }
    
}

deleteEl.addEventListener("click", function(){
    localStorage.clear()
    myLeads.length = 0
    leadsEl.innerHTML = ""
})

