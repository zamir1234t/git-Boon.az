import React, { useState } from 'react';
import Register from '../components/Register';
import { Outlet, Link } from 'react-router-dom';
import { useLogin } from '../openpassword/emailPass';
import '../scss/company.scss';


function Company() {
  const { role, fetchPromoCodes, promoCodes } = useLogin();
  const [registerOpen, setRegisterOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [copyStatus, setCopyStatus] = useState<string | null>(null); 
  console.log(clickCount);
  
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleMenu = () => setMenu((prev) => !prev);

  const isLoggedIn = localStorage.getItem('loggedin') === 'true';
  const hasPromoAccess = isLoggedIn && role === 'admin';

  const handleLogoClick = () => {
    if (!hasPromoAccess) {
      console.log('No promo access: role=', role, 'isLoggedIn=', isLoggedIn);
      return;
    }

    setClickCount((prev) => {
      const newCount = prev + 1;
      console.log('Click count:', newCount);
      if (newCount === 3) {
        console.log('Fetching promo codes...');
        fetchPromoCodes();
        setShowPromoModal(true);
        return 0;
      }
      return newCount;
    });
    setTimeout(() => {
      setClickCount(0);
      console.log('Click count reset');
    }, 1000);
  };

  const closePromoModal = () => {
    setShowPromoModal(false);
    setCopyStatus(null);
  };

  const handleCopy = async (code: string) => {
    try {
      
      if (!code) {
        throw new Error('Промокод пустой или отсутствует');
      }
      
      await navigator.clipboard.write(code);
      setCopyStatus(`Промокод ${code} скопирован!`);
      setTimeout(() => setCopyStatus(null), 2000);
    } catch (err) {
      console.error('Ошибка копирования через Clipboard API:', err);
     
      try {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed'; 
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (success) {
          setCopyStatus(`Промокод ${code} скопирован!`);
          setTimeout(() => setCopyStatus(null), 2000);
        } else {
          throw new Error('Fallback копирование не удалось');
        }
      } catch (fallbackErr) {
        console.error('Ошибка копирования через fallback:', fallbackErr);
        setCopyStatus('Не удалось скопировать промокод');
        setTimeout(() => setCopyStatus(null), 2000);
      }
    }
  };

  return (
    <>
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
              <li>компания</li>
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
            onClick={handleLogoClick}
            style={{ cursor: hasPromoAccess ? 'pointer' : 'default' }}
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
                    <Link to="">Другая Электроника</Link>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h4>Ручная работа</h4>
                <ul>
                  <li>
                    <Link to="">Куклы</Link>
                  </li>
                  <li>
                    <Link to="">Вязанные</Link>
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
                    <Link to="">Конфеты</Link>
                  </li>
                  <li>
                    <Link to="">Копилки</Link>
                  </li>
                  <li>
                    <Link to="">Стикеры</Link>
                  </li>
                  <li>
                    <Link to="">Магниты</Link>
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
              <input type="text" placeholder="Поиск" />
             
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

      
        {showPromoModal && hasPromoAccess && (
          <div className="promo-modal">
            <div className="promo-modal-content">
              <button className="close-btn" onClick={closePromoModal}>
                ×
              </button>
              <h3>Промокоды</h3>
              {copyStatus && <div className="copy-status">{copyStatus}</div>}
              {promoCodes && promoCodes.length > 0 ? (
                <ul>
                  {promoCodes.map((promo) => (
                    <li key={promo.code}>
                      <strong>{promo.code}</strong>: {promo.description} ({promo.discount})
                      <button
                        className="copy-btn"
                        onClick={() => handleCopy(promo.code)}
                      >
                        Копировать
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Нет доступных промокодов</p>
              )}
            </div>
          </div>
        )}
        <div className="contact">
            <div className="contact-local">
                <span>о компании</span>
            </div>
            <hr />
            <div className="contact-local">
                <span>контакты</span>
            </div>
        </div>
        <div className="card local-card-2" style={{width: '12.5rem'}}>
        <i className="fa-brands fa-telegram"></i>
  <div className="card-body button-local">
    <h5 className="card-title">Будьте в курсе наших акций и новостей</h5>
    <hr />
  <button type='submit'>подписаться</button>
  </div>
</div>
      <br />
      <br />
      <br />
    <div className="footer-local my-5 d-flex">  
    <div className="bac-color">
      <div className="button-wit">
        <button id='btn' type='submit'>подписаться на рассылку</button>
        <i className="fa-brands fa-telegram"></i>
      </div>
    </div>
    <div className="ul-lilocal ">
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
    <span>Политика <br /> конфиденциальности
    </span>
    </i>
    </div>
  </div>
      </main>
      <Outlet />
    </>
  );
}

export default Company;