
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyC03H3ifp8CCJcif8FD662WJJLBCxIebTE",
      authDomain: "kwitter-46e4a.firebaseapp.com",
      projectId: "kwitter-46e4a",
      storageBucket: "kwitter-46e4a.appspot.com",
      messagingSenderId: "312882515919",
      appId: "1:312882515919:web:821b68b455d34e13dfccba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

     function addRoom()
     {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose = "adding room name"
      })

localStorage.getItem("room_name",room_name);
window.location("kwitter_page.html");

     } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("room name -" + Room_names);
 row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{

console.log(name)
{
localStorage.setItem("room name", name);
window.location = "kwitter_page.html";
}
}