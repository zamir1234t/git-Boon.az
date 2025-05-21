import React, { useState } from 'react';
import Register from '../components/Register';
import { useCart } from '../context/greatecontext';
import { useFavorites } from '../context/favoriteContext';
import Mein from './mein';
import './mein.scss';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  img: string;
  title: string;
  AZN: string;
  discount: string;
  count: number;
}

function Store() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const { cartItems, removeFromCart, updateItemCount, promoCode, setPromoCode, promoDiscount, setPromoDiscount } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [promoMessage, setPromoMessage] = useState('');

  
  const promoCodes: { [key: string]: number } = {
    keYWellY: 10, 
    abstarctRanODP: 20,
    case: 5, 
    promo: 30,
    vgHnYT: 20 
  };

  
  const applyPromoCode = () => {
    if (promoCodes[promoCode]) {
      setPromoDiscount(promoCodes[promoCode]);
      setPromoMessage(`Промокод "${promoCode}" применен! Скидка ${promoCodes[promoCode]}%`);
    } else {
      setPromoDiscount(0);
      setPromoMessage('не правильный код error');
      setPromoCode('');
    }
  };

  
  const resetPromoCode = () => {
    setPromoCode('');
    setPromoDiscount(0);
    setPromoMessage('');
  };

  
  const totalPrice = cartItems
    .reduce((sum, item) => sum + parseFloat(item.AZN) * item.count, 0)
    .toFixed(2);
  const discountedPrice = promoDiscount
    ? (parseFloat(totalPrice) * (1 - promoDiscount / 100)).toFixed(2)
    : totalPrice;

  const incrementCount = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateItemCount(id, item.count + 1);
    }
  };

  const decrementCount = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateItemCount(id, Math.max(1, item.count - 1));
    }
  };

  const handleAddToFavorites = (item: CartItem) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);
    if (isFavorite) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites({
        id: item.id,
        title: item.title,
        img: item.img,
        text: '',
        AZN: item.AZN,
        discount: parseFloat(item.discount),
        azn: parseFloat(item.AZN),
      });
    }
  };

  return (
    <>
      <main>
        <div className="phone">
          <div className="phone-2">
            <div className="summary">+994504930370</div>
            <p className="order-text">(для заказа)</p>
          </div>
          <div className="acti">
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
              <input type="text" placeholder="Поиск" />
            </div>
          </div>
          <div className="icons">
            <div className="right">
              <i className="fa-solid fa-chart-simple"></i>
              <Link to="/favorites">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <i className="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </main>

      <div className="cart-container">
        <h1>Корзина</h1>
        <a href="#" className="back-link">
          Вернуться в каталог
        </a>
        <div className="cart-content d-flex">
          {cartItems.length === 0 ? (
            <div className="cart-items">
              <h2>Товары в корзине</h2>
              <p>Ваша корзина пуста</p>
            </div>
          ) : (
            <>
              <div className="cart-summary">
                <h2>Итого:</h2>
                <p className="total-price">
                  {discountedPrice} AZN{' '}
                  {promoDiscount > 0 && (
                    <span className="line-through text-gray-500">
                      {totalPrice} AZN
                    </span>
                  )}
                </p>
                <p className="savings">
                  Экономия:{' '}
                  {(
                    parseFloat(
                      cartItems
                        .reduce((sum, item) => sum + parseFloat(item.discount) * item.count, 0)
                        .toFixed(2)
                    ) + (parseFloat(totalPrice) - parseFloat(discountedPrice))
                  ).toFixed(2)}{' '}
                  AZN
                </p>
                <div className="promo-section">
                  <input
                    type="text"
                    placeholder="Есть промокод?"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="border p-2 w-full"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="mt-2 bg-blue-500 text-white p-2 rounded"
                style={{marginRight: '20px'}}  >
                    Применить
                  </button>
                  <button
                    onClick={resetPromoCode}
                    className="mt-2 bg-gray-500 text-white p-2 rounded"
                  >
                    Сбросить промокод
                  </button>
                  {promoMessage && (
                    <p
                      className={`mt-2 ${
                        promoDiscount > 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {promoMessage}
                    </p>
                  )}
                </div>
                <Link to="/form">
                  <button className="checkout-btn">Перейти к оформлению</button>
                </Link>
              </div>
              <div className="cart-items">
                <h2>Товары в корзине</h2>
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="item-discount">−20%</div>
                    <img src={item.img} alt={item.title} />
                    <div className="item-details">
                      <p>{item.title}</p>
                      <p className="item-price">Скидка: 20%</p>
                      <p className="item-price original-price">Тип цены: розничная цена</p>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => decrementCount(item.id)}>−</button>
                      <span>{item.count}</span>
                      <button onClick={() => incrementCount(item.id)}>+</button>
                    </div>
                    <div className="item-total">
                      <p>{(parseFloat(item.AZN) * item.count).toFixed(2)} AZN</p>
                      <p className="discount-price">
                        {(
                          (parseFloat(item.AZN) + parseFloat(item.discount)) *
                          item.count
                        ).toFixed(2)}{' '}
                        AZN
                      </p>
                      <button onClick={() => handleAddToFavorites(item)}>
                        {favorites.some((fav) => fav.id === item.id)
                          ? 'Убрать из избранного'
                          : 'В избранное'}
                      </button>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Mein />
    </>
  );
}

export default Store;