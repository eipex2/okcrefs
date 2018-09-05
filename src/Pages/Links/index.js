import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography';

import { Page, Body } from '../../Components'

const Links = (props) => {
    return ( 
        <Page history={props.history}>
            <Body>
                <div style={{ textAlign:"center", padding:"10px"}}>
                    <Typography> 
                        <div style={{padding:"10px"}}>
                            <a href="http://www.oksoccer.com/referee/refereehome/"> OSA Referee Page </a>
                        </div>
                        <div style={{padding:"10px"}}>
                            <a href="http://www.okpremierclubs.com/home.php?layout=4604125"> OPC Referee Page </a>
                        </div>
                        <div style={{padding:"10px"}}>
                            <a href="http://www.oksoccer.com/classes/"> Referee Classes </a>
                        </div>
                        <div style={{padding:"10px"}}>
                            <a href="https://idevforms.americaneagle.com/oklahomasa/form509128109/secure_index.html"> Misconduct Form </a>
                        </div>
                    </Typography> 
                </div>
            </Body>
        </Page>
    )
}

export default Links
