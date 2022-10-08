const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
    const inputRef = event.currentTarget;

   inputRef.classList.add("invalid");

   if (inputRef.value.length == inputRef.getAttribute("data-length")) {
      inputRef.classList.remove("invalid")
      inputRef.classList.add("valid");
      };
});


// inputRef.value.length == inputRef.attributes[2].value

