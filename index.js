import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings ={
    databaseURL: "https://vertigo-assist-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
console.log(app)

function log(){
    console.log('Clicked');
};

document.getElementById("continue-button").addEventListener('click', log);

