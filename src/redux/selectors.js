import { createSelector } from '@reduxjs/toolkit';

export const activeDepartureTicketListByTrainByCoach = (state) => {
    return {
        list: state.train.state.departure.list,
        coach: state.train.state.departure.coach,
        train: state.train.state.departure.train,
    };
};

export const departureRemainingSelectors = createSelector(activeDepartureTicketListByTrainByCoach, ({ list, coach, train }) => {
    return list.filter((ticket) => {
        return ticket.coach == coach && ticket.train == train;
    });
});

export const activeReturnTicketListByTrainByCoach = (state) => {
    return {
        list: state.train.state.return.list,
        coach: state.train.state.return.coach,
        train: state.train.state.return.train,
    };
};

export const returnRemainingSelectors = createSelector(activeReturnTicketListByTrainByCoach, ({ list, coach, train }) => {
    return list.filter((ticket) => {
        return ticket.coach == coach && ticket.train == train;
    });
});
