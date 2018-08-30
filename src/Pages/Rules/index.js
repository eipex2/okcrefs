import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';


import { Page, ComingSoon } from '../../Components'

const Rules = (props) => {
    return ( 
        <Page history={props.history}>
            <ComingSoon />
        </Page>
    )
}

export default Rules
