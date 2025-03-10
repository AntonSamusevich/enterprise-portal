import '../styles/Contacts.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
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
                      <Link to="/profile" className="avatar-text">
                        <div className="menu-icon-wrapper">
                          <img src={profilelIcon} alt="Профиль" />
                        </div>
                        <p>Профиль</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings" className="avatar-text">
                        <div className="menu-icon-wrapper">
                          <img src={settingsIcon} alt="Настройки" />
                        </div>
                        <p>Настройки</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="avatar-text">
                        <div className="menu-icon-wrapper">
                          <img src={logoutIcon} alt="Выйти" />
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
      <div className='contacts-container'>
        <div className='contacts-content'>
          <aside className='left-panel'>
            <ul className='menu-list'>
              <li className='menu-item'>
                <Link to="/profile" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={profilelIcon} alt="Профиль" />
                  </div>
                  <p>Профиль</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/calendar" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={calendarIcon} alt="Календарь" />
                  </div>
                  <p>Календарь</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/messages" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={messagesIcon} alt="Сообщения" />
                  </div>
                  <p>Сообщения</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/calls" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={callsIcon} alt="Звонки" />
                  </div>
                  <p>Звонки</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/groups" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={groupsIcon} alt="Группы" />
                  </div>
                  <p>Группы</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/email" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={emailIcon} alt="Почта" />
                  </div>
                  <p>Почта</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/schedule" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={scheduleIcon} alt="График" />
                  </div>
                  <p>График</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/tasks" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={tasksIcon} alt="Задачи" />
                  </div>
                  <p>Задачи</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/events" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={eventsIcon} alt="События" />
                  </div>
                  <p>События</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/gallery" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={galleryIcon} alt="Фотогалерея" />
                  </div>
                  <p>Фотогалерея</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/documents" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={documentsIcon} alt="Документы" />
                  </div>
                  <p>Документы</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/requests" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={requestsIcon} alt="Заявки" />
                  </div>
                  <p>Заявки</p>
                </Link>
              </li>
            </ul>
            <ul className='support-list'>
              <li className="menu-item">
                <Link to="/services" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={servicesIcon} alt="Сервисы" />
                  </div>
                  <p>Сервисы</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/support" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={supportIcon} alt="Поддержка" />
                  </div>
                  <p>Поддержка</p>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/settings" className="menu-link">
                  <div className="menu-icon-wrapper">
                    <img src={settingsIcon} alt="Настройки" />
                  </div>
                  <p>Настройки</p>
                </Link>
              </li>
            </ul>
          </aside>
          <main className='main-contacts-content'>
            <div className="contacts-block">
              <h2>Отдел ИТиС</h2>
              <p>Телефон: <a href="tel: 1010">1010</a></p>
              <p>Начальник отдела: <a href="tel: 1011">1011</a></p>
              <p>Почта: <a href="mailto:it@ft.by">it@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Отдел кадров</h2>
              <p>Телефон: <a href="tel: 1012">1012</a></p>
              <p>Начальник отдела: <a href="tel: 1013">1013</a></p>
              <p>Почта: <a href="mailto:hr@ft.by">hr@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Бухгалтерия</h2>
              <p>Телефон: <a href="tel: 1014">1014</a></p>
              <p>Начальник отдела: <a href="tel: 1015">1015</a></p>
              <p>Почта: <a href="mailto:accounting@ft.by">accounting@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Маркетинговый отдел</h2>
              <p>Телефон: <a href="tel: 1016">1016</a></p>
              <p>Начальник отдела: <a href="tel: 1017">1017</a></p>
              <p>Почта: <a href="mailto:marketing@ft.by">marketing@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Коммерческий отдел</h2>
              <p>Телефон: <a href="tel: 1018">1018</a></p>
              <p>Начальник отдела: <a href="tel: 1019">1019</a></p>
              <p>Почта: <a href="mailto:commerc@ft.by">commerc@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Отдел продаж</h2>
              <p>Телефон: <a href="tel: 1020">1020</a></p>
              <p>Начальник отдела: <a href="tel: 1021">1021</a></p>
              <p>Почта: <a href="mailto:sales@ft.by">sales@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Юридический отдел</h2>
              <p>Телефон: <a href="tel: 1022">1022</a></p>
              <p>Начальник отдела: <a href="tel: 1023">1023</a></p>
              <p>Почта: <a href="mailto:legal@ft.by">legal@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Отдел логистики</h2>
              <p>Телефон: <a href="tel: 1024">1024</a></p>
              <p>Начальник отдела: <a href="tel: 1025">1025</a></p>
              <p>Почта: <a href="mailto:logistics@ft.by">logistics@ft.by</a></p>
            </div>
            <div className="contacts-block">
              <h2>Отдел управления качеством</h2>
              <p>Телефон: <a href="tel: 1026">1026</a></p>
              <p>Начальник отдела: <a href="tel: 1027">1027</a></p>
              <p>Почта: <a href="mailto:quality@ft.by">quality@ft.by</a></p>
            </div>
          </main>
        </div>
      </div>
      <footer className='contacts-footer'>
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
