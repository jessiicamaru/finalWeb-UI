import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    departure: { coach: 1, train: '', fromStation: '', toStation: '', depart: '', arrival: '', seat: 0, list: [] },
    return: { coach: 1, train: '', fromStation: '', toStation: '', depart: '', arrival: '', seat: 0, list: [] },
};

export default createSlice({
    name: 'train',
    initialState: {
        state: {
            departure: { coach: 1, train: '', fromStation: '', toStation: '', depart: '', arrival: '', seat: 0, list: [] },
            return: { coach: 1, train: '', fromStation: '', toStation: '', depart: '', arrival: '', seat: 0, list: [] },
        },
    },
    reducers: {
        reset: (state) => {
            state.state = initialState;
            return;
        },
        removeAllTicket: (state) => {
            state.state.departure.list = [];
            state.state.return.list = [];
            return;
        },
        setCoach: (state, action) => {
            switch (action.payload.type) {
                case 'departure': {
                    state.state.departure.coach = action.payload.payload;
                    break;
                }
                case 'return': {
                    state.state.return.coach = action.payload.payload;
                    break;
                }
                default:
                    break;
            }
        },
        setTrain: (state, action) => {
            switch (action.payload.type) {
                case 'departure': {
                    state.state.departure.train = action.payload.payload;
                    break;
                }
                case 'return': {
                    state.state.return.train = action.payload.payload;
                    break;
                }
                default:
                    break;
            }
        },
        setTrainStation: (state, action) => {
            console.log(action.payload.payload);
            switch (action.payload.type) {
                case 'departure': {
                    state.state.departure.fromStation = action.payload.payload.fromStation;
                    state.state.departure.toStation = action.payload.payload.toStation;
                    break;
                }
                case 'return': {
                    state.state.return.fromStation = action.payload.payload.fromStation;
                    state.state.return.toStation = action.payload.payload.toStation;
                    break;
                }
                default:
                    break;
            }
        },
        setTrainSchedule: (state, action) => {
            switch (action.payload.type) {
                case 'departure': {
                    state.state.departure.depart = action.payload.payload.depart;
                    state.state.departure.arrival = action.payload.payload.arrival;
                    break;
                }
                case 'return': {
                    state.state.return.depart = action.payload.payload.depart;
                    state.state.return.arrival = action.payload.payload.arrival;
                    break;
                }
                default:
                    break;
            }
        },
        addTicket: (state, action) => {
            switch (action.payload.type) {
                case 'departure': {
                    const { coach, train, fromStation, toStation, depart, arrival } = state.state.departure;
                    state.state.departure.list.push({ coach, train, fromStation, toStation, depart, arrival, ...action.payload.payload });
                    break;
                }
                case 'return': {
                    const { coach, train, fromStation, toStation, depart, arrival } = state.state.return;

                    state.state.return.list.push({ coach, train, fromStation, toStation, depart, arrival, ...action.payload.payload });
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
        deleteTicket: (state, action) => {
            switch (action.payload.type) {
                case 'departure': {
                    const { list } = state.state.departure;
                    const temp = list.find((item) => {
                        return (
                            item.seat == action.payload.payload.seat &&
                            item.coach == action.payload.payload.coach &&
                            item.train == action.payload.payload.train &&
                            item.bookingDate == action.payload.payload.bookingDate &&
                            item.fromStation == action.payload.payload.fromStation &&
                            item.toStation == action.payload.payload.toStation &&
                            item.depart == action.payload.payload.depart &&
                            item.arrival == action.payload.payload.arrival
                        );
                    });

                    state.state.departure.list.splice(list.indexOf(temp), 1);
                    break;
                }
                case 'return': {
                    const { list } = state.state.return;

                    const temp = list.find((item) => {
                        return (
                            item.seat == action.payload.payload.seat &&
                            item.coach == action.payload.payload.coach &&
                            item.train == action.payload.payload.train &&
                            item.bookingDate == action.payload.payload.bookingDate &&
                            item.fromStation == action.payload.payload.fromStation &&
                            item.toStation == action.payload.payload.toStation &&
                            item.depart == action.payload.payload.depart &&
                            item.arrival == action.payload.payload.arrival
                        );
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
