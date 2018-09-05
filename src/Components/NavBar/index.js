import React from 'react';
import { signOut } from '../../Firebase/auth';

import NavLink from '../NavLink'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import green from '@material-ui/core/colors/green';

import { auth } from '../../Firebase'
import logo from '../../Assets/Logo.png';

export default ({ user, history }) => {

    const signOut = () => {
        auth.signOut().then(
            res => history.push('/login')
        )
    }

    const handleChange = (event, value) => {
        history.push(value)
    };

    return (
        <AppBar position="static">
            <Toolbar style={{ flex: 1, color: 'black', backgroundColor: 'white' }}>
                <img src={logo} width="50" height="50" />
                <Typography variant="title" style={{ flex: 1, textAlign: 'center' }}></Typography>
                {
                    user ?
                        <Button color="inherit" onClick={signOut}>Sign out</Button>
                        : <Button color="inherit" onClick={() => history.push('/login')}>Sign in</Button>
                }
            </Toolbar>
            <Tabs
                value={history.location.pathname}
                onChange={handleChange}
                indicatorColor="secondary"
                scrollable
                scrollButtons="auto"
                style={styles.toolbar}
            >
                <Tab label="Home" value="/" />
                <Tab label="Policies" value="/policies" />
                <Tab label="Calendar" value="/calendar" />
                <Tab label="Rules" value="/rules" />
                <Tab label="SRC Info" value="/srcInfo" />
                <Tab label="Referee Status" value="/refStatus" />
                <Tab label="Evaluations" value="/evaluations" />
                <Tab label="Links" value="/links" />
                <Tab label="Futsal" value="/futsal" />
            </Tabs>
        </AppBar>
    )
}

const styles = {
    toolbar: {
        justifyContent: 'center',
        alignItems: 'center',
        background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
        backgroundBlendMode: "multiply"
    }
}