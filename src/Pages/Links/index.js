import React, {Component} from 'react'

import './../default.css'

import { Page } from '../../Components'

const Links = (props) => {
    return ( 
        <Page history={props.history}>
            <div class="backGroundColor">
                <div class="center">
                    <div class="linePadding">
                        <a href="http://www.oksoccer.com/referee/refereehome/"> OSA Referee Page </a>
                    </div>
                    <div class="linePadding">
                        <a href="http://www.okpremierclubs.com/home.php?layout=4604125"> OPC Referee Page </a>
                    </div>
                    <div class="linePadding">
                        <a href="http://www.oksoccer.com/classes/"> Referee Classes </a>
                    </div>
                    <div class="linePadding">
                        <a href="https://idevforms.americaneagle.com/oklahomasa/form509128109/secure_index.html"> Misconduct Form </a>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Links