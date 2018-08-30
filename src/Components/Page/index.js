import React, { Component } from 'react'

import './Page.css'

import NavBar from '../NavBar'

import { withAuth } from '../../PageStates'
// Theme context, default to light theme




class Page extends Component {
    render() {

        const { children, history, user } = this.props

        return (
                <div className="Page">
                    <NavBar user={user} history={history} />
                    {children}
                </div>
        )
    }

}

export default withAuth(Page);