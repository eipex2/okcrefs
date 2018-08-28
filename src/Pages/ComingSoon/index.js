import React, {Component} from 'react'

import './../default.css'

import { Page } from '../../Components'

const ComingSoon = (props) => {
    return ( 
        <Page history={props.history}>
            <div class="backGroundColor">
                <div class="center linePadding">
                    Coming Soon
                </div>
            </div>
        </Page>
    )
}

export default ComingSoon