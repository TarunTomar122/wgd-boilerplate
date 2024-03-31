// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGu_l0WbP9atSDjiMwpF6caYysYKQz7vU",
    authDomain: "blob-6b04d.firebaseapp.com",
    projectId: "blob-6b04d",
    storageBucket: "blob-6b04d.appspot.com",
    messagingSenderId: "150568437512",
    appId: "1:150568437512:web:ba08bbfc1163e9d3364ebd",
    measurementId: "G-VKKMWYKX3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const updateLeaderBoard = async (docName) => {
  const leaderboardRef = collection(db, "leaderboard");
  const querySnapshot = await getDocs(leaderboardRef);
  querySnapshot.forEach((doc) => {

    if (doc.id !== docName) {
      return;
    }

    const data = doc.data();

    // data is an object with key as name and value as the highscore
    // sort the object by value and display it in the leaderboard
    const leaderboardList = document.getElementById("leaderboardList");
    var sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);
    leaderboardList.innerHTML = "";

    // pick the top 5 scores
    // sortedData = sortedData.slice(0, 5);

    let i = 0;
    sortedData.forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = `${entry[0]} - ${entry[1]}`;

      if(entry[0] == localStorage.getItem("username")){
          li.style.color = "var(--primary-color-600)";
    }

      // add crown to the highest score
      if (i==0) {
        li.innerHTML = `👑 ${entry[0]} - ${entry[1]}`;
      }

      else if(i==1){
        li.innerHTML = `🥈 ${entry[0]} - ${entry[1]}`;
      }

      else if(i==2){
        li.innerHTML = `🥉 ${entry[0]} - ${entry[1]}`;
      }
      else{
        li.innerHTML = `‎ ${i+1}. ${entry[0]} - ${entry[1]}`;
      }
      leaderboardList.appendChild(li);
      i++;
    });

  });
}

// get the leaderboard from the firestore database
const db = getFirestore(app);

const saveScore = async (name, score, docName) => {
  // save the score to the firestore database
  const leaderboardRef = collection(db, "leaderboard");
  const querySnapshot = await getDocs(leaderboardRef);
  querySnapshot.forEach((docc) => {

    if(docc.id !== docName) {
      return;
    }

    let data = docc.data();
    if (data[name]) {
      if (data[name] < score) {
        // update the score if the new score is higher
        const leaderboardRef = collection(db, "leaderboard");
        setDoc(doc(leaderboardRef, docName), {
          [name]: score
        }, { merge: true });
        data[name] = score;
      }
    } else {
      // add the new score to the leaderboard
      const leaderboardRef = collection(db, "leaderboard");
      setDoc(doc(leaderboardRef, docName), {
        [name]: score
      }, { merge: true });
      data = {...data, [name]: score};
    }

    // data is an object with key as name and value as the highscore
    // sort the object by value and display it in the leaderboard
    const leaderboardList = document.getElementById("leaderboardList");
    var sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);
    leaderboardList.innerHTML = "";

     // pick the top 5 scores
    // sortedData = sortedData.slice(0, 5);

    let i = 0;
    let rank = 0;
    sortedData.forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = `${entry[0]} - ${entry[1]}`;

      if(entry[0] == localStorage.getItem("username")){
          li.style.color = "#fcaf3e";
          rank = i+1;
      }

      // add crown to the highest score
      if (i==0) {
        li.innerHTML = `👑 ${entry[0]} - ${entry[1]}`;
      }

      else if(i==1){
        li.innerHTML = `🥈 ${entry[0]} - ${entry[1]}`;
      }

      else if(i==2){
        li.innerHTML = `🥉 ${entry[0]} - ${entry[1]}`;
      }
      else{
        li.innerHTML = `${i+1}. ${entry[0]} - ${entry[1]}`;
      }
      leaderboardList.appendChild(li);
      i++;
    });

    window.rank = rank;

  });

}

export { updateLeaderBoard, saveScore };