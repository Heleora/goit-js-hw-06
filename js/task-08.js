const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", getEmailAndPassword);

function getEmailAndPassword (event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    
    const emailAndPassword = {
      email: email.value,
      password: password.value,
    };
    
      if (email.value === "" || password.value === "") {
        return alert("Please fill all the fields in!");
      };

      console.log(emailAndPassword);
      event.currentTarget.reset();
}


