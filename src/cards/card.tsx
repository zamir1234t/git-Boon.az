import React, { useState, useEffect } from 'react';
import './card.scss';
import { useCart } from '../context/greatecontext';
import { useFavorites } from '../context/favoriteContext';


export interface CardItem {
  id: number;
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: number;
  azn: number;
  category?: string;
}

function Card({ id, title, img, text, AZN, discount, azn,  }: CardItem) {
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [count, setCount] = useState<number>(1);
  const [rating, setRating] = useState<number>(0);
  const price = parseFloat(AZN.replace(',', '.'));
  const total = (count * price).toFixed(2);

  const KEY = `rating${id}`;

  useEffect(() => {
    const savedRating = localStorage.getItem(KEY);
    if (savedRating !== null) {
      setRating(parseInt(savedRating));
    }
  }, [KEY]);

  const handleRatingClick = (index: number) => {
    if (rating === index) {
      setRating(0);
      localStorage.setItem(KEY, '0');
    } else {
      setRating(index);
      localStorage.setItem(KEY, index.toString());
    }
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      img,
      AZN,
      discount: discount.toFixed(2), 
      count, 
    });
  };

  const toggleFavorite = () => {
    const isFavorite = favorites.some((fav) => fav.id === id);
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        id,
        title,
        img,
        text,
        AZN,
        discount,
        azn,
      });
    }
  };

  return (
    <div
      className="card product-card position-relative overflow-hidden rounded shadow p-4 d-flex local-card"
      style={{ width: '18rem' }}
    >
      <div className="card-image-container">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-icons">
          <i className="fa-solid fa-chart-simple"></i>
          <i
            className={`fa-${favorites.some((fav) => fav.id === id) ? 'solid' : 'regular'} fa-heart`}
            onClick={toggleFavorite}
            style={{ cursor: 'pointer' }}
          ></i>
          <i className="fa-solid fa-lock"></i>
        </div>
      </div>
      <div className="icon-star">
        {[1, 2, 3, 4, 5].map((index) => (
          <i
            key={index}
            className={`fa-${index <= rating ? 'solid' : 'regular'} fa-star`}
            onClick={() => handleRatingClick(index)}
            style={{ cursor: 'pointer', color: index <= rating ? '#ffc107' : '#6c757d' }}
          ></i>
        ))}
      </div>
      <div className="card-body local-body">
        <span className="card-title">{title}</span>
        <div className="phone-2">
          <span className="card-text text-success color-1">{text}</span>
          <p className="order-text">нет складов</p>
        </div>
        <p className="mb-0 fw-bold">
          {AZN} AZN/шт{' '}
          <span className="small">
            <small className="text-muted text-decoration-line-through">{discount.toFixed(2)} AZN</small>
          </span>
        </p>
        <p className="border">
          <mark className="mark-2-color">%20</mark> экономия {azn.toFixed(2)}
        </p>
      </div>
      <button className="btn btn-warning add-to-cart cards" onClick={handleAddToCart}>
        В КОРЗИНУ
      </button>
      <div className="hover-controls">
        <div className="quantity-control">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <p className="total-price">Общая стоимость {total} AZN</p>
      </div>
    </div>
  );
}

export default Card;