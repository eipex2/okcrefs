import React from 'react'

import LoginPage from '../Pages/Auth/Login'
/**
 * withAuthorization
 * Pages that can only be viewed by a logged in user
 */

/**
 * Set user context
 * default - guest
 */
import { UserContext } from '../App'


const withAuth = Component =>
    ({ authenticated, ...rest }) => authenticated ?
        <UserContext.Consumer>
            {user => user ? <Component {...rest} user={user} /> : <LoginPage {...rest} />}
        </UserContext.Consumer>
        : <Component {...rest} />



export default withAuth