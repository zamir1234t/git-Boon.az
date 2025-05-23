import  { useState } from 'react';
import Card from './card';
import data from './data';
import './card.scss';


interface DataItem {
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: string; 
  azn: string; 
  category?: string;
}


interface CardItem {
  id: number;
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: number;
  azn: number;
  category?: string;
}


function normalizeData(items: DataItem[]): CardItem[] {
  return items.map((item, index) => ({
    id: index + 1, 
    title: item.title || '',
    img: item.img || '',
    text: item.text || '',
    AZN: item.AZN || '0',
    discount: parseFloat(item.discount) || 0,
    azn: parseFloat(item.azn) || 0,
    category: item.category || '',
  }));
}

function Cards() {
  const [visible, setVisible] = useState(0); 

  const loadMore = () => {
    setVisible((prev) => prev + 4);
  };

 
  const normalizedData = normalizeData(data);

  return (
    <div className="container py-3">
      <div className="row local-stor">
        {normalizedData.slice(0, visible).map((item) => (
          <div className="col-12 col-sm-6 col-md-3" key={item.id}>
            <Card
              id={item.id}
              title={item.title}
              img={item.img}
              text={item.text}
              AZN={item.AZN}
              discount={item.discount}
              azn={item.azn}
              category={item.category}
            />
          </div>
        ))}
      </div>
      {visible < normalizedData.length && (
        <div className="w-100 text-center mt-4 button-top">
          <button className="btn btn-primary" onClick={loadMore}>
            Показать ещё
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;