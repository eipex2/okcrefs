import React, { Component } from 'react';

import { Modal, Form} from '../Components'



import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle'


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

const questions = {
    firstname: {t:"input", q:"firstname", v:""},
    lastname: {t:"input", q:"lastname", v:""}
}

class AddRefModal extends Component {

    state = {
        firstname: "",
        lastname: ""
    }

    completion = () => {
        const { firstname, lastname } = this.state
        this.props.completion(firstname, lastname)
        this.setState({firstname:"", lastname:""})
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        const { classes, isOpen,close } = this.props;

        return <Modal title="Add a Referee"
            description="Complete the form below and click add to add a new referee"
            btnTitle="add" isOpen={isOpen} completion={this.completion} close={close}>

            <div style={{ textAlign: 'center' }}>
                <FormControl className={classes.margin} margin="normal">
                    <InputLabel htmlFor="input-with-icon-adornment">Firstname</InputLabel>
                    <Input
                        fullWidth
                        name="firstname"
                        id="input-with-icon-adornment"
                        value={this.state.firstname}
                        onChange={this.onChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div style={{ textAlign: 'center' }}>
                <FormControl className={classes.margin} >
                    <InputLabel htmlFor="input-with-icon-adornment">Lastname</InputLabel>
                    <Input
                        name="lastname"
                        id="input-with-icon-adornment"
                        value={this.state.lastname}
                        onChange={this.onChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>

        </Modal>
    }
}

export default withStyles(styles)(AddRefModal);


