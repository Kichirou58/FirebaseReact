import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }

    render() {
        if (!this.props.alertShow) {
            return null;
        } else {
            return (
                <div>
                    <AlertContainer position="top-center">
                        <Alert type={this.props.alertType} timeout={1000} onDismiss={() => this.handleDismiss()}>{this.props.alertContent}</Alert>
                    </AlertContainer>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent,
        alertType: state.alertType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        alertOff: () => {
            dispatch({
                type:"ALERT_OFF"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
