// function admin(){
//   window.location = 'dashboard.html';
// }
// function stake(){
//   window.location = 'stakedash.html';
// }
// function sub(){
//   window.location = 'Subscriber-dash.html';
// }
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7MbhzQ2yohv7MOjLy0rvx2n7DHvv8f5c",
    authDomain: "light-up-eb627.firebaseapp.com",
    databaseURL: "https://light-up-eb627.firebaseio.com",
    projectId: "light-up-eb627",
    storageBucket: "light-up-eb627.appspot.com",
    messagingSenderId: "478749966375",
    appId: "1:478749966375:web:947b648e159b438dfd0e02",
    measurementId: "G-T3C0GSGT7B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth();
  firebase.firestore();



const auth = firebase.auth();
const db = firebase.firestore();






// const signupForm = document.querySelector('#registrationform');
// signupForm.addEventListener('click', (e)=>{
//     e.preventDefault();

//     const username = signupForm['username'].value;
//     const email = signupForm['email'].value;
//     const password = signupForm['password'].value;
//     const position = signupForm['position'].value;

//     //sign up the user

//     firebase.auth().createUserWithEmailAndPassword(email, password).then(cred =>{
//         if(cred.user != null){
//             window.location = 'dashboard.html';
//         }
//         else alert('something went wrong')
       
//     })
// })


// //login form

// const loginForm = document.querySelector('#loginform');
// loginForm.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     const email = loginForm['email'].value;
//     const password = loginForm['password'].value;

//     firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
//         console.log(cred.user);
//         if(cred.user != null){
//             window.location = 'dashboard.html'; 
//         }
//         else alert('something went wrong')
//     })
// });

// // const logout = document.querySelector('#logout');
// // logout.addEventListener('click', (e)=>{
// //     e.preventDefault();
// //     auth.signOut().then(()=>{
// //         console.log('User signed out');
// //         window.location = 'login.html';
// //     })
// // })

// const userEmail = document.querySelector('#accName')

// const setupUI = (user)=>{
//     const html = `${user.email}`;
//     userEmail.innerHTML = html;
// }

// // listen for Auth status changes
// auth.onAuthStateChanged(user=>{
//     console.log(user);
//     if(user == null){
//         window.location = 'index.html'
//     }
//     else{
//         window.location = 'dashboard.html'}
// })
