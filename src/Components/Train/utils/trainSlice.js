import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
    name: 'train',
    initialState: {
        state: {
            departure: { coach: 1, train: '', fromStation: '', toStation: '', seat: 0, list: [] },
            return: { coach: 1, train: '', fromStation: '', toStation: '', seat: 0, list: [] },
        },
    },
    reducers: {
        addTicket: (state, action) => {
            state.ticketList.push(action.payload);
        },
        setDepartureCoach: (state, action) => {
            state.state.departure.coach = action.payload;
        },
        setReturnCoach: (state, action) => {
            state.state.return.coach = action.payload;
        },
        setDepartureTrain: (state, action) => {
            state.state.departure.train = action.payload;
        },
        setReturnTrain: (state, action) => {
            state.state.return.train = action.payload;
        },
        setDepartureDate: (state, action) => {
            state.state.departure.fromStation = action.payload.fromStation;
            state.state.departure.toStation = action.payload.toStation;
        },
        setReturnDate: (state, action) => {
            state.state.return.fromStation = action.payload.fromStation;
            state.state.return.toStation = action.payload.toStation;
        },
    },
});
