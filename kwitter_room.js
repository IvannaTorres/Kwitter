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
document.getElementById("user_name").innerHTML = "¡Bienvenido "+user_name+"!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "añadir el nombre de la sala"
          });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
     
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Inicia el código
      console.log("Nombre de la sala "+room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
     //Finaliza el código
     });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}