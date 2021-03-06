import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
// import { noteData } from './firebaseConnect.js';
import { connect } from 'react-redux';
import AlertInfo from './AlertInfo';

class App extends Component {

    showForm = () => {
        if (this.props.isEdit) {
            return <NoteForm/>
        }
    }

    // addData = (item) => {
    //     noteData.push(item);
    // }

    render() {
        // noteData.once('value').then(function(snapshot){
        //     console.log(snapshot.val());
        // });
        return (
            <div>
                <Nav />
                <AlertInfo/>
                <div className="container">
                    <div className="row">
                        <NoteList/>
                        {
                            this.showForm()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
