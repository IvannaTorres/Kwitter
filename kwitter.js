var firebaseConfig = {
  apiKey: "AIzaSyC98j0CRNr2JhLrmlm3fSNJBzpVInlNFRY",
  authDomain: "kwitter-a11b4.firebaseapp.com",
  databaseURL: "https://kwitter-a11b4-default-rtdb.firebaseio.com",
  projectId: "kwitter-a11b4",
  storageBucket: "kwitter-a11b4.appspot.com",
  messagingSenderId: "799486056176",
  appId: "1:799486056176:web:822c1d73c120ea7b135435"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
