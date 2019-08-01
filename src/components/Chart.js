import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend
} from 'recharts';
import { useSelector } from "react-redux";
import { getReducedMetricDataSelector } from "../store/actions";

const useStyles = makeStyles({
    root: {
        flex: 1,
        margin: "0 15px 30px 15px"
    }
});
export default () => {
    const { root } = useStyles();
    const data = useSelector(getReducedMetricDataSelector);
    return <Card className={root}>
        <ResponsiveContainer width='100%'>
            <LineChart data={data}
                margin={{
                    top: 15, right: 90, left: 0, bottom: 15,
                }}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="at" type="number" domain={['dataMin', 'dataMax']} />
                <YAxis domain={['dataMin - 200', 'dataMax+200']} />
                <Line type="monotone" dataKey="tubingPressure" stroke="#f44336" strokeWidth={2} />
                <Line type="monotone" dataKey="casingPressure" stroke="#9c27b0" strokeWidth={2} />
                <Line type="monotone" dataKey="oilTemp" stroke="#3f51b5" strokeWidth={2} />
                <Line type="monotone" dataKey="flareTemp" stroke="#009688" strokeWidth={2} />
                <Line type="monotone" dataKey="waterTemp" stroke="#ff9800" strokeWidth={2} />
                <Line type="monotone" dataKey="injValveOpen" stroke="#795548" strokeWidth={2} />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </Card>
}