import React, { useEffect, useState } from 'react';
import TicketComponent from './TicketComponent';

const TicketContainer = () => {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/support-tickets');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonTickets = await response.json();
      setTicketData(jsonTickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <div className='bg-slate-200 min-h-screen p-8'>
      <h1 className='text-3xl font-bold text-gray-800 mb-8'>Support Tickets</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {ticketData.map((ticket) => (
          <li key={ticket.ticket_id}>
            <TicketComponent data={ticket} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketContainer;
