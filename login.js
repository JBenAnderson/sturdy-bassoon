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
})();
