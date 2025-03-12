import '../styles/Knowledge.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import vpnImage from '../images/vpn.jpg';
import protectionImage from '../images/protection.jpg';
import memoImage from '../images/memo.jpg';
import productionImage from '../images/production.jpg';
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

const Knowledge = () => {

  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [isBellMenuOpen, setIsBellMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const avatarMenuRef = useRef(null);
  const bellMenuRef = useRef(null);

  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
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
          <main className='main-knowledge-content'>
            <div className='knowledge-search-bar'>
              <input className='knowledge-input' type='text' placeholder='Найти в списке...' />
              <select className='knowledge-select' onChange={handleCategoryChange}>
                <option value=''>Все направления</option>
                <option value='IT'>IT</option>
                <option value='Охрана труда'>Охрана труда</option>
                <option value='Персонал'>Персонал</option>
                <option value='Производство'>Производство</option>
              </select>
              <button className='knowledge-search-button'>Поиск</button>
            </div>
            <div className='knowledge-blocks'>
              {(selectedCategory === '' || selectedCategory === 'IT') && (
                <div className='knowledge-block'>
                  <div className='knowledge-unit'>
                    <img src={vpnImage} alt='Аватар' className='knowledge-image' />
                    <div className='knowledge-info'>
                      <h2>Как настроить VPN?</h2>
                      <div className='knowledge-text'>
                        <div className='knowledge-category'>
                          <h3>Категория:</h3>
                          <p>IT</p>
                        </div>
                        <div className='knowledge-date'>
                          <h3>Дата публикации:</h3>
                          <p>12.03.2025</p>
                        </div>
                        <div className='knowledge-description'>
                          <h3>Описание:</h3>
                          <p>Руководство для настройки VPN для удаленной работы</p>
                        </div>
                        <div className='knowledge-author'>
                          <h3>Автор:</h3>
                          <p>Не указано</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='knowledge-open-button'>Открыть</button>
                </div>
              )}
              {(selectedCategory === '' || selectedCategory === 'Охрана труда') && (
                <div className='knowledge-block'>
                  <div className='knowledge-unit'>
                    <img src={protectionImage} alt='Аватар' className='knowledge-image' />
                    <div className='knowledge-info'>
                      <h2>Охрана труда на рабочем месте</h2>
                      <div className='knowledge-text'>
                        <div className='knowledge-category'>
                          <h3>Категория:</h3>
                          <p>Охрана труда</p>
                        </div>
                        <div className='knowledge-date'>
                          <h3>Дата публикации:</h3>
                          <p>12.03.2025</p>
                        </div>
                        <div className='knowledge-description'>
                          <h3>Описание:</h3>
                          <p>Инструкции по технике безопасности, пожарной безопасности, экстренные процедуры</p>
                        </div>
                        <div className='knowledge-author'>
                          <h3>Автор:</h3>
                          <p>Не указано</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='knowledge-open-button'>Открыть</button>
                </div>
              )}

              {(selectedCategory === '' || selectedCategory === 'Персонал') && (
                <div className='knowledge-block'>
                  <div className='knowledge-unit'>
                    <img src={memoImage} alt='Аватар' className='knowledge-image' />
                    <div className='knowledge-info'>
                      <h2>Памятка новому сотруднику</h2>
                      <div className='knowledge-text'>
                        <div className='knowledge-category'>
                          <h3>Категория:</h3>
                          <p>Персонал</p>
                        </div>
                        <div className='knowledge-date'>
                          <h3>Дата публикации:</h3>
                          <p>12.03.2025</p>
                        </div>
                        <div className='knowledge-description'>
                          <h3>Описание:</h3>
                          <p>Адаптация сотрудников, обучение, политика отпусков, карьерное развитие</p>
                        </div>
                        <div className='knowledge-author'>
                          <h3>Автор:</h3>
                          <p>Не указано</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='knowledge-open-button'>Открыть</button>
                </div>
              )}

              {(selectedCategory === '' || selectedCategory === 'Производство') && (
                <div className='knowledge-block'>
                  <div className='knowledge-unit'>
                    <img src={productionImage} alt='Аватар' className='knowledge-image' />
                    <div className='knowledge-info'>
                      <h2>Производственные процессы</h2>
                      <div className='knowledge-text'>
                        <div className='knowledge-category'>
                          <h3>Категория:</h3>
                          <p>Производство</p>
                        </div>
                        <div className='knowledge-date'>
                          <h3>Дата публикации:</h3>
                          <p>12.03.2025</p>
                        </div>
                        <div className='knowledge-description'>
                          <h3>Описание:</h3>
                          <p>Ключевые аспекты фармацевтического производства, включая стандарты, контроль качества и валидацию процессов</p>
                        </div>
                        <div className='knowledge-author'>
                          <h3>Автор:</h3>
                          <p>Не указано</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='knowledge-open-button'>Открыть</button>
                </div>
              )}
            </div>
            {(selectedCategory === '') && (
              <div className='knowledge-pagination'>
                <a
                  href='#'
                  className={activePage === 1 ? 'active' : ''}
                  onClick={() => handlePageClick(1)}
                >
                  1
                </a>
                <a
                  href='#'
                  className={activePage === 2 ? 'active' : ''}
                  onClick={() => handlePageClick(2)}
                >
                  2
                </a>
                <a
                  href='#'
                  className={activePage === 3 ? 'active' : ''}
                  onClick={() => handlePageClick(3)}
                >
                  3
                </a>
              </div>
            )}
          </main>
        </div>
      </div>
      <footer className='knowledge-footer'>
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

export default Knowledge;
