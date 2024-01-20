import React from 'react'
import TicketContainer from './TicketContainer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='flex justify-center bg-green-300 p-4 mb-8'>
        <div className='bg-slate-200 m-4 p-2 shadow-md'>
            <h2 className='text-4xl mb-2  '>Create your Ticket</h2>
            <p className='text-sm p-[-2px]'>Your issue our responsibility<br/>Just raise your concern</p>
            <Link to='/create-ticket'><button className='bg-green-500 text-slate-200 rounded-sm p-1 m-1 mt-3 cursor-pointer'>Ticket Raise</button></Link>
        </div>
        <div className='bg-slate-200 m-4 p-2 ml-2 shadow-md'>
            <h2 className='text-4xl mb-2  '>Register as an Agent</h2>
            <p className='text-sm p-[-2px]'>Take a lead<br/>Be a person with difference</p>
            <Link to='/register-agent'><button className='bg-green-500 text-slate-200 rounded-sm  p-1 m-1 mt-3 cursor-pointer'>Be an Agent</button></Link>
        </div>
        <div>

        </div>
      </div>
      <TicketContainer/>
    </div>
  )
}

export default Home
