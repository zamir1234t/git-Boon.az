import React, { useState } from 'react';
import Register from '../components/Register';
import { Outlet, Link } from 'react-router-dom';
import { useCart } from '../context/greatecontext';
import './mein.scss';

function Form() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menu, setMenu] = useState(false);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleMenu = () => setMenu((prev) => !prev);

  const { cartItems, clearCart, promoCode, promoDiscount, setLastOrder } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    messenger: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleOrder = () => {
    if (!formData.fullName || !formData.phone || !formData.city) {
      alert('Заполните все обязательные поля (ФИО, Телефон, Город).');
      return;
    }

    const orderId = `BOON-${Date.now()}`;
    setLastOrder({
      orderId,
      fullName: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      messenger: formData.messenger || 'Не указан',
      items: cartItems,
    });

    console.log('Order submitted:', { formData, cartItems, promoCode, promoDiscount });
    alert('Заказ оформлен!');

    setFormData({
      fullName: '',
      phone: '',
      messenger: '',
      city: '',
    });
    clearCart();
  };

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPrice = cartItems
    .reduce((sum, item) => sum + parseFloat(item.AZN) * item.count, 0)
    .toFixed(2);
  const discountedPrice = promoDiscount
    ? (parseFloat(totalPrice) * (1 - promoDiscount / 100)).toFixed(2)
    : totalPrice;
  const totalSavings = (
    parseFloat(
      cartItems
        .reduce((sum, item) => sum + parseFloat(item.discount) * item.count, 0)
        .toFixed(2)
    ) + (parseFloat(totalPrice) - parseFloat(discountedPrice))
  ).toFixed(2);
  const deliveryFee = '4.00';
  const subtotal = parseFloat(discountedPrice).toFixed(2);
  const finalTotal = (parseFloat(discountedPrice) + parseFloat(deliveryFee)).toFixed(2);

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
                <a id="top" href="">
                  RU
                </a>
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
                    <Link to="">конветы</Link>
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
              <input type="text" placeholder="Поиск" required />
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
      <Outlet />
      <div className="checkout-container">
        <div className="checkout-content d-flex">
          <div className="cart-summary">
            <h2>Итого:</h2>
            <p className="total-price">
              {finalTotal} AZN{' '}
              {promoDiscount > 0 && (
                <span className="line-through text-gray-500">
                  {(parseFloat(totalPrice) + parseFloat(deliveryFee)).toFixed(2)} AZN
                </span>
              )}
            </p>
            <p className="subtotal">Товаров на: {subtotal} AZN</p>
            <p className="delivery-fee">Доставка: {deliveryFee} AZN</p>
            <p className="savings">Экономия: {totalSavings} AZN</p>
            {promoCode && promoDiscount > 0 && (
              <p className="promo-info">Применен промокод: {promoCode} ({promoDiscount}%)</p>
            )}
            <div className="delivery-info">
              <h3>Доставка:</h3>
              <p>Доставка курьером только в черте города Баку до адреса.</p>
              <p>от 1 до 2 дней</p>
            </div>
            <div className="payment-info">
              <h3>Оплата:</h3>
              <p>Наличные курьеру</p>
            </div>
          </div>
          <div className="form-input">
            <h2>Оформление заказа</h2>
            <div className="local-input">
              <div className="input">
                <label htmlFor="fullName">ФИО *</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Введите ваше ФИО"
                />
              </div>
              <div className="input">
                <label htmlFor="phone">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+994"
                />
              </div>
              <div className="input">
                <label htmlFor="messenger">Мессенджер</label>
                <select id="messenger" value={formData.messenger} onChange={handleChange}>
                  <option value="">Выберите мессенджер</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="telegram">Telegram</option>
                  <option value="viber">Viber</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="city">Город *</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Введите место проживание"
                />
              </div>
              <button type="button" className="submit-btn" onClick={handleOrder}>
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-local my-5 d-flex">
        <div className="bac-color"> 
          <div className="button-wit">
            <button id="btn" type="button">
              подписаться на рассылку
            </button>
            <i className="fa-brands fa-telegram"></i>
          </div>
          <br />
          <button type='submit' style={{marginLeft: '40px', color: 'white'}}><Link to='/admin'>вы можете посмотреть то что заказали</Link></button>
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
            <span>
              <a href="https://boon.az/include/licenses_detail.php"></a>
            </span>
          </i>
        </div>
      </div>
      <button className="topButton" onClick={scroll}>
        ↑
      </button>
    </>
  );
}

export default Form;