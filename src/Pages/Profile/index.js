import React from 'react'

import { Page, Body, Form, Control } from '../../Components'

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const questions = {
    firstname: {t:"input", q:"firstname", v:"m"},
    lastname: {t:"input", q:"lastname", v:""}
}

const Profile = (props) => {
    return (
        <Page authenticated history={props.history}>
            <Body center>
            </Body>
        </Page>
    )
}

export default Profile;