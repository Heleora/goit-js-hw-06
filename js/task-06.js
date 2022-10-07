const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
   const inputRef = event.currentTarget;

   inputRef.classList.add("invalid");

   if (inputRef.value.length == inputRef.attributes[2].value) {
      // console.log(inputRef.value.length);
      inputRef.classList.remove("invalid")
      inputRef.classList.add("valid");
       };
  
});

// ???? Как получить ссылку на атрибут с именем, в котором есть "-" ??!!!!