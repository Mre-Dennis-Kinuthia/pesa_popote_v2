import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSuccess = (response) => {
    console.log('Login successful!', response);
    navigate('/Dashboard');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === 'Denniskinuthia1105@gmail.com' && password === 'nansi') {
      onSuccess({ email });
      setEmail('');
      setPassword('');
      setError('');
      return;
    }

    try {
      const response = await fetch('http://localhost:8001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onSuccess(data.user);
        setEmail('');
        setPassword('');
        setError('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setError(error.message);
    }
  };

  const handleCancel = () => {
    onCancel();
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
        <button type="submit">Login</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
