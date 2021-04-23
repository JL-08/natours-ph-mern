import React, { useState } from 'react';
import Input from './Input';
import './Auth.scss';

import { GoogleLogin } from 'react-google-login';
import Icon from './icon';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  const googleSuccess = () => {};
  const googleFailure = () => {};

  return (
    <div className='auth'>
      <div className='container'>
        <h3>{isSignup ? 'REGISTER AN ACCOUNT' : 'LOG INTO YOUR ACCOUNT'}</h3>
        <form>
          <div id='google-btn'>
            <GoogleLogin
              clientId='31532041823-4duasdh60p2agc06svikhvn8e2ebu154.apps.googleusercontent.com'
              buttonText='Sign in with Google'
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy='single_host_origin'
            />
          </div>
          {isSignup ? (
            <div className='name-input'>
              <Input
                name='fname'
                label='First Name'
                handleChange={handleChange}
                type='text'
                placeholder='John'
              />
              <Input
                name='lname'
                label='Last Name'
                handleChange={handleChange}
                type='text'
                placeholder='Smith'
              />
            </div>
          ) : null}
          <Input
            name='email'
            label='Email Address'
            handleChange={handleChange}
            type='email'
            placeholder='you@example.com'
          />
          <Input
            name='password'
            label='Password'
            handleChange={handleChange}
            type='password'
            placeholder='●●●●●●●●'
          />

          {isSignup ? (
            <Input
              name='cpassword'
              label='Confirm Password'
              handleChange={handleChange}
              type='password'
              placeholder='●●●●●●●●'
            />
          ) : null}
          <button>{isSignup ? 'REGISTER' : 'LOGIN'}</button>
        </form>
        <button id='switch-btn' onClick={switchMode}>
          {isSignup
            ? 'Already have an account? Login'
            : "Don't have an account? Join Now!"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
