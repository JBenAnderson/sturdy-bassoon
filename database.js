(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDENA8FqMVh94h-7r2_OlHZPts2b6yQdM8",
    authDomain: "courso-7aca1.firebaseapp.com",
    projectId: "courso-7aca1",
    storageBucket: "courso-7aca1.appspot.com",
    messagingSenderId: "9456444517",
    appId: "1:9456444517:web:35c90b1f9ba30660ec528c",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // handle on firebase database
  const db = firebase.database();

  //get elements
  const message = document.getElementById("message");
  const write = document.getElementById("write");
  const read = document.getElementById("read");
  const status = document.getElementById("status");

  //write
  write.addEventListener("click", (e) => {
    const messages = db.ref("messages");
  });
})();
