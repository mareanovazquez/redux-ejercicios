import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "../reducers/contadorReducer";
import { contadorSlice } from "../reducers/contadorSlice";

const store = configureStore({ 
    reducer: {
      /* contador: contadorReducer */
      contador:contadorSlice.reducer
    },
})

export default store;   