import React, { useState } from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom';
import registerImage from '../images/register-image.jpg';
import facebookIcon from '../svg/facebook.svg';
import instagramIcon from '../svg/instagram.svg';
import telegramIcon from '../svg/telegram.svg';
import twitterIcon from '../svg/twitter.svg';
import vkontakteIcon from '../svg/vkontakte.svg';
import closedEye from '../svg/closed-eye.svg';
import openEye from '../svg/open-eye.svg';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    department: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    name: false,
    surname: false,
    department: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: false });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      name: form.name.trim() === '',
      surname: form.surname.trim() === '',
      department: form.department.trim() === '',
      email: form.email.trim() === '' || !form.email.includes('@'),
      password: form.password.trim() === '',
      confirmPassword: form.confirmPassword.trim() === '' || form.confirmPassword !== form.password,
    };

    setError(newError);
  };

  return (
    <>
      <div className='container'>
        <div className='register-box'>
          <div className='register-image-wrapper'>
            <img src={registerImage} alt='Регистрация' className='register-image' />
          </div>
          <div className='register-content'>
            <form onSubmit={handleSubmit}>
              <h2>Регистрация сотрудника</h2>
              <div className='input-fields'>
                <div className='name'>
                  <label>Имя</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Имя'
                    value={form.name}
                    onChange={handleInputChange}
                    className={error.name ? 'error' : ''}
                  />
                  {error.name && <p className='error-text'>Введите имя</p>}
                </div>
                <div className='surname'>
                  <label>Фамилия</label>
                  <input
                    type='text'
                    name='surname'
                    placeholder='Фамилия'
                    value={form.surname}
                    onChange={handleInputChange}
                    className={error.surname ? 'error' : ''}
                  />
                  {error.surname && <p className='error-text'>Введите фамилию</p>}
                </div>
                <div className='department'>
                  <label>Подразделение</label>
                  <select
                    name='department'
                    value={form.department}
                    onChange={handleInputChange}
                    className={error.department ? 'error' : ''}
                  >
                    <option value=''>Не выбрано</option>
                    <option value='IT'>IT</option>
                    <option value='HR'>HR</option>
                    <option value='Marketing'>Маркетинг</option>
                    <option value='Finance'>Финансы</option>
                  </select>
                  {error.department && <p className='error-text'>Выберите подразделение</p>}
                </div>
                <div className='email'>
                  <label>Электронная почта</label>
                  <input
                    type='text'
                    name='email'
                    placeholder='Электронная почта'
                    value={form.email}
                    onChange={handleInputChange}
                    className={error.email ? 'error' : ''}
                  />
                  {error.email && <p className='error-text'>Введите электронную почту</p>}
                </div>
                <div className='first-password'>
                  <label>Пароль</label>
                  <div className='password-wrapper'>
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      name='password'
                      placeholder='Пароль'
                      value={form.password}
                      onChange={handleInputChange}
                      className={`password-input ${isPasswordVisible ? 'small-text' : 'large-text'} 
                      ${error.password ? 'error' : ''} ${!isPasswordVisible ? 'closed-eye' : ''}`}
                    />
                    <div className='eye-container' onClick={togglePasswordVisibility}>
                      <img src={isPasswordVisible ? openEye : closedEye} alt='Показать пароль' className='eye-icon' />
                    </div>
                  </div>
                  {error.password && <p className='error-text'>Введите пароль</p>}
                </div>
                <div className='second-password'>
                  <label>Повторите пароль</label>
                  <div className='password-wrapper'>
                    <input
                      type={isConfirmPasswordVisible ? 'text' : 'password'}
                      name='confirmPassword'
                      placeholder='Пароль'
                      value={form.confirmPassword}
                      onChange={handleInputChange}
                      className={`password-input ${isConfirmPasswordVisible ? 'small-text' : 'large-text'} 
                      ${error.confirmPassword ? 'error' : ''} ${!isConfirmPasswordVisible ? 'closed-eye' : ''}`}
                    />
                    <div className='eye-container' onClick={toggleConfirmPasswordVisibility}>
                      <img src={isConfirmPasswordVisible ? openEye : closedEye} alt='Показать пароль' className='eye-icon' />
                    </div>
                  </div>
                  {error.confirmPassword && <p className='error-text'>Пароли не совпадают</p>}
                </div>
              </div>
              <button className='register-button' type='submit'>Зарегистрироваться</button>
              <p className='login-link'>
                <Link to='/'>Уже есть аккаунт? Войти</Link>
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
              <img src={vkontakteIcon} alt='Vkontakte' />
            </a>
            <a href='https://web.telegram.org' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={telegramIcon} alt='Telegram' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={instagramIcon} alt='Instagram' />
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={facebookIcon} alt='Facebook' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
              <img src={twitterIcon} alt='Twitter' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Register;
