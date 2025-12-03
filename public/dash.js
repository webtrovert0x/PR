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
let userdp = 'https://via.placeholder.com/48';
const posts = []
let currentUser= null;


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    currentUser = user;
    userdp = user.photoURL || 'https://via.placeholder.com/48'; // assign here
    
    show.innerHTML = `
      <img src="${userdp}" alt="" width="50px" height="50px" style="border-radius: 50%;">
    `;
  } else {
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  }
});


const signOutt = () => {
    signOut(auth).then(() => {
  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1000);
    }).catch((error) => {
  // An error happened.
}   );
}
window.signOutt = signOutt
const submitt = () => {
    if (inputt.value.trim() === ''){
      alert('post cannot be empty')
    }
    else {
      setTimeout(() => {
        posts.push(inputt.value)
        timeline()
        inputt.value=''
      }, 10);
      
      
      
    }
    
 }
 function timeline(user) {
  shows.innerHTML += ` <div style="display: flex;  color: white; padding: 2vw">

      <img src="${userdp}" alt="" width="30px" height="30px" style="border-radius: 50%;">
      <div style="display: flex; gap: 10px;flex-direction: column; margin-left: 1vw;">
        <div style="display: flex; gap: 10px;">

        
        <a href="#" style="color: white;">${currentUser.displayName}</a> 
        <span style="font-size: medium; color: #71767B;">@${currentUser.displayName.slice(9, 16)}</span>
       </div>
       <div>
        ${posts.join('<br>')}
       </div>
      </div>
      
    </div> `
 }
 
 
  window.submitt = submitt



