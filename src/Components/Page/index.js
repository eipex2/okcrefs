import React, { Component } from 'react'

import './Page.css'

import NavBar from '../NavBar'

import { firebase } from '../../Firebase';
import { auth } from '../../Firebase'

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Page extends Component {
    constructor(props) {
        super(props)

    }
    
    componentWillMount() {
        const { authenticated, history } = this.props


        firebase.auth.onAuthStateChanged(user => {
            if (authenticated && !user) {
                history.push('/login')
            }
        });

    }

    signOut = () => {
        auth.signOut().then(
            res => this.props.history.push('/login')
        )
    }

    render() {

        const { children, authenticated, history } = this.props

        return (
            <div className="Page">
                <AppBar position="static">
                    <Toolbar style={{ flex: 1, color: 'black', backgroundColor: 'white' }}>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>    
                        <Typography variant="title">OKC Referees</Typography>                    
                        <span style={{ flex: 1 }}></span>
                        {
                            authenticated ?
                            <Button color="inherit" onClick={this.signOut}>Logout</Button>
                            :<Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
                        }
                    </Toolbar>
                    <Toolbar style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Button color="inherit" onClick={() => history.push('/')}>Home</Button>
                        <Button color="inherit" onClick={() => history.push('/policies')}>Policies</Button>
                        <Button color="inherit">Calender</Button>
                    </Toolbar>
                </AppBar>
                {children}
            </div>
        )
    }

}



export default Page;