const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", (event) => {
    const { classList, value } = event.currentTarget;

 classList.add("invalid");

   if (value.length == event.currentTarget.getAttribute("data-length")) {
      classList.remove("invalid")
      classList.add("valid");
      };
});


// inputRef.value.length == inputRef.attributes[2].value

// validationInputRef.addEventListener("blur", (event) => {
//     const inputRef = event.currentTarget;

//    inputRef.classList.add("invalid");

//    if (inputRef.value.length == inputRef.getAttribute("data-length")) {
//       inputRef.classList.remove("invalid")
//       inputRef.classList.add("valid");
//       };
// });