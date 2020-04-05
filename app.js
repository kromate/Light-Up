const firebaseConfig = {
    apiKey: "AIzaSyB7MbhzQ2yohv7MOjLy0rvx2n7DHvv8f5c",
    authDomain: "light-up-eb627.firebaseapp.com",
    databaseURL: "https://light-up-eb627.firebaseio.com",
    projectId: "light-up-eb627",
    storageBucket: "light-up-eb627.appspot.com",
    messagingSenderId: "478749966375",
    appId: "1:478749966375:web:947b648e159b438dfd0e02",
    measurementId: "G-T3C0GSGT7B"
};
firebase.initializeApp(firebaseConfig);
document.getElementById('registrationform').addEventListener('submit', formSubmit)
function formSubmit(e) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let position = document.getElementById('position').value;
    let username = document.getElementById('username').value;

    sendMessage(email, password, position, username);

    document.getElementById('registrationform').reset();

};



let formMessage = firebase.database().ref('register');

function sendMessage(email, password, position, username){
    let newFormMessage = formMessage.push();
    newFormMessage.set({email: email, password:password, position:position, username:username});
}



firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});
