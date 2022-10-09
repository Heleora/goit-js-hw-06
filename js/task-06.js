const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", (event) => {
    const { classList, value } = event.currentTarget;

 classList.add("invalid");

   if (value.trim().length == event.currentTarget.getAttribute("data-length")) {
      classList.remove("invalid")
      classList.add("valid");
      };
});


// inputRef.value.length == inputRef.attributes[2].value

