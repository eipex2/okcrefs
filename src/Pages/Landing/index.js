import React from 'react'

import './landing.css'

import { Page, Body , Footer} from '../../Components'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    heroUnit: {
        backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)"
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
})

const Landing = (props) => {

    const { history, classes } = props
    return (
        <Page history={history}>
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography variant="display3" align="center" style={{color:'white',}} gutterBottom>
                        Oklahoma Referees
                        </Typography>
                    <Typography variant="title" align="center" color="textSecondary" paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc.
                        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                        entirely.
                        </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" style={{letterSpacing:'1px'}}>
                                    learn more
                                    </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <Body bgc='#F5F5F5'>
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
            <Footer />
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);





