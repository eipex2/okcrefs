import React, {Component} from 'react'
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './../default.css'

import { Page } from '../../Components'

const styles = {
    media: {
      height: 140,
    },
  };

const SRCInfo = (props) => {
    return ( 
        <Page history={props.history}>
            {/* <div class="center"> */}
                <Card>
                    <CardMedia image="./Photos/RichardBrook.JPG"/>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2"> State Referee Chairman </Typography>
                        <div class="center">
                        <Typography component="p"> State Referee Chairman </Typography>
                        <Typography component="p"> Richard Brook</Typography>
                        <Typography component="p"> Broken Arrow, OK </Typography>
                        <Typography component="p"> 918-688-9873 </Typography>
                        <Typography component="p"> Richard@oksoccer.com </Typography>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia image="./Photos/RonPoulsen.jpg" />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2"> State Referee Administrator </Typography>
                        <Typography component="p"> Ronald Poulsen </Typography>
                        <Typography component="p"> Tulsa, OK</Typography>
                        <Typography component="p"> 918-521-6286 </Typography>
                        <Typography component="p"> ron@oksoccer.com </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia image="./Photos/NateHopkins.PNG"/>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2"> State Youth Referee Administrator </Typography>
                        <Typography component="p"> Nate Hopkins </Typography>
                        <Typography component="p"> Broken Arrow, OK </Typography>
                        <Typography component="p"> 918-289-1629 </Typography>
                        <Typography component="p"> nate@oksoccer.com </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia image="./Photos//LarryMorgan.png" />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2"> State Director of Assessment </Typography>
                        <Typography component="p"> Larry Morgan </Typography>
                        <Typography component="p"> Jenks, OK </Typography>
                        <Typography component="p"> 918-740-2697 </Typography>
                        <Typography component="p"> bokconstr@aol.com </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia image="./Photos/JimBrittain.JPG" />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2"> State Director of Instruction </Typography>
                        <Typography component="p"> Jim Brittain </Typography>
                        <Typography component="p"> Broken Arrow, OK </Typography>
                        <Typography component="p"> 918-231-9744 </Typography>
                        <Typography component="p"> jimb@pobox.com </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia image="./Photos/DarronKillman.JPG" />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2"> State Director of Assignments </Typography>
                        <Typography component="p"> Darron Killman </Typography>
                        <Typography component="p"> Oklahoma City, OK </Typography>
                        <Typography component="p"> 405-255-9731 </Typography>
                        <Typography component="p"> Darron.killman@sbcglobal.net </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia image="./Photos/JeremyCrockett.jpg" />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2"> State Game Assignor </Typography>
                        <Typography component="p"> Jeremy Crockett </Typography>
                        <Typography component="p"> Claremore, OK </Typography>
                        <Typography component="p">918-923-0014 </Typography>
                        <Typography component="p"> crockett.jeremy@gmail.com </Typography>
                    </CardContent>
                </Card>
            {/* </div> */}
        </Page>
    )
}

// export default withStyles(styles)(SRCInfo);
export default SRCInfo