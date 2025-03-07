import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import loginImage from '../images/login-image.jpg';
import vkontakteIcon from '../svg/vkontakte.svg';
import telegramIcon from '../svg/telegram.svg';
import instagramIcon from '../svg/instagram.svg';
import facebookIcon from '../svg/facebook.svg';
import twitterIcon from '../svg/twitter.svg';
import closedEye from '../svg/closed-eye.svg';
import openEye from '../svg/open-eye.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: false, password: false });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      email: email.trim() === '' || !email.includes('@'),
      password: password.trim() === ''
    };

    setError(newError);

    if (!newError.email && !newError.password) {
      navigate('/home');
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    setError((prev) => ({ ...prev, [field]: false }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <div className='container'>
        <div className='login-box'>
          <div className='login-image-wrapper'>
            <img src={loginImage} alt='Вход' className='login-image' />
          </div>
          <div className='login-content'>
            <form onSubmit={handleSubmit}>
              <h2>Вход в личный кабинет</h2>
              <label>Электронная почта</label>
              <input
                type='text'
                name='email'
                placeholder='Электронная почта'
                value={email}
                onChange={handleInputChange(setEmail, 'email')}
                className={error.email ? 'error' : ''}
              />
              {error.email && <p className='error-text'>Введите электронную почту</p>}
              <label>Пароль</label>
              <div className='password-wrapper'>
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  name='password'
                  placeholder='Пароль'
                  value={password}
                  onChange={handleInputChange(setPassword, 'password')}
                  className={`password-input ${isPasswordVisible ? 'small-text' : 'large-text'} 
                  ${error.password ? 'error' : ''} ${!isPasswordVisible ? 'closed-eye' : ''}`}
                />
                <div className='eye-container' onClick={togglePasswordVisibility}>
                  <img
                    src={isPasswordVisible ? openEye : closedEye} alt='Переключить пароль' className='eye-icon'
                  />
                </div>
              </div>
              {error.password && <p className='error-text'>Введите пароль</p>}
              <button className='login-button' type='submit'>Войти </button>
              <p className='register-link'>
                <Link to='/register'>Нет аккаунта? Зарегистрироваться</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className='footer-content'>
          <p>© 2025. Все права защищены</p>
          <p>Техподдержка: +375 (17) 123-45-67</p>
          <div className='social-networks'>
            <a href='https://vk.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={vkontakteIcon} alt='vkontakte' />
            </a>
            <a href='https://web.telegram.org' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={telegramIcon} alt='telegram' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={instagramIcon} alt='instagram' />
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={facebookIcon} alt='facebook' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={twitterIcon} alt='twitter' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;
