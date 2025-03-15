import '../styles/Home.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import Calendar from '../components/Calendar';
import Chart from '../components/Chart';
import sportImage from '../images/sport.jpg';
import trainingImage from '../images/training.jpg';
import timeImage from '../images/time.jpg';
import mainImage from '../images/main-image.png';
import avatarImage from '../images/avatar.png';
import bellIcon from '../svg/bell.svg';
import logoIcon from '../svg/logo-ft.svg';
import profilelIcon from '../svg/profile.svg';
import calendarIcon from '../svg/calendar.svg';
import messagesIcon from '../svg/messages.svg';
import callsIcon from '../svg/calls.svg';
import groupsIcon from '../svg/groups.svg';
import emailIcon from '../svg/email.svg';
import scheduleIcon from '../svg/schedule.svg';
import tasksIcon from '../svg/tasks.svg';
import eventsIcon from '../svg/events.svg';
import galleryIcon from '../svg/gallery.svg';
import documentsIcon from '../svg/documents.svg';
import requestsIcon from '../svg/requests.svg';
import servicesIcon from '../svg/services.svg';
import supportIcon from '../svg/support.svg';
import settingsIcon from '../svg/settings.svg';
import logoutIcon from '../svg/logout.svg';
import vkontakteIcon from '../svg/vkontakte.svg';
import telegramIcon from '../svg/telegram.svg';
import instagramIcon from '../svg/instagram.svg';
import facebookIcon from '../svg/facebook.svg';
import twitterIcon from '../svg/twitter.svg';

