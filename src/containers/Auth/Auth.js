import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import Input from './Input';
import './Auth.scss';

import { GoogleLogin } from 'react-google-login';
import { register, login } from '../../actions/authActions';
import { GOOGLE_AUTH } from '../../constants/actionTypes';

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
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('register')) setIsSignup(true);
    else setIsSignup(false);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(register(formData, history));
    } else {
      dispatch(login(formData, history));
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

    try {
      dispatch({ type: GOOGLE_AUTH, data: { result, token } });

      history.push('/');
    } catch (err) {
      console.log(err);
    }
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
