// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import { getDatabase, ref, push, set, onValue } 
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
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
const db = getDatabase(app);

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
const submitt = async () => {
  if (inputt.value.trim() === "") {
    alert("Post cannot be empty");
    return;
  }

  const postRef = push(ref(db, "posts"));

  await set(postRef, {
    text: inputt.value,
    uid: currentUser.uid,
    username: currentUser.displayName,
    photoURL: userdp,
    createdAt: Date.now()
  });

  inputt.value = "";
};
window.submitt = submitt;
const shows = document.getElementById("shows");

onValue(ref(db, "posts"), (snapshot) => {
  shows.innerHTML = "";

  const postsObj = snapshot.val();
  if (!postsObj) return;

  const postsArr = Object.values(postsObj)
    .sort((a, b) => b.createdAt - a.createdAt);

  postsArr.forEach(p => {
    shows.innerHTML += `
      <div style="display:flex;color:white;padding:2vw">
        <img src="${p.photoURL}" width="30" height="30" style="border-radius:50%;">
        <div style="margin-left:1vw;">
          <div style="display:flex;gap:10px;">
            <a href="#" style="color:white;">${p.username}</a>
            <span style="color:#71767B;">@${p.username.slice(9,16)}</span>
          </div>
          <div>${p.text}</div>
          <div style="display: flex; justify-content: space-between; width: 100%;">
        <img src="./images/uil--comment.svg" alt=""  width="20px"> 
        <img src="./images/weui--like-outlined.svg" alt="" width="20px">
        <img src="./images/bx--repost.svg" alt="" width="20px">
        <img src="./images/material-symbols--bookmark-outline.svg" alt="" width="20px">
      </div>
        </div>
        
      </div>
    `;
  });
});
 
 



