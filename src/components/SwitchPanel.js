import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';

const SingleSwitchComp = ({ text }) => {
    return <Card>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                {text}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
                435.00
            </Typography>
        </CardContent>
        <CardActions>
            <Switch color="primary" />
        </CardActions>
    </Card>
}

const useStyles = makeStyles(theme => ({
    root: {
        height: 180,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        gridGap: 8,
        padding: 15
    }
}));


const SwitchPanel = () => {
    const { root } = useStyles();
    return <div className={root}>
        <SingleSwitchComp text="Tubing Pressure" />
        <SingleSwitchComp text="Casing Pressure" />
        <SingleSwitchComp text="Oil Temp" />
        <SingleSwitchComp text="Flare Temp" />
        <SingleSwitchComp text="Watrer Temp" />
        <SingleSwitchComp text="Inj Valve Open" />
    </div>
}
export default SwitchPanel;