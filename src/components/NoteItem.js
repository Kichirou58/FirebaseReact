import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    twoActionButton = () => {
        //Action 1
        this.props.changeEditStatus();
        //Action 2 - Đẩy nội dung của item được click sửa lên store, store update trong state, đẩy item từ state vào
        this.props.getEditData(this.props.note);

    }

    deleteData = () => {
        this.props.getDeleteData(this.props.note.key);
        this.props.alertOn("Xóa thành công!", "danger");
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.index} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info" onClick={() => this.twoActionButton()}>Sửa</button>
                            <button className="btn btn-outline-secondary" onClick={() => this.deleteData()}>Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}

//Dù không dùng thuộc tính state nhưng vẫn cần khai báo đúng rule để connect
const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
        getDeleteData: (deleteId) => {
            dispatch({
                type: "DELETE",
                deleteId
            })
        },
        alertOn: (alertContent, alertType) => {
            dispatch({
                type:"ALERT_ON",
                alertContent, 
                alertType
            })
        },
        alertOff: () => {
            dispatch({
                type:"ALERT_OFF"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)