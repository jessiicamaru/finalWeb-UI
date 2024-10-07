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
        addTicket: (state, action) => {
            switch (action.payload.type) {
                case 'departure': {
                    const { coach, train, fromStation, toStation } = state.state.departure;
                    state.state.departure.list.push({ coach, train, fromStation, toStation, ...action.payload.payload });
                    break;
                }
                case 'return': {
                    const { coach, train, fromStation, toStation } = state.state.return;

                    state.state.return.list.push({ coach, train, fromStation, toStation, ...action.payload.payload });
                    break;
                }
                default:
                    break;
            }
        },
        removeTicket: (state, action) => {
            switch (action.payload.type) {
                case 'departure': {
                    const { list } = state.state.departure;
                    const temp = list.find((item) => {
                        return item.seat == action.payload.payload.seat && item.bookingDate == action.payload.payload.bookingDate;
                    });

                    state.state.departure.list.splice(list.indexOf(temp), 1);
                    break;
                }
                case 'return': {
                    const { list } = state.state.return;

                    const temp = list.find((item) => {
                        return item.seat == action.payload.payload.seat && item.bookingDate == action.payload.payload.bookingDate;
                    });
                    state.state.return.list.splice(list.indexOf(temp), 1);
                    break;
                }
                default:
                    break;
            }
        },
    },
});
