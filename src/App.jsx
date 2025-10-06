import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Contador from './components/Contador'

function App() {


  return (
    <Provider store ={store}>
      <div>
        <h1>REDUX toolkit</h1>
    <Contador/>
      </div>
    </Provider>
  )
}

export default App
