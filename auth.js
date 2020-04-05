const signupForm = document.querySelector('#registrationform');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const username = signupForm['username'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    const position = signupForm['position'].value;

    //sign up the user

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred =>{
        if(cred.user != null){
            window.location = 'dashboard.html';
        }
        else alert('something went wrong')
       
    })
})


//login form

const loginForm = documet.querySelector('#loginform');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
        console.log(cred.user);
        if(cred.user != null){
            window.location = 'dashboard.html';
        }
        else alert('something went wrong')
    })
})