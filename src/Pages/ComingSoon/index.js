import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';

import './../default.css'

import { Page } from '../../Components'

const ComingSoon = (props) => {
    return ( 
        <Page history={props.history}>
            <Paper>
                <div class="backGroundColor">
                    <div class="center linePadding">
                        Coming Soon
                    </div>
                </div>
            </Paper>
        </Page>
    )
}

export default ComingSoon