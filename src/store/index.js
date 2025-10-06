import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "../reducers/contadorReducer";

const store = configureStore({ 
    reducer: {
      contador: contadorReducer
    },
})

export default store;   