const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", checkNumberOfSymbols);

function checkNumberOfSymbols (event) {
    const { classList, value } = event.currentTarget;

 classList.add("invalid");

   if (value.trim().length == event.currentTarget.getAttribute("data-length")) {
      classList.remove("invalid")
      classList.add("valid");
      };
};



