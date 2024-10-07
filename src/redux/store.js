import { configureStore } from '@reduxjs/toolkit';
import trainSlice from '@/utils/trainSlice';

const store = configureStore({
    reducer: {
        train: trainSlice.reducer,
    },
});

export default store;
