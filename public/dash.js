// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
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
const userdp= []

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    //const uid = user.uid;
    console.log(user);
    show.innerHTML += `
      <img src="${user.photoURL}" alt=""  width="50px" height="50px" style=" border-radius: 50%;">
        
        `
    // ...
  } else {
    setTimeout(() => {
        window.location.href = 'index.html'
    }, 1000);
  }});


const signOutt = () => {
    signOut(auth).then(() => {
  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1000);
    }).catch((error) => {
  // An error happened.
}   );
}
const submit = () => {
    if (inputt.value.trim() == ''){
      alert('post cannot be empty')
    }
    else {
      setTimeout(() => {
        timeline.innerHTML += ` <div style="height: 30vh; width: inherit; justify-self: center; border-bottom: 1px gray solid;"> ${inputt.value} </div> `
      }, 1000);
      
    }
 }
 
 

  window.submit = submit
window.signOutt = signOutt