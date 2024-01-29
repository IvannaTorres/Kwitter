//AGREGA TUS ENLACES DE FIREBASE AQUÍ
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


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Inicia el código
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name +"<h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+
    " onclick='updateLike(this.id)'>Likes :"+ like +"</button>";
    row = name_with_tag + message_with_tag + like_button;
    document.getElementById("output").innerHTML += row;
//Termina el código
 } });  }); }
getData();

function updateLike(message_id)
{
   console.log("presionó el botón de Me Gusta: " + message_id) ;
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
   like : updated_likes  
});

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
