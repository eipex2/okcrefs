import React from 'react'

import './landing.css'

import { Page, Body } from '../../Components'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

import MenuIcon from '@material-ui/icons/Menu';

const Landing = (props) => {

    const { history } = props
    return (
        <Page history={history} authenticated>
            <Body>
                <Typography variant="headline" component="h1" style={{ textAlign: 'center' }}>
                    Upcoming events
                        </Typography>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Upper Level Fitness Test</h3>
                        <h4 className="vertical-timeline-element-subtitle">Memorial HS, Tulsa OK</h4>
                        <p>
                            August 4th
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">SPRL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Edmond Soccer Club</h4>
                        <p>
                            September 1st – 2nd
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">OPL Festival Play</h3>
                        <h4 className="vertical-timeline-element-subtitle">TBD</h4>
                        <p>
                            September 15th
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">SRPL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mohawk Sports Complex</h4>
                        <p>
                            September 22nd – 23rd
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Catoosa Soccer Association Tournament</h3>
                        <h4 className="vertical-timeline-element-subtitle"></h4>
                        <p>
                            October 5th-7th
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">OPL Festival Play </h3>
                        <h4 className="vertical-timeline-element-subtitle">TBD</h4>
                        <p>
                            October 6th
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Tournament of Champions</h3>
                        <h4 className="vertical-timeline-element-subtitle">TBD</h4>
                        <p>
                            October 13th
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date=""
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MenuIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">OPL Festival Play</h3>
                        <h4 className="vertical-timeline-element-subtitle">TBD</h4>
                        <p>
                        November 9th – 11th 
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </Body>
        </Page>
    )
}

export default Landing;



