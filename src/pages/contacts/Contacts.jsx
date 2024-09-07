

//   import React, { useState } from 'react';
//   import emailjs from 'emailjs-com';
// import Cbg from './../../assets/ContactBG.jpeg'
  
//   const Contacts = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       message: '',
//     });
//     const [status, setStatus] = useState('');
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       emailjs.sendForm('UDAY@2212', 'template_aixnf9a', e.target, 'N3D7Vs_UifVUlsCQ_')
//         .then((result) => {
//           console.log(result.text);
//           setStatus('Message sent successfully!');
//           setFormData({
//             name: '',
//             email: '',
//             message: '',
//           });
//         }, (error) => {
//           console.error('Error:', error.text);
//           setStatus('Failed to send message. Please check the console for details.');
//         });
//     };
  
//     return (
//       <div className='bg-divColor w-full h-screen flex justify-center items-center '>
//         <form
//           onSubmit={handleSubmit}
//           className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'
//         >
//           <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
//           <div className='mb-4'>
//             <label htmlFor='name' className='block text-gray-700'>Name</label>
//             <input
//               type='text'
//               id='name'
//               name='name'
//               value={formData.name}
//               onChange={handleChange}
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md'
//               required
//             />
//           </div>
//           <div className='mb-4'>
//             <label htmlFor='email' className='block text-gray-700'>Email</label>
//             <input
//               type='email'
//               id='email'
//               name='email'
//               value={formData.email}
//               onChange={handleChange}
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md'
//               required
//             />
//           </div>
//           <div className='mb-4'>
//             <label htmlFor='message' className='block text-gray-700'>Message</label>
//             <textarea
//               id='message'
//               name='message'
//               value={formData.message}
//               onChange={handleChange}
//               rows='4'
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md'
//               required
//             />
//           </div>
//           <button
//             type='submit'
//             className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
//           >
//             Send
//           </button>
//           {status && <p className='mt-4 text-gray-700'>{status}</p>}
//         </form>
//       </div>
//     );
//   };
  
//   export default Contacts;
  
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Cbg from './../../assets/ContactBG.jpeg';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('UDAY@2212', 'template_aixnf9a', e.target, 'N3D7Vs_UifVUlsCQ_')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.error('Error:', error.text);
        setStatus('Failed to send message. Please check the console for details.');
      });
  };

  return (
    <div
      className='w-full h-screen flex justify-center items-center'
      style={{
        backgroundImage: `url(${Cbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Glass effect form container */}
      <div
        className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md"
        style={{
          backdropFilter: 'blur(10px)', // Apply glass effect (blur)
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
          border: '1px solid rgba(255, 255, 255, 0.3)', // Soft border for glass effect
        }}
      >
        <form
          onSubmit={handleSubmit}
          className='p-6 rounded-lg'
        >
          <h2 className='text-2xl font-bold mb-4 text-white'>Contact Us</h2>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-white'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-white'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-white'>Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='4'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            Send
          </button>
          {status && <p className='mt-4 text-white'>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contacts;
