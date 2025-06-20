import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fruit, FruitState } from "../models/fruits";

const initialState: FruitState = {
    allFruits: [],
    selectedFruits: [],
    groupedFruits: [],
};

const storeSlice = createSlice({
    name: "fruits",
    initialState,
    reducers: {
        saveFruits(state, action: PayloadAction<Fruit[]>) {
            state.allFruits = action.payload;

            return state;
        },
        selectFrut(state, action: PayloadAction<Fruit>) {
            const selectedFruit: Fruit = action.payload;
        
            state.selectedFruits.push(selectedFruit);
        },
        selectFruts(state, action: PayloadAction<Fruit[]>) {
            state.groupedFruits = action.payload;

            return state;
        },
    },
});

const store = configureStore({
    reducer: storeSlice.reducer,
});

export const storeActions = storeSlice.actions;

export default store;