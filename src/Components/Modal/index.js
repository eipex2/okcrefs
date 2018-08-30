import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import green from '@material-ui/core/colors/green';

class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.isOpen
        }
    }

    closeAction = () => {
        this.props.close()     
    }

    submitAction = () => {
        this.props.completion()
        this.props.close()  
    }

    componentWillReceiveProps({isOpen}){
       this.setState({isOpen})
    }

    render() {

        const {title, description, btnTitle, children, isOpen} = this.props
        return <Dialog
            open={isOpen}
            onClose={this.closeAction}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                   {description}
                 </DialogContentText>
               {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={this.closeAction}>
                    Cancel
                 </Button>
                <Button onClick={this.submitAction} variant="contained" color="primary" style={{color:'white',backgroundColor:green[500]}}>
                    {btnTitle}
                </Button>
            </DialogActions>
        </Dialog>
    }
}

export default Modal;