import { createSelector } from '@reduxjs/toolkit';

const activeDepartureTicketListByTrainByCoach = (state) => {
    console.log(state);
    return {
        list: state.train.state.departure.list,
        coach: state.train.state.departure.coach,
        train: state.train.state.departure.train,
    };
};

export const departureRemainingSelectors = createSelector(activeDepartureTicketListByTrainByCoach, ({ list, coach, train }) => {
    let temp = list.filter((ticket) => {
        return ticket.coach == coach && ticket.train == train;
    });

    console.log('depart', temp);
    return temp;
});

//----------------------------------------------------------------

const activeReturnTicketListByTrainByCoach = (state) => {
    return {
        list: state.train.state.return.list,
        coach: state.train.state.return.coach,
        train: state.train.state.return.train,
    };
};

export const returnRemainingSelectors = createSelector(activeReturnTicketListByTrainByCoach, ({ list, coach, train }) => {
    const temp = list.filter((ticket) => {
        return ticket.coach == coach && ticket.train == train;
    });

    console.log('return', temp);
    return temp;
});

//----------------------------------------------------------------

const getList = (state) => {
    return {
        departureList: state.train.state.departure.list,
        returnList: state.train.state.return.list,
    };
};

export const getListTicket = createSelector(getList, ({ departureList, returnList }) => {
    return {
        departureList,
        returnList,
    };
});

//----------------------------------------------------------------

const getState = (state) => {
    return {
        state: state.train.state,
    };
};

export const getWholeState = createSelector(getState, ({ state }) => {
    return {
        state,
    };
});
