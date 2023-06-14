import React, { useState } from 'react';

const BASE_URL = 'http://localhost:8000/api';

const RegisterPage = ({ onCancel }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const createUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('User creation failed');
    }

    const data = await response.json();
    return data.user;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = await createUser({ firstName, lastName, password, email });
      console.log('User created:', newUser);
      // Perform any necessary actions after successful user creation
      setFirstName('');
      setLastName('');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  };

  const handleCancel = () => {
    onCancel(); // Call the onCancel function from the parent component
    console.log('Registration cancelled');
    // Additional code for cancellation, e.g., redirect to another page
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Signup</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
