//TUS ENLACES DE FIRE BASE

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASkezSFIJGYZsqHATQ6CIRCZZM7JZzJJ8",
  authDomain: "redessociales-19cc1.firebaseapp.com",
  projectId: "redessociales-19cc1",
  databaseURL: "https://redessociales-19cc1-default-rtdb.firebaseio.com/",
  storageBucket: "redessociales-19cc1.appspot.com",
  messagingSenderId: "107087681310",
  appId: "1:107087681310:web:1393e71b37106ac4ad1b0f"
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

