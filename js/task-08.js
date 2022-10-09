const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    
    const userEmailAndPassword = {
      email: email.value,
      password: password.value,
    };
    
      if (email.value === "" || password.value === "") {
        return alert("Please fill all the fields in!");
      };

      console.log(userEmailAndPassword);
      event.currentTarget.reset();
})


