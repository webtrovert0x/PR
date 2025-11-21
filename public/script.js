// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmXjvqkmY_2s07Vav9GfnScx0pUHINKv4",
  authDomain: "quickie-6a2dc.firebaseapp.com",
  databaseURL: "https://quickie-6a2dc-default-rtdb.firebaseio.com",
  projectId: "quickie-6a2dc",
  storageBucket: "quickie-6a2dc.firebasestorage.app",
  messagingSenderId: "631615726240",
  appId: "1:631615726240:web:ee50738ca01b389ef65fc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();

const signGoog = ()=> {
  
 signInWithPopup(auth, provider)
   .then((result)=>{
    const user = result.user
    console.log(user);
     if (user){
      setTimeout(() => {
        window.location.href = 'dashboard.html'
      }, 1000)
    }else {
      window.location.href = 'index.html'
    }
   })
   .catch((error)=>{
    const errorCode = error.code
    console.log(errorCode);
    
   })
    
  }
  const signPass = () => {
    signInWithEmailAndPassword(auth, email, password)

  .then((result) => {
    // Signed in 
    const user = result.user;
    // ...
    if (user){
      setTimeout(() => {
        window.location.href = 'dashboard.html'
      }, 1000)
    }else {
      window.location.href = 'index.html'
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    
  });
  

  }
  const signGit =() => {
    
  signInWithPopup(auth, provider2)
  .then((result) => {
    const user = result.user
    if (user){
      setTimeout(() => {
        window.location.href = 'dashboard.html'
      }, 1000)
    }else {
      window.location.href = 'index.html'
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }
  
  window.signGoog = signGoog
  window.signGit = signGit
  window.signPass = signPass