const Home = () => {

  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [isBellMenuOpen, setIsBellMenuOpen] = useState(false);

  const avatarMenuRef = useRef(null);
  const bellMenuRef = useRef(null);

  const toggleAvatarMenu = () => {
    if (isBellMenuOpen) {
      setIsBellMenuOpen(false);
    }
    setIsAvatarMenuOpen((prev) => !prev);
  };

  const toggleBellMenu = () => {
    if (isAvatarMenuOpen) {
      setIsAvatarMenuOpen(false);
    }
    setIsBellMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (avatarMenuRef.current && !avatarMenuRef.current.contains(event.target)) &&
        (bellMenuRef.current && !bellMenuRef.current.contains(event.target))
      ) {
        setIsAvatarMenuOpen(false);
        setIsBellMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className='header'>
        <div className='header-content'>
          <Link to='/home' className='logo-wrapper'>
            <img src={logoIcon} alt='Лого' className='logo' />
          </Link>
          <nav className='nav'>
            <ul>
              <li><Link to='/home'>Главная</Link></li>
              <li><Link to='/news'>Новости</Link></li>
              <li><Link to='/employees'>Сотрудники</Link></li>
              <li><Link to='/knowledge'>База знаний</Link></li>
              <li><Link to='/education'>Обучение</Link></li>
              <li><Link to='/contacts'>Контакты</Link></li>
            </ul>
          </nav>
          <div className='user-panel'>
            <div className='bell-wrapper' onClick={toggleBellMenu} ref={bellMenuRef}>
              <img src={bellIcon} alt='Уведомления' className='bell-icon' />
              {isBellMenuOpen && (
                <div className='bell-menu'>
                  <ul>
                    <li>
                      <p>Новых уведомлений нет</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className='avatar-wrapper' onClick={toggleAvatarMenu} ref={avatarMenuRef}>
              <img src={avatarImage} alt='Аватар' className='avatar' />
              {isAvatarMenuOpen && (
                <div className='avatar-menu'>
                  <ul>
                    <li>
                      <Link to='/profile' className='avatar-text'>
                        <div className='menu-icon-wrapper'>
                          <img src={profilelIcon} alt='Профиль' />
                        </div>
                        <p>Профиль</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/settings' className='avatar-text'>
                        <div className='menu-icon-wrapper'>
                          <img src={settingsIcon} alt='Настройки' />
                        </div>
                        <p>Настройки</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='avatar-text'>
                        <div className='menu-icon-wrapper'>
                          <img src={logoutIcon} alt='Выйти' />
                        </div>
                        <p>Выйти</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className='home-container'>
        <div className='home-content'>
          <aside className='left-panel'>
            <ul className='menu-list'>
              <li className='menu-item'>
                <Link to='/profile' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={profilelIcon} alt='Профиль' />
                  </div>
                  <p>Профиль</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/calendar' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={calendarIcon} alt='Календарь' />
                  </div>
                  <p>Календарь</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/messages' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={messagesIcon} alt='Сообщения' />
                  </div>
                  <p>Сообщения</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/calls' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={callsIcon} alt='Звонки' />
                  </div>
                  <p>Звонки</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/groups' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={groupsIcon} alt='Группы' />
                  </div>
                  <p>Группы</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/email' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={emailIcon} alt='Почта' />
                  </div>
                  <p>Почта</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/schedule' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={scheduleIcon} alt='График' />
                  </div>
                  <p>График</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/tasks' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={tasksIcon} alt='Задачи' />
                  </div>
                  <p>Задачи</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/events' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={eventsIcon} alt='События' />
                  </div>
                  <p>События</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/gallery' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={galleryIcon} alt='Фотогалерея' />
                  </div>
                  <p>Фотогалерея</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/documents' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={documentsIcon} alt='Документы' />
                  </div>
                  <p>Документы</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/requests' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={requestsIcon} alt='Заявки' />
                  </div>
                  <p>Заявки</p>
                </Link>
              </li>
            </ul>
            <ul className='support-list'>
              <li className='menu-item'>
                <Link to='/services' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={servicesIcon} alt='Сервисы' />
                  </div>
                  <p>Сервисы</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/support' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={supportIcon} alt='Поддержка' />
                  </div>
                  <p>Поддержка</p>
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/settings' className='menu-link'>
                  <div className='menu-icon-wrapper'>
                    <img src={settingsIcon} alt='Настройки' />
                  </div>
                  <p>Настройки</p>
                </Link>
              </li>
            </ul>
          </aside>
          <main className='main-home-content'>
            <div className='first-block'>
              <img src={mainImage} alt='Главное изображение' className='main-image' />
              <div className='overlay'>
                <div className='text-content'>
                  <div className='main-text'>
                    <h2>Поставить антивирус стало еще легче</h2>
                    <p>Новая разработка отдела информационных технологий и связи</p>
                  </div>
                  <button className='main-button'>Подробнее</button>
                </div>
              </div>
            </div>
            <div className='second-block'>
              <h2>Новости</h2>
              <div className='home-news'>
                <div className='news-item'>
                  <img src={sportImage} alt='Новость 1' />
                  <h3>Спорт – это время заботы о себе</h3>
                  <p>Физическая активность помогает не только поддерживать здоровье, но и снижать стресс</p>
                </div>
                <div className='news-item'>
                  <img src={trainingImage} alt='Новость 2' />
                  <h3>Бесплатное обучение для всех сотрудников</h3>
                  <p>Компании все чаще предлагают обучение, которое помогает сотрудникам расти и осваивать новые навыки</p>
                </div>
                <div className='news-item'>
                  <img src={timeImage} alt='Новость 3' />
                  <h3>Как успевать все и даже больше?</h3>
                  <p>Эффективное планирование, расстановка приоритетов и правильное распределение энергии – ключи к тому, чтобы успевать больше</p>
                </div>
              </div>
            </div>
          </main>
          <aside className='right-panel'>
            <div className='first-right-block'>
              <Calendar />
              <button className='first-open-button'>Открыть</button>
            </div>
            <div className='second-right-block'>
              <Chart />
              <button className='second-open-button'>Открыть</button>
            </div>
          </aside>
        </div>
      </div>
      <footer className='home-footer'>
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

export default Home;
