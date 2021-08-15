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

  // Create a root reference
  var storage = firebase.storage();
  var storageRef = storage.ref();

  // get UI elements
  const file = document.getElementById("file");
  const upload = document.getElementById("upload");
  const download = document.getElementById("download");
  const status = document.getElementById("status");
  const image = document.getElementById("image");

  //upload file
  upload.addEventListener("click", (e) => {
    // Create file reference
    var ref = storageRef.child("globe");
    let photo = document.getElementById("file").files[0];

    // upload
    ref.put(photo).then(function (snapshot) {
      console.log("Uploaded a blob or file!");
      status.innerHTML = "Uploaded a blob or file!";
    });
  });

  // download file
  download.addEventListener("click", (e) => {
    //file reference
    var ref = storage.ref("globe");

    ref
      .getDownloadURL()
      .then(function (url) {
        //iinsert url into an <img> tag to "download"
        image.src = url;
        status.innerHTML = "Downloaded blob or file!";
      })
      .catch(function (error) {
        console.log(error);
      });
  });
})();
