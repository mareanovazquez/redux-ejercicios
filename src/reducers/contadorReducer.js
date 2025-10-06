import { act } from "react"
import { DECREMENTAR, DECREMENTAR_5, INCREMENTAR, INCREMENTAR_5, RESET } from "../types"

const initialState = {
    contador: 0
}

export default function contadorReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENTAR:
            return {
                ...state,
                contador: state.contador + 1
            }
        case INCREMENTAR_5:
            return {
                ...state,
                contador: state.contador + action.payload
            }

        case DECREMENTAR: {
            return {
                ...state,
                contador: state.contador - 1
            }
        }

        case DECREMENTAR_5: {
            return {
                ...state,
                contador: state.contador - action.payload
            }
        }
        case RESET : {
            return {
                ...state,
                contador: 0
            }
        }

        default:
            return state

    }
}