
  
// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import Cbg from './../../assets/ContactBG.jpeg';

// const Contacts = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('UDAY@2212', 'template_aixnf9a', e.target, 'N3D7Vs_UifVUlsCQ_')
//       .then((result) => {
//         console.log(result.text);
//         setStatus('Message sent successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           message: '',
//         });
//       }, (error) => {
//         console.error('Error:', error.text);
//         setStatus('Failed to send message. Please check the console for details.');
//       });
//   };

//   return (
//     <div
//       className='w-full h-screen flex justify-center items-center'
//       style={{
//         backgroundImage: `url(${Cbg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Glass effect form container */}
//       <div
//         className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md"
//         style={{
//           backdropFilter: 'blur(10px)', // Apply glass effect (blur)
//           backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
//           border: '1px solid rgba(255, 255, 255, 0.3)', // Soft border for glass effect
//         }}
//       >
//         <form
//           onSubmit={handleSubmit}
//           className='p-6 rounded-lg'
//         >
//           <h2 className='text-2xl font-bold mb-4 text-white'>Contact Us</h2>
//           <div className='mb-4'>
//             <label htmlFor='name' className='block text-white'>Name</label>
//             <input
//               type='text'
//               id='name'
//               name='name'
//               value={formData.name}
//               onChange={handleChange}
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
//               required
//             />
//           </div>
//           <div className='mb-4'>
//             <label htmlFor='email' className='block text-white'>Email</label>
//             <input
//               type='email'
//               id='email'
//               name='email'
//               value={formData.email}
//               onChange={handleChange}
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
//               required
//             />
//           </div>
//           <div className='mb-4'>
//             <label htmlFor='message' className='block text-white'>Message</label>
//             <textarea
//               id='message'
//               name='message'
//               value={formData.message}
//               onChange={handleChange}
//               rows='4'
//               className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
//               required
//             />
//           </div>
//           <button
//             type='submit'
//             className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
//           >
//             Send
//           </button>
//           {status && <p className='mt-4 text-white'>{status}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contacts;
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Cbg from './../../assets/ContactBG.jpeg';
import { useState } from 'react';

const Contacts = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState('');

  const onSubmit = (data, e) => {
    e.preventDefault();
    emailjs.sendForm('UDAY@2212', 'template_aixnf9a', e.target, 'N3D7Vs_UifVUlsCQ_')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        reset(); // Reset form after successful submission
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
          onSubmit={handleSubmit(onSubmit)}
          className='p-6 rounded-lg'
        >
          <h2 className='text-2xl font-bold mb-4 text-white'>Contact Us</h2>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-white'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              {...register('name', { required: 'Name is required' })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
            />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-white'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address'
                }
              })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-white'>Message</label>
            <textarea
              id='message'
              name='message'
              {...register('message', { required: 'Message is required' })}
              rows='4'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white bg-opacity-50'
            />
            {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
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
