import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    addData = (title, content) => {
        var item = {};
        item.noteTitle = title;
        item.noteContent = content;
        this.props.getData(item);
    }

    render() {
        return (
            <div className="col-4">
                <h4>Title</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Enter here" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Enter here" defaultValue={""} />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung</small>
                    </div>
                    <button type="reset" className="btn btn-primary btn-block" onClick={() => { this.addData(this.state.noteTitle, this.state.noteContent) } }>Lưu</button>
                </form>
            </div>

        );
    }
}

export default NoteForm;