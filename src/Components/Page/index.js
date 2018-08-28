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
                        <Typography variant="title"  style={{ flex: 1, textAlign:'center' }}></Typography>                    
                        {
                            authenticated ?
                            <Button color="inherit" onClick={this.signOut}>Sign out</Button>
                            :<Button color="inherit" onClick={() => history.push('/login')}>Sign in</Button>
                        }
                    </Toolbar>
                    <Toolbar style={styles.toolbar}>
                        {/* <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Button color="inherit" onClick={() => history.push('/')}>Home</Button>
                        <Button color="inherit" onClick={() => history.push('/policies')}>Policies</Button>
                        <Button color="inherit" onClick={() => history.push('/comingSoon')}>Calander</Button>
                        <Button color="inherit" onClick={() => history.push('/comingSoon')}>Rules</Button>
                        <Button color="inherit" onClick={() => history.push('/srcInfo')}>SRC Info</Button>
                        <Button color="inherit" onClick={() => history.push('/comingSoon')}>Upgrade</Button>
                        <Button color="inherit" onClick={() => history.push('/comingSoon')}>Evaluations</Button>
                        <Button color="inherit" onClick={() => history.push('/links')}>Links</Button>
                    </Toolbar>
                </AppBar>
                {children}
            </div>
        )
    }

}

const styles = {
    toolbar:{
        justifyContent: 'center', 
        alignItems: 'center',
        background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
        backgroundBlendMode: "multiply"
    }   
}




export default Page;