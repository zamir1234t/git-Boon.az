import React, { useEffect, useState } from 'react';
import Register from '../components/Register';
import { Outlet, Link } from 'react-router-dom';
import CatalogCard from '../catalogCard/CatalogCard';

function Catalog() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(prev => !prev);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menu &&
        !(event.target as HTMLElement).closest('.acti') &&
        !(event.target as HTMLElement).closest('.icon-gam')
      ) {
        setMenu(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menu]);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                  <li>Как купить</li>
                  <li><Link to='/company'>Компания</Link></li>
                  <li>Контакты</li>
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
                    <li><Link to='/men'>Для мужчин</Link></li>
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
                    <li><Link to=''>Другая электроника</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Ручная работа</h4>
                  <ul>
                    <li><Link to=''>Куклы</Link></li>
                    <li><Link to=''>Вязаные изделия</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Разное</h4>
                  <ul>
                    <li><Link to=''>Открытки</Link></li>
                    <li><Link to=''>Конверты</Link></li>
                    <li><Link to=''>Копилки</Link></li>
                    <li><Link to=''>Стикеры</Link></li>
                    <li><Link to=''>Магниты</Link></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Экспедиция</h4>
                  <ul>
                    <li><Link to=''>Фонари</Link></li>
                    <li><Link to=''>Ножи & мультитулы</Link></li>
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
                    {catalogcard.filter(card =>
                      card.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ).length > 0 ? (
                      catalogcard
                        .filter(card =>
                          card.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((card) => (
                          <div
                            key={card.id}
                            className="search-item d-flex"
                            onClick={() => {
                              const element = document.getElementById(`card-${card.id}`);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                <Link to='/favorites'>
                  <i className="fa-regular fa-heart"></i>
                </Link>
                <Link to='/store'>
                  <i className="fa-duotone fa-solid fa-cart-plus"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="content-overlay">
            <h1 className="main-title text-center" style={{ fontSize: '30px' }}>
              Подарки для женщин купить в Баку
            </h1>
            <br />
            <p className="subtitle">
              Что подарить женщине? Конечно, можно презентовать букет, конфеты или что-то подобное из шаблонных подарков. Но разве не будет интереснее подобрать оригинальный подарок для женщины? Тот, который запомнится и подарит искреннее удовольствие и радость.
            </p>
            <br />
            <h2 className="section-title text-center" style={{ fontSize: '30px' }}>
              Идеи для женских подарков
            </h2>
            <br />
            <p className="description">
              В нашем каталоге вы найдете подарок женщине на день рождения, Новый год, 8 Марта и другой значимый день. Нежные, элегантные, волшебные презенты — для ценительниц прекрасного. Стильные, удобные, полезные — для практичных леди. Забавные, необычные, шкодные — для ярких независимых личностей.
            </p>
            <br />
            <p className="description">
              Каким бы ни был повод, с нами вы подберете удачный подарок женщине и сможете сделать праздник незабываемым. Доставьте удовольствие и ей, и себе, отдавая предпочтение чему-то необычному, оригинальному и удивительному.
            </p>
          </div>
        </div>
      </main>
      <Outlet />
      <CatalogCard searchTerm={searchTerm} />
      <div className="footer-local my-5 d-flex">
        <div className="bac-color">
          <div className="button-wit">
            <button id='btn' type='submit'>Подписаться на рассылку</button>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="ul-lilocal">
          <ul>
            <li>+994504930370</li>
            <li>info@boon.az</li>
            <li>г. Баку, М.Хади 68</li>
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
            <span>Политика<br />конфиденциальности</span>
          </i>
        </div>
      </div>
      <button className='topButton' onClick={scroll}>↑</button>
    </>
  );
}


import { catalogcard } from '../catalogCard/CatalogCard';

export default Catalog;