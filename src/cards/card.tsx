import React, { useState } from 'react';
import './card.scss';
import { useCart } from '../context/greatecontext';
import { useFavorites } from '../context/favoriteContext';

export interface Card {
  id: number;
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: number;
  azn: number;
}

function Card({ id, title, img, text, AZN, discount, azn =0 }: Card) {
  const { addToCart } = useCart(); 
  const [count, setCount] = useState<number>(1);
  const price = parseFloat(AZN.replace(',', '.'));
  const total = (count * price).toFixed(2);

  const Increment = () => setCount(prev => prev + 1);
  const Decrement = () => setCount(prev => {
    const num = Number(prev);
    return num > 1 ? num - 1 : 1;
  });

  const handleAddToCart = () => {
    addToCart({ title, img, text, AZN, discount, azn });
  };
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites(); 
  const addToCard = () => {
    const isFavorite = favorites.some(fav => fav.id === id);
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
    <div className="card product-card position-relative overflow-hidden rounded shadow p-4 d-flex local-card" style={{ width: '18rem' }}>
      <div className="card-image-container">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-icons">
          <i className="fa-solid fa-chart-simple"></i>
          <i className="fa-regular fa-heart"
   onClick={addToCard}
   style={{ cursor: 'pointer' }}
>
  {favorites.some(fav => fav.id === id)}
</i>
          <i className="fa-solid fa-lock"></i>
        </div>
      </div>
      <div className="icon-star">
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
      <div className="card-body local-body">
        <span className="card-title">{title}</span>
        <div className="phone-2">
          <span className="card-text text-success color-1">{text}</span>
          <p className="order-text">нет складов</p>
        </div>
        <p className="mb-0 fw-bold">{AZN} AZN/шт <span className="small"><small className="text-muted text-decoration-line-through">{discount} AZN</small></span></p>
        <p className="border"><mark className="mark-2-color">%20</mark> экономия {azn}</p>
      </div>
      <button className="btn btn-warning add-to-cart cards" onClick={handleAddToCart}>В КОРЗИНУ</button>
      <div className="hover-controls">
        <div className="quantity-control">
          <button onClick={Decrement}>-</button>
          <span>{count}</span>
          <button onClick={Increment}>+</button>
        </div>
        <p className="total-price">Общая стоимость {total} AZN</p>
      </div>
    </div>
  );
}

export default Card;