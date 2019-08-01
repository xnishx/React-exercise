import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import { useSelector } from "react-redux";
import { getLatestMetricDataSelector } from "../store/actions";


const SingleSwitchComp = ({ text, mkey, data }) => {
    return <Card>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                {text}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
                {data[mkey] || 0}
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
    const latestData = useSelector(getLatestMetricDataSelector);
    return <div className={root}>
        <SingleSwitchComp text="Tubing Pressure" mkey="tubingPressure" data={latestData} />
        <SingleSwitchComp text="Casing Pressure" mkey="casingPressure" data={latestData} />
        <SingleSwitchComp text="Oil Temp" mkey="oilTemp" data={latestData} />
        <SingleSwitchComp text="Flare Temp" mkey="flareTemp" data={latestData} />
        <SingleSwitchComp text="Watrer Temp" mkey="waterTemp" data={latestData} />
        <SingleSwitchComp text="Inj Valve Open" mkey="injValveOpen" data={latestData} />
    </div>
}
export default SwitchPanel;