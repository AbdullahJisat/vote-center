import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Dashboard from './layout/Dashboard.tsx'
import Login from "./auth/Login.tsx";
import useToken from "./utils/useToken.tsx";


function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
