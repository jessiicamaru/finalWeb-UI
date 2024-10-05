import { configureStore } from '@reduxjs/toolkit';
import trainSlice from '@/Components/Train/utils/trainSlice';

const store = configureStore({
    reducer: {
        train: trainSlice.reducer,
    },
});

export default store;
