import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    contador: 0
}

export const contadorSlice = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        incrementar: (state) => {
            state.contador += 1
        },
        incrementar5: (state, action) => {
            state.contador += action.payload
        },
        decrementar: (state) => {
            state.contador -= 1 
        },
        decrementar5: (state, action) => {
            state.contador -= action.payload
        },
        reset: (state) => {
            state.contador = 0
        }
    }
})

export const {incrementar, incrementar5, decrementar, decrementar5, reset} = contadorSlice.actions

export default contadorSlice.reducer