import React, { Component } from 'react'

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MInput from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    inputField:{
        flexBasis:50
    },
    textField: {
        flexBasis: 200,
    },
});

const Input = ({ name, value, classes, key, q, onChange }) => {

    return (<FormControl className={classNames(classes.margin, classes.inputField)}>
        <InputLabel htmlFor="input-with-icon-adornment">{q}</InputLabel>
        <MInput
            name={name}
            value={value}
            id="input-with-icon-adornment"
            onChange={onChange}
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl>)
}

class Control extends Component {

    render() {

        const { type, value, onChange} = this.props

        return (() => {
            switch (type) {
                case "input":
                    return <Input {...this.props}/>
                default:
                    break;

            }
        })()
    }


}

export default withStyles(styles)(Control);
