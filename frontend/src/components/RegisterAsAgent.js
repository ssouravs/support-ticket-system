import React,{useState} from 'react'

const RegisterAsAgent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
        active: true
      });
      const [registrationStatus, setRegistrationStatus] = useState(null);
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
          const response = await fetch('http://localhost:8000/api/support-agents', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Handle success
            console.log('Registration successful');
            setRegistrationStatus('Registration successful');
            // Clear the form
            setFormData({
            name: '',
            email: '',
            description: '',
            active: true
            });
          } else {
            // Handle error
            console.error('Registration failed:', await response.json());
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };
  return (
    <div className='flex items-center justify-center h-screen bg-opacity-50 bg-gray-300'>
      <div className='bg-white p-8 rounded-md shadow-md'>
        <form className='flex flex-col items-center'onSubmit={handleSubmit}>
          <input 
            type='text'
            name='name'
            placeholder='Name of Agent'
            value={formData.name}
            onChange={handleChange}
            className='mb-4 p-2 rounded-md border' />
          <input 
            type='email'
            name='email'
            placeholder='Email of Agent'
            value={formData.email}
            onChange={handleChange}
            className='mb-4 p-2 rounded-md border' />
          <textarea
            name='description'
            placeholder='Description'
            value={formData.description}
            onChange={handleChange}
            className='mb-4 p-2 rounded-md border'>
            </textarea>
          <label htmlFor='dynamicSelect' className='mb-2 text-gray-700'>
            Select the status:
          </label>
          <select 
            id='dynamicSelect'
            name='selectedOption'
            value={formData.active}
            onChange={handleChange} 
            className='p-2 rounded-md border'>
              <option value={true}>
                Active
              </option>
              <option value={false}>
                Inactive
              </option>
          </select>
          <button type='submit' className='mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
            Register
          </button>
        </form>
        {registrationStatus && (
          <p className={`mt-4 text-center ${registrationStatus === 'Registration successful' ? 'text-green-500' : 'text-red-500'}`}>
            {registrationStatus}
          </p>
        )}
      </div>
    </div>
  )
}

export default RegisterAsAgent
