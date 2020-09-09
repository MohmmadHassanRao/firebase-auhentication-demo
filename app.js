// SIGN UP
const signUp = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  console.log(email.value);
  console.log(password.value);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
};

// SIGN IN

const signIn = () => {
  let email = document.getElementById("login-email");
  let password = document.getElementById("login-password");
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((result) => {
      console.log(result);
      console.log("login successful");
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};
