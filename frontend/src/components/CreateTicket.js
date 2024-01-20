import React, { useState } from 'react';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    topic: '',
    severity: 'Low', // Default value for severity
    type: '',
    status: 'Open', // Default value for status
    resolvedOn: '' // You may use a date picker library for selecting the date
  });
  const [creationStatus, setCreationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API endpoint
      const response = await fetch('http://localhost:8000/api/support-tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Support ticket creation successful');
        setCreationStatus('Support ticket creation successful');
        // Clear the form
        setFormData({
          topic: '',
          severity: 'Low',
          type: '',
          status: 'Open',
          resolvedOn: ''
        });
      } else {
        // Handle error
        console.error('Support ticket creation failed:', await response.json());
        setCreationStatus('Support ticket creation failed');
      }
    } catch (error) {
      console.error('Error during support ticket creation:', error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-opacity-50 bg-gray-300'>
      <div className='bg-white p-8 rounded-md shadow-md'>
        <form className='flex flex-col items-center'onSubmit={handleSubmit}>
          <input 
            type='text'
            name='topic'
            placeholder='Topic'
            value={formData.topic}
            onChange={handleChange}
            className='mb-4 p-2 rounded-md border' />
          <label htmlFor='severitySelect' className='mb-2 text-gray-700'>
            Severity:
          </label>
          <select 
            id='severitySelect'
            name='severity'
            value={formData.severity}
            onChange={handleChange} 
            className='p-2 rounded-md border'>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
          </select>
          <input 
            type='text'
            name='type'
            placeholder='Type'
            value={formData.type}
            onChange={handleChange}
            className='mb-4 p-2 rounded-md border' />
          <label htmlFor='statusSelect' className='mb-2 text-gray-700'>
            Status:
          </label>
          <select 
            id='statusSelect'
            name='status'
            value={formData.status}
            onChange={handleChange} 
            className='p-2 rounded-md border'>
              <option value='Open'>Open</option>
              <option value='In Progress'>In Progress</option>
              <option value='Resolved'>Resolved</option>
          </select>
          <label htmlFor='resolvedOnInput' className='mb-2 text-gray-700'>
            Resolved On:
          </label>
          <input 
            type='date'
            name='resolvedOn'
            value={formData.resolvedOn || ''}
            onChange={handleChange}
            className='mb-4 p-2 rounded-md border' />
          <button type='submit' className='mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
            Create Support Ticket
          </button>
        </form>
        {creationStatus && (
          <p className={`mt-4 text-center ${creationStatus === 'Support ticket creation successful' ? 'text-green-500' : 'text-red-500'}`}>
            {creationStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
