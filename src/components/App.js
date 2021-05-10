import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { noteData } from './firebaseConnect.js';

class App extends Component {

    addData = (item) => {
        noteData.push(item);
    }

    render() {
        noteData.once('value').then(function(snapshot){
            console.log(snapshot.val());
        });
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <NoteList/>
                        <NoteForm getData={(item) => this.addData(item)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;