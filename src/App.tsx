import  { useEffect, useState } from 'react';
import './scss/App.scss';
import Register from './components/Register';
import Header from './Header';
import { Outlet, Link } from 'react-router-dom';
import Footer from './footer';
import { SearchProvider } from './api/search';
import { cards } from './cards/cardes';

function App() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleMenu = () => setMenu((prev) => !prev);

 
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

  return (
    <SearchProvider searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <main>
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
                <Link to="/company">компания</Link>
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
                  <li>
                    <Link to="/catalog">Для женщин</Link>
                  </li>
                  <li>
                    <Link to="/men">Для мужчин</Link>
                  </li>
                  <li>
                    <Link to="/children">Для детей</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h4>Развлечения</h4>
                <ul>
                  <li>
                    <Link to="/games">Настольные игры</Link>
                  </li>
                  <li>
                    <Link to="/puzzles">Головоломки</Link>
                  </li>
                  <li>
                    <Link to="/Antistress">Антистресс</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h4>Электроника</h4>
                <ul>
                  <li>
                    <Link to="">Часы</Link>
                  </li>
                  <li>
                    <Link to="">Аудио</Link>
                  </li>
                  <li>
                    <Link to="">другая Электроника</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h4>Ручная работа</h4>
                <ul>
                  <li>
                    <Link to="">куклы</Link>
                  </li>
                  <li>
                    <Link to="">вязанные</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h4>Разное</h4>
                <ul>
                  <li>
                    <Link to="">Открытки</Link>
                  </li>
                  <li>
                    <Link to="">конверты</Link>
                  </li>
                  <li>
                    <Link to="">копилки</Link>
                  </li>
                  <li>
                    <Link to="">стикеры</Link>
                  </li>
                  <li>
                    <Link to="">магниты</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h4>Экспедиция</h4>
                <ul>
                  <li>
                    <Link to="">Фонари</Link>
                  </li>
                  <li>
                    <Link to="">Ножи & multitool (мультиинструмент)</Link>
                  </li>
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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
              {searchTerm && (
                <div className="holo-autocomplete">
                  {cards
                    .filter((card) =>
                      card.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .slice(0, 5)
                    .map((card, index) => (
                      <div
                        key={card.id}
                        className={`holo-card holo-card-${index}`}
                        onClick={() => {
                          setSearchTerm(card.title);
                          const element = document.getElementById(`card-${card.id}`);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        {card.img ? (
                          <img src={card.img} alt={card.title} />
                        ) : (
                          <div className="no-image">Нет изображения</div>
                        )}
                        <div className="holo-content">
                          <span className="holo-title">{card.title}</span>
                          <span className="holo-price">{card.AZN} AZN</span>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="icons">
            <div className="right">
              <i className="fa-solid fa-chart-simple"></i>
              <Link to="/favorites">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to="/store">
                <i className="fa-duotone fa-solid fa-cart-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Header />
      <Outlet context={{ searchTerm }} />
      <Footer />
    </SearchProvider>
  );
}

export default App;