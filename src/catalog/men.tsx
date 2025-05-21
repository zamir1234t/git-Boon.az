import React, { useEffect, useState } from 'react';
import '../scss/men.scss';
import Register from '../components/Register';
import { Outlet, Link } from 'react-router-dom';
import MenCard from '../catalogCard/menCard';

function Men() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(prev => !prev);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu && !event.target.closest('.acti') && !event.target.closest('.icon-gam')) {
        setMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menu]);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <main>
        <div className="bac">
          <div className="header-overlay">
            <div className="phone">
              <div className="phone-2">
                <i className="fa-solid fa-bars icon-gam" onClick={toggleMenu}></i>
                <div className="summary">+994504930370</div>
                <p className="order-text">(для заказа)</p>
              </div>

              <div className={`acti ${menu ? 'show' : ''}`}>
                <ul>
                  <li>Акции</li>
                  <li>как купить</li>
                  <li>
                    <Link to='/company'>компания</Link>
                  </li>
                  <li>контакты</li>
                </ul>
              </div>

              <div className="right-section">
                <div className="paste-button">
                  <i className="fa-solid fa-globe"></i>
                  <button className="button">RU</button>
                  <div className="dropdown-content">
                    <a id="top" href="">RU</a>
                  </div>
                </div>
                <Register
                  isVisible={registerOpen}
                  onclose={closeRegister}
                  showPassword={showPassword}
                  togglePassword={togglePassword}
                  onOpen={openRegister}
                />
              </div>
            </div>
            <hr />
          </div>

          <div className="catalog-wrapper d-flex">
            <img
              src="https://boon.az/upload/CMax/a2b/a2bedd7f8644e940e362ccd9d774e3f8.png"
              alt="icon"
            />
            <div className="catalog-menu">
              <div className="catalog-title">
                <i className="fa-solid fa-cubes-stacked"></i> Каталог
              </div>
              <div className="catalog-dropdown">
                <div className="column">
                  <h4>Подобрать подарок</h4>
                  <ul>
                    <li><Link to='/catalog'>Для женщин</Link></li>
                    <li>Для мужчин</li>
                    <li><Link to='/children'>Для детей</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Развлечения</h4>
                  <ul>
                    <li><Link to='/games'>Настольные игры</Link></li>
                    <li><Link to='/puzzles'>Головоломки</Link></li>
                    <li><Link to='/Antistress'>Антистресс</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Электроника</h4>
                  <ul>
                    <li><Link to=''>Часы</Link></li>
                    <li><Link to=''>Аудио</Link></li>
                    <li><Link to=''>другая Электроника</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Ручная работа</h4>
                  <ul>
                    <li><Link to=''>куклы</Link></li>
                    <li><Link to=''>вязанные</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Разное</h4>
                  <ul>
                    <li><Link to=''>Открытки</Link></li>
                    <li><Link to=''>конверты</Link></li>
                    <li><Link to=''>копилки</Link></li>
                    <li><Link to=''>стикеры</Link></li>
                    <li><Link to=''>магниты</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Экспедиция</h4>
                  <ul>
                    <li><Link to=''>Фонари</Link></li>
                    <li><Link to=''>Ножи & multitool (мультиинструмент)</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="inputLocal">
              <div className="search">
                <input
                  type="text"
                  placeholder="Поиск"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <i className="fa-solid fa-magnifying-glass" style={{ display: 'none' }}></i>
                {searchTerm && (
                  <div className="search-dropdown">
                    {menCard.filter(card =>
                      card.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ).length > 0 ? (
                      menCard
                        .filter(card =>
                          card.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((card) => (
                          <div
                            key={card.id}
                            className="search-item d-flex"
                            onClick={() => {
                              const element = document.getElementById(`card-${card.id}`)
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                              }
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            <img
                              src={card.img}
                              alt={card.title}
                              style={{ width: '40px', height: '40px', marginRight: '10px' }}
                            />
                            <span>{card.title}</span>
                          </div>
                        ))
                    ) : (
                      <div className="search-item">Напишите правильно</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="icons">
              <div className="right">
                <i className="fa-solid fa-chart-simple"></i>
                <i className="fa-regular fa-heart"></i>
                <Link to='/store'>
                  <i className="fa-duotone fa-solid fa-cart-plus"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="content-overlay">
            <h1 className="main-title text-center" style={{ fontSize: '30px' }}>
              Подарки для мужчин купить в Баку
            </h1>
            <br />
            <p className="subtitle">
              В этом разделе нашего каталога вы сможете подобрать подарок для представителя сильного пола. Это может быть подарок мужчине из ближнего окружения или коллеге по работе. Благодаря широкому и продуманному ассортименту вы сможете выбрать удачный вариант даже если не слишком хорошо знаете увлечения одариваемого.
            </p>
            <br />
            <h2 className="section-title text-center" style={{ fontSize: '30px' }}>
              Мужская тематика в подарках
            </h2>
            <br />
            <p className="description">
              Самые популярные мужские темы в подарках — спорт, оружие, инструменты. Всё это вы можете найти у нас — от сувенирных шахматных наборов до практичных мультитулов. Но этим мы не ограничились. У нас есть подарки для мужчин, увлекающихся наукой и бизнесом, и подарки-приколы, которые можно вручить лучшему другу. Есть и такие презенты, которые осмелится вручить только самая близкая женщина.
            </p>
            <br />
            <p className="description">
              Не ограничивайте свою фантазию, выбирая подарок мужчине на день рождения или другой значимый праздник. С нашим ассортиментом у вас есть возможность подобрать именно то, что вызовет у именинника только яркие и положительные эмоции.
            </p>
          </div>
        </div>
      </main>
      <Outlet />
      <MenCard searchTerm={searchTerm} />
      <div className="footer-local my-5 d-flex">
        <div className="bac-color">
          <div className="button-wit">
            <button id='btn' type='submit'>подписаться на рассылку</button>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="ul-lilocal">
          <ul>
            <li>+994504930370</li>
            <li>info@boon.az</li>
            <li>г. Баку М.Хади 68</li>
          </ul>
        </div>
        <div className="icons-local">
          <i className="fa-brands fa-facebook local-1"></i>
          <i className="fa-brands fa-instagram local-2"></i>
          <i className="fa-brands fa-youtube local-3"></i>
          <i className="fa-brands fa-whatsapp local-4"></i>
          <i className="fa-brands fa-tiktok local-5"></i>
        </div>
        <div className="confik">
          <i className="fa-solid fa-book-open">
            <span>Политика <br /> конфиденциальности</span>
          </i>
        </div>
      </div>
      <button className='topButton' onClick={scroll}>↑</button>
    </>
  );
}

// Импортируем menCard для поиска
import { menCard } from '../catalogCard/menCard';

export default Men;