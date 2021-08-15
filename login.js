(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDENA8FqMVh94h-7r2_OlHZPts2b6yQdM8",
    authDomain: "courso-7aca1.firebaseapp.com",
    databaseURL: "https://courso-7aca1-default-rtdb.firebaseio.com",
    projectId: "courso-7aca1",
    storageBucket: "courso-7aca1.appspot.com",
    messagingSenderId: "9456444517",
    appId: "1:9456444517:web:35c90b1f9ba30660ec528c",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //get elements
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const logout = document.getElementById("logout");

  //login
  login.addEventListener("click", (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  //signup
  signup.addEventListener("click", (e) => {
    // TODO: check for real email
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
  });

  //logout
  logout.addEventListener("click", (e) => {
    firebase.auth().signOut();
  });

  //login state
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      logout.style.display = "inline";
      login.style.display = "none";
      signup.style.display = "none";
    } else {
      console.log("User is not logged in");
      logout.style.display = "none";
      login.style.display = "inline";
      signup.style.display = "inline";
    }
  });
})();
