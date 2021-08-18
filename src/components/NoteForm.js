import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            noteTitle: '',
            noteContent: ''
        }
    }

    //Khi click mở form sửa
    componentWillMount() {
        if (this.props.editItem) {
            // this.setState({
            //     key: this.props.editItem.key,
            //     noteTitle: this.props.editItem.noteTitle,
            //     noteContent: this.props.editItem.noteContent
            // }, function () {
            //     console.log("set xong");
            // });
            this.setState({
                key: this.props.editItem.key,
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent
            })
        }
    }

    setTitle = () => {
        if (this.props.addStatus) {
            return "THÊM MỚI NOTE";
        } else {
            return "CHỈNH SỬA NOTE"
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    // Edit or Add data 
    addData = (title, content) => {
        //edit
        if (this.state.key) {
            var editObject = {};
            editObject.id = this.state.key;
            editObject.noteContent = this.state.noteContent;
            editObject.noteTitle = this.state.noteTitle;
            this.props.editDataStore(editObject);
            this.props.changeEditStatus(); //close form
            this.props.alertOn("Sửa thành công!", "success");
        //add
        } else {
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item); //Xử dụng reducer trong store, thực thi ADD_DATA
            this.props.alertOn("Thêm thành công!", "success");
        }
    }

    render() {
        return (
            <div className="col-4">
                <h4>{this.setTitle()}</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Enter here" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Enter here" />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung</small>
                    </div>
                    <button type="reset" className="btn btn-primary btn-block" onClick={() => { this.addData(this.state.noteTitle, this.state.noteContent) }}>Lưu</button>
                </form>
            </div>
        );
    }
}

// Lấy các giá trị trong state và trả về trong props của NoteForm
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem, //Lấy editItem trong state của store
        addStatus: state.isAdd
    }
}

// trả về trong props của NoteForm: this.prop.addDataStore()
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //thực khi action ADD_DATA trong store
        addDataStore: (getItem) => {
            dispatch({ type: "ADD_DATA", getItem }) 
        },
        //thực khi action EDIT trong store
        editDataStore: (getItem) => {
            dispatch({ type: "EDIT", getItem })
        },
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
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

//connect vào component NoteForm chuyền theo 2 hàm mapStateToProps và mapDispatchToProps -> Lúc này NoteForm có thể sử dụng 2 hàm này
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
