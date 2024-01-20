import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import CreateTicket from './CreateTicket'
import RegisterAsAgent from './RegisterAsAgent'

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-ticket' element={<CreateTicket/>}/>
        <Route path='/register-agent' element={<RegisterAsAgent/>}/>
      </Routes>
    </div>
  )
}

export default Body
