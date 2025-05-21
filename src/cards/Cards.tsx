
import React, { useState } from 'react';
import Card from './card';
import data from './data';
import './card.scss';

function Cards() {
  const [visible, setVisible] = useState(0);

  const loadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="container py-3">
      <div className=" row local-stor">
        {data.slice(0, visible).map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-3 " key={idx}>
            <Card {...item} />
          </div>
        ))}
      </div>
      {visible < data.length && (
        <div className="  w-100 text-center mt-4 button-top">
          <button className="btn btn-primary" onClick={loadMore}>
            Показать еще
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;