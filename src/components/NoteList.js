import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                    10/05/2021</a>
                            </h5>
                        </div>
                        <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum delectus quasi nihil.
                                Labore delectus eius inventore magni optio cumque, voluptatibus at laudantium, eos
                                voluptas fugiat tempore fugit ratione quasi aspernatur.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteList;