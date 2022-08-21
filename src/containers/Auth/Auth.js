import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import Input from './Input';
import './Auth.scss';

import { GoogleLogin } from 'react-google-login';
import { register, login } from '../../api/AuthAPI';
import { useAuth } from '../../hooks/useAuth';
import { authContext } from '../../context/auth-context';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { user } = useContext(authContext);
  const history = useHistory();
  const location = useLocation();
  const { callAuthAPI } = useAuth();

  useEffect(() => {
    if (location.pathname.includes('register')) setIsSignup(true);
    else setIsSignup(false);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      callAuthAPI(register, formData, history);
    } else {
      callAuthAPI(login, formData, history);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    // TODO: handle google login
  };

  const googleFailure = () => {
    console.log('Google sign-in unsuccessful. Please try again.');
  };

  return (
    <>
      {user ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ) : (
        <article className='auth'>
          <section className='container'>
            <h3>
              {isSignup ? 'REGISTER AN ACCOUNT' : 'LOG INTO YOUR ACCOUNT'}
            </h3>
            <form onSubmit={handleSubmit}>
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
                    name='firstName'
                    label='First Name'
                    handleChange={handleChange}
                    type='text'
                    placeholder='John'
                  />
                  <Input
                    name='lastName'
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
                  name='passwordConfirm'
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
          </section>
        </article>
      )}
    </>
  );
};

export default Auth;
