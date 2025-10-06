import { useDispatch, useSelector } from "react-redux"
import { decrementar, decrementar5, incrementar, incrementar5, reset } from "../reducers/contadorSlice"

/* import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorActions"; */


const Contador = () => {

    // acceder al estado global
 /*    const state = useSelector(state => state.contador) */
   const state = useSelector((state) => state.contador.contador)

   // disparar acciones 
    const dispatch = useDispatch()

    return (
        <div>
            <h2>CONTADOR CON REDUX</h2>
            <p>{state}</p>
            <nav>
               {/*  <button onClick={() => dispatch(sumar5())}>+5</button>
                <button onClick={() => dispatch(sumar())}>+1</button>
                <button onClick={() => dispatch(reset())}>0</button>
                <button onClick={() => dispatch(restar())}>-1</button>
                <button onClick={() => dispatch(restar5())}>-5</button> */}

                <button onClick={() => dispatch(incrementar5(5))}>+5</button>
                <button onClick={() => dispatch(incrementar())}>+1</button>
                <button onClick={() => dispatch(reset())}>0</button>
                <button onClick={() => dispatch(decrementar())}>-1</button>
                <button onClick={() => dispatch(decrementar5(5))}>-5</button>

            </nav>
        </div>
    )
}

export default Contador