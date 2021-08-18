import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwHWGXYNiygBRBORxWAvuzmewl98OjPKQ",
  authDomain: "managenotereact.firebaseapp.com",
  databaseURL: "https://managenotereact-default-rtdb.firebaseio.com",
  projectId: "managenotereact",
  storageBucket: "managenotereact.appspot.com",
  messagingSenderId: "654303082391",
  appId: "1:654303082391:web:cc542bf7710ae6f5be36d2",
  measurementId: "G-ECKR9XJFNX"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.initializeApp(firebaseConfig);
export const noteData =  firebase.database().ref('dataForNotes');

// //Get dữ liệu từ firebase
// var data = firebase.database().ref('dataForNotes/');
// // Một khi mà lấy được thì
// data.once('value').then(function (snapshot) {
//   console.log(snapshot.val());
// })

// //Sửa dữ liệu
// data.set({
//   id:10,
//   titleNote:"Tiêu đề 10",
//   contentNote:"Content 10"
// })

// // doc
// const dbRef = firebase.database().ref();
// dbRef.child("dataForNotes").get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
