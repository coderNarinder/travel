import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginFun } from '../../../service';
import "./login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setErrorMessage] = useState({
    has: false,
    type: 'warning',
    message: ''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    loginFun(data).then((res) => {
      if (res.status === 1) {
        setErrorMessage({
          has: true,
          type: 'success',
          message: 'Login successfully, redirecting to dashboard....'
        });
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.href = '/cpanel';
      } else {
        setErrorMessage({
          has: true,
          type: 'danger',
          message: res.message
        });
      }
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-full-page-content">
        <div className="loginBody auth-content my-auto">
          <div className="loginHdr text-center">
            {/* <div className="loginLogo text-center">
              <Link to="/" className="d-block auth-logo"></Link>
            </div> */}
            <h3>Login</h3>
            <p>
              Please enter your details below to Sign In
            </p>
          </div>
          {error.has && (
            <div className={`alert alert-${error.type}`} role="alert">
              {error.message}
            </div>
          )}
          <div className="loginForm formStyle">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInputIcon mb-4">
                <label htmlFor="email">Email</label>
                <div className="form-element">
                  <i className="fa fa-user"></i>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address'
                      }
                    })}
                    placeholder="Enter Your Email Address"
                  />
                </div>
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>
              <div className="formInputIcon mb-3">
                <label htmlFor="password">Password</label>
                <div className="form-element password-container">
                  <i className="fa fa-key"></i>
                  <input
                    id="password"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="******"
                    {...register('password', {
                      required: 'Password is required'
                    })}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    <i className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
                {errors.password && <p className="form-error">{errors.password.message}</p>}
              </div>
              <div className="formBasicCheckbox">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div className="formBtn text-center mt-3">
                <button
                  className="btn btn-primary waves-effect waves-light"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
