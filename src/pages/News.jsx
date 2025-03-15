import '../styles/News.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import birthdayImage from '../images/birthday.jpg';
import medicineImage from '../images/medicine.jpg';
import sportImage from '../images/sport.jpg';
import trainingImage from '../images/training.jpg';
import timeImage from '../images/time.jpg';
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

const News = () => {

  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [isBellMenuOpen, setIsBellMenuOpen] = useState(false);

  const avatarMenuRef = useRef(null);
  const bellMenuRef = useRef(null);

  const [sortOrder, setSortOrder] = useState('new');

  const compareDates = (date1, date2) => {
    return sortOrder === 'new' ? new Date(date2) - new Date(date1) : new Date(date1) - new Date(date2);
  };

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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
      <div className='knowledge-container'>
        <div className='knowledge-content'>
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
          <main className='main-news-content'>
            <div className="news-checkbox">
              <div className='checkbox-block'>
                <div className='checkbox-field'>
                  <div className={`checkbox ${sortOrder === 'new' ? 'checked' : ''}`} onClick={() => setSortOrder('new')}></div>
                  <p onClick={() => setSortOrder('new')}>Последние</p>
                </div>
                <div className='checkbox-field'>
                  <div className={`checkbox ${sortOrder === 'old' ? 'checked' : ''}`} onClick={() => setSortOrder('old')}></div>
                  <p onClick={() => setSortOrder('old')}>Ранние</p>
                </div>
              </div>
            </div>
            <div className='news-blocks'>
              {[
                <div className='news-block' key="1">
                  <div className='news-text'>
                    <img src={birthdayImage} alt='Новость 1' className='news-image' />
                    <p data-date="2025-03-14">14 марта</p>
                    <a href='#'>Наша компания отмечает очередной день рождения! Подводим итоги, вспоминаем ключевые моменты и делимся планами на будущее</a>
                  </div>
                </div>,
                <div className='news-block' key="2">
                  <div className='news-text'>
                    <img src={medicineImage} alt='Новость 2' className='news-image' />
                    <p data-date="2025-03-10">10 марта</p>
                    <a href='#'>Представляем новый препарат, который помогает укрепить иммунитет и защитить организм от вирусов и инфекций</a>
                  </div>
                </div>,
                <div className='news-block' key="3">
                  <div className='news-text'>
                    <img src={sportImage} alt='Новость 3' className='news-image' />
                    <p data-date="2025-03-02">2 марта</p>
                    <a href='#'>Физическая активность помогает не только поддерживать здоровье, но и снижать стресс</a>
                  </div>
                </div>,
                <div className='news-block' key="4">
                  <div className='news-text'>
                    <img src={trainingImage} alt='Новость 4' className='news-image' />
                    <p data-date="2025-02-26">26 февраля</p>
                    <a href='#'>Компании все чаще предлагают обучение, которое помогает сотрудникам расти и осваивать новые навыки</a>
                  </div>
                </div>,
                <div className='news-block' key="5">
                  <div className='news-text'>
                    <img src={timeImage} alt='Новость 5' className='news-image' />
                    <p data-date="2025-02-18">18 февраля</p>
                    <a href='#'>Эффективное планирование, расстановка приоритетов и правильное распределение энергии – ключи к тому, чтобы успевать больше</a>
                  </div>
                </div>
              ]
                .sort((a, b) => {
                  const dateA = a.props.children.props.children[1].props['data-date']; // Получаем атрибут data-date у <p>
                  const dateB = b.props.children.props.children[1].props['data-date'];
                  return compareDates(dateA, dateB);
                })}
            </div>
          </main>
        </div>
      </div>
      <footer className='news-footer'>
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

export default News;
