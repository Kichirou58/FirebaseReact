import './../App.css';
import React, { Component } from 'react';
import { firebaseConnect } from './firebaseConnect.js';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class App extends Component {

  pushData = () => {
    var connectData = firebase.database().ref('dataForNotes/');
    connectData.push({
      "id": 1,
      "titleNote": "Tiêu đề 1",
      "contentNote": "Nội dung 1"
    });
    console.log("Đã thêm data vào firebase");
  }


  deleteData = (id) => {
    var connectData = firebase.database().ref('dataForNotes/');
    connectData.child(id).remove();
    console.log("Đã xóa data có id: " + id);
  }

  render() {
    console.log(firebaseConnect);
    return (
      <div>
        <button onClick={() => this.pushData()}>Click để thêm mới bằng push</button>
        <button onClick={() => this.deleteData('M_JYD3Jev9UnzLSRHto')}>Click để xóa</button>
      </div>
    );
  }
}

export default App;
