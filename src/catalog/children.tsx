import React, { useState } from 'react';
import Register from '../components/Register';
import { Outlet, Link } from 'react-router-dom';
import '../scss/children.scss';
import Childre from '../catalogCard/childre';

function Children() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);

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
                    <li><Link to=''>конветы</Link></li>
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
    {searchTerm && (
      <div className="search-dropdown">
        {childrenCard.filter(card =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).length > 0 ? (
          childrenCard
            .filter(card =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((card) => (
              <div key={card.id} 
              className="search-item d-flex" 
              
              onClick={() =>{
                const elemen =document.getElementById(`card-${card.id}`)
                if (elemen) {
                  elemen.scrollIntoView({behavior: 'smooth', block: 'start'})
                }
              }}
              
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
          <div className="search-item">напишите правильно</div>
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
                <Link to="/store">
                  <i className="fa-duotone fa-solid fa-cart-plus"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="content-overlay">
            <p style={{ textAlign: 'center', fontSize: '30px' }}>подарки для детей купить в баку</p>
            <br />
            <p className="subtitle">
              Дарить подарки детям – одна из самых приятных вещей в мире! Искренняя, неподдельная радость в глазах малыша доставляет неописуемый восторг и согревает сердце. Однако, чтобы купить действительно классный подарок ребенку, необходимо как следует постараться – в Баку выбор презентов достаточно широк, но только у нас вы найдете самые оригинальные и полезные вещички, которые понравятся любому малышу.
            </p>
          </div>
        </div>
      </main>
      <Outlet />
      <Childre searchTerm={searchTerm} />
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


import { childrenCard } from '../catalogCard/childre';

export default Children;