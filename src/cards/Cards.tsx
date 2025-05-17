import React, { useState } from 'react';
import Card from './card';
import data from './data';
import './card.scss';

function Cards() {
  const [visebal, setVisebal] = useState(0); 

  const retu = () => {
    setVisebal((prev) => prev + 4);
  };

  return (
    <>
      <div className="container py-3">
        <div className="row local-stor">
          {data.slice(0, visebal).map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={idx}>
              <Card {...item} />
            </div>
          ))}
        </div>
        {visebal < data.length && (
          <div className="w-100 text-center mt-4 button-top">
            <button className="btn btn-primary" onClick={retu}>
              Показать еще
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cards;