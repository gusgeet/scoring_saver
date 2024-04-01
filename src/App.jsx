import Welcome from './components/bienvenida/inicio'

import './App.css'
import { useEffect } from 'react'
import { useScoreStore } from './store/scoreStore'

function App() {
  return (
    <>
      <Welcome/>
    </>
  )
}

export default App
