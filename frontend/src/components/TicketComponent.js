import React from 'react';

const TicketComponent = ({ data }) => {
  return (
    <div className='max-w-sm bg-white shadow-lg rounded-md overflow-hidden m-4 p-3 transition-transform transform hover:scale-105'>
      <h1 className='text-xl font-semibold mb-2'>{data.topic}</h1>
      <div className='flex justify-between mb-2'>
        <span className='text-gray-700'>{data.type}</span>
        <span className={`bg-${getColorForSeverity(data.severity)} text-white py-1 px-2 rounded-md`}>
          {data.severity}
        </span>
      </div>
      <div className='flex justify-between'>
        <span className={`text-${getTextColorForStatus(data.status)} font-semibold`}>{data.status}</span>
      </div>
    </div>
  );
};

export default TicketComponent;

function getColorForSeverity(severity) {
  // Customize this function based on your severity levels
  switch (severity) {
    case 'Low':
      return 'green-500';
    case 'Medium':
      return 'yellow-500';
    case 'High':
      return 'orange-500';
    case 'Critical':
      return 'red-500';
    default:
      return 'gray-500';
  }
}

function getTextColorForStatus(status) {
  // Customize this function based on your status levels
  return status === 'Resolved' ? 'green-500' : 'red-500';
}
