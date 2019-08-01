import { createSelector } from 'reselect';


export const API_ERROR = "EVENT/API_ERROR_RECEIVED";
export const WEATHER_DATA_RECEIVED = "EVENT/WEATHER_DATA_RECEIVED";
export const UPDATE_METRICS_DATA = "UPDATE_METRICS_DATA";

export const updateMetricData = (data) => ({
    type: UPDATE_METRICS_DATA,
    data
});

const stateSelector = state => state.metrics;

export const getReducedMetricDataSelector = createSelector([stateSelector], state => state.reducedMetricData)