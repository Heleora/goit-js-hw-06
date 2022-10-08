const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        alert("Please fill all the fields in!");
      };

      const userEmailAndPassword = {
        email: email.value,
        password: password.value,
      };

      console.log(userEmailAndPassword);
      event.currentTarget.reset();
})


