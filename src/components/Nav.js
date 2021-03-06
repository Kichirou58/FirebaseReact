import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {

    handleAdd = (event) => {
        event.preventDefault();
        this.props.changeEditStatus();
        this.props.changeAddStatus();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'black' }}>
                <a className="navbar-brand" href="http://note.vn">My Note</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#note1" aria-controls="note1" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={(event) => this.handleAdd(event)}>Thêm Note</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

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
        changeAddStatus: () => {
            dispatch({
                type: "CHANGE_ADD_STATUS"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
