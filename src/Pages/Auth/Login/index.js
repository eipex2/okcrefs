import React, { Component } from 'react'

import { Page, Card, Body, Form } from '../../../Components'

import { loginUser } from './actions'

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    loginAction = () => {

        const { history } = this.props
        const { email, password } = this.state

        loginUser(email, password).then(
            (success, err) => history.push('/profile')
        )
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })


    render() {

        const { email, password } = this.state
        const { history } = this.props

        return <Page history={history}>
            <Body center>
                <Card>
                    <Form>
                        <Typography>
                            Admin Login
                        </Typography>
                        <Input
                            style={styles.margin10}
                            name="email"
                            type="email"
                            placeholder="Email"
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                            value={email}
                            onChange={this.onChange}
                        />
                        <Input
                            style={styles.margin10}
                            name="password"
                            type="password"
                            placeholder="Password"
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                            value={password}
                            onChange={this.onChange}
                        />
                        <Button variant="contained" color="primary" onClick={this.loginAction}>
                            Login
                         </Button>
                    </Form>
                </Card>
            </Body>
        </Page >
    }

}

const styles = {
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    margin10:{
        margin:'10px 0px'
    }
}