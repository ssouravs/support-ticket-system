import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-slate-50 shadow-xl  p-4 md:p-6 lg:p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-xl md:text-2xl lg:text-3xl font-bold text-center'>
          <h2 className='text-3xl '>Support Ticket Entry System</h2>
        </span>
        <ul className='flex p-2 md:mr-5'>
        <li className='p-1 m-1'>
        <Link to='/' className='text-gray-700 hover:font-semibold'>
            Home
        </Link>
        </li>
        <li className='p-1 m-1'>
        <Link to='create-ticket' className='text-gray-700 hover:font-semibold'>
            Create Ticket
        </Link>
        </li>
        <li className='p-1 m-1'>
        <Link to='register-agent' className='text-gray-700 hover:font-semibold'>
            Register as Agent
        </Link>
        </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
