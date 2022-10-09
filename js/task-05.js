const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");


nameInputRef.addEventListener("input", getUserName);

function getUserName (event) {
    
nameOutputRef.textContent = "Anonymous"; 

if (event.currentTarget.value) {
    nameOutputRef.textContent = event.currentTarget.value.trim();
};
};