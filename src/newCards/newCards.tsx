import React, { useState } from 'react';
import Card from '../cards/card';


interface NewCardItem {
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: string;
  azn: string;
}


interface CardItem {
  id: number;
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: number;
  azn: number;
}


function normalizeCards(cards: NewCardItem[]): CardItem[] {
  return cards.map((item, index) => ({
    id: index + 1, 
    title: item.title || '',
    img: item.img || '',
    text: item.text || '',
    AZN: item.AZN || '0',
    discount: parseFloat(item.discount) || 0,
    azn: parseFloat(item.azn) || 0,
  }));
}

const NewCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const newCardes: NewCardItem[] = [
    {
      title: 'Виниловый проигрыватель с Bluetooth RP-20',
      img: 'https://boon.az/upload/iblock/3f6/x8k5uihqqj3w2d9bzhob1o7byg9rntbs/vinilovyyproigryvatelsbluetoothrp20.jpeg',
      text: 'Есть в наличии ',
      AZN: '79.60',
      discount: '99.50',
      azn: '19.90',
    },
    {
      title: 'Светодиодная фигура «Паровоз с Дедом Морозом» 26.5 × 19.5',
      img: 'https://goods-photos.static1-sima-land.com/items/6593150/1/1600.jpg?v=1658232982',
      text: 'Есть в наличии ',
      AZN: '99.60',
      discount: '124.50',
      azn: '24.90',
    },
    {
      title: 'Интерактивная маска Железного Человека Iron Man Mark V',
      img: 'https://boon.az/upload/iblock/ea7/fsmqy44hm64tjkty7md3x9ee4dke407r/interaktivnayamaskazheleznogochelovekaironmanmarkv.jpg',
      text: 'Есть в наличии ',
      AZN: '397.60',
      discount: '497.00',
      azn: '99.40',
    },
    {
      title: 'Меч "Майнкрафт" со светом и звуком',
      img: 'https://boon.az/upload/iblock/bbc/g35alpovrbqs5w1t7i2a383cnm304y89/Photoroom-20240623_150229.png',
      text: 'Есть в наличии ',
      AZN: '15.20',
      discount: '19.00',
      azn: '3.80',
    },
    {
      title: 'Фигурки "Sonic"',
      img: 'https://bi.ua/uploaded-images/products/size_650/583983_1.jpg',
      text: 'Есть в наличии ',
      AZN: '4.80',
      discount: '6.00',
      azn: '1.20',
    },
    {
      title: 'Подарочный набор "Кружка с мишками"',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQjh6ppXnNZdaZGy4QNdYLEl6ILkZ7d0iTQ&s',
      text: 'Есть в наличии ',
      AZN: '15.20',
      discount: '19.00',
      azn: '3.80',
    },
    {
      title: 'Турник раздвижной 81-130 см',
      img: 'https://boon.az/upload/iblock/c6b/8ergtc1ns1ibyndaeie375dmh6jw2iw2/turnikrazdvizhnoy81130sm.PNG',
      text: 'Есть в наличии ',
      AZN: '31.20',
      discount: '39.00',
      azn: '7.80',
    },
    {
      title: 'Алмазная кирка Майнкрафт со светом и звуком',
      img: 'https://boon.az/upload/iblock/011/9l1xfl8hdcsqsj9pxt7c8964juatg11x/Photoroom-20240621_001247.png',
      text: 'Есть в наличии ',
      AZN: '19.20',
      discount: '24.00',
      azn: '4.80',
    },
    {
      title: 'Набор фигурок "Sonic Hedgehog"',
      img: 'https://boon.az/upload/iblock/5f4/7e2oxz1s16c9axp8mzc4a2hu1goxfs3o/20240614_210156.jpg',
      text: 'Есть в наличии ',
      AZN: '33.60',
      discount: '42.00',
      azn: '8.40',
    },
    {
      title: 'Пистолет мыльных пузырей',
      img: 'https://boon.az/upload/iblock/d56/lk1eei1mlyso5fug70i72azv80tgqhci/Photoroom-20240616_205241.png',
      text: 'Есть в наличии ',
      AZN: '12.80',
      discount: '16.00',
      azn: '3.20',
    },
    {
      title: 'Фигурки супергероев Marvel Avengers танос',
      img: 'https://images.prom.ua/6234673829_w600_h600_6234673829.jpg',
      text: 'Есть в наличии ',
      AZN: '55.20',
      discount: '69.00',
      azn: '13.80',
    },
    {
      title: 'Турник раздвижной 62-100 см',
      img: 'https://boon.az/upload/iblock/e57/h2srkpqqwfu9ci8mvm3c6orzbxfypq3z/turnikrazdvizhnoy62100sm.JPEG',
      text: 'Есть в наличии ',
      AZN: '28.00',
      discount: '35.00',
      azn: '7.00',
    },
    {
      title: 'Подвеска "Жетон" с надписью',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmzMKwCmORdj23LKqwTIFnCzZa8VQ--gTTw&s',
      text: 'Есть в наличии ',
      AZN: '5.60',
      discount: '7.00',
      azn: '1.40',
    },
    {
      title: 'Тетрадь "Harry Potter"',
      img: 'https://encrypted-tbn0.gstatic.com/images?q寅:ANd9GcTrhtJ9RRdqFEVnlVO9Lxy8O-b7c-NxS1l0lw&s',
      text: 'Есть в наличии ',
      AZN: '5.60',
      discount: '7.00',
      azn: '1.40',
    },
    {
      title: 'Металический конструктор "Город мастеров" 3 в 1',
      img: 'https://boon.az/upload/iblock/6f2/xmk8b2h178q2o5yzmhj4lz1uen5u93vv/metalicheskiykonstruktorgorodmasterov3v1.jpg',
      text: 'Есть в наличии ',
      AZN: '14.40',
      discount: '18.00',
      azn: '3.60',
    },
    {
      title: 'Скетчбук Миленд "Brushpen sliced Blackout"',
      img: 'https://selcdn.fedsp.com/cygnus/13/36140/500x500.3436292352e0ab7d.jpeg',
      text: 'Есть в наличии ',
      AZN: '17.60',
      discount: '22.00',
      azn: '4.40',
    },
    {
      title: 'Шкатулка для украшений "Комод с золотистыми ручками"',
      img: 'https://cdn1.ozone.ru/s3/multimedia-k/6702608180.jpg',
      text: 'Есть в наличии ',
      AZN: '89.60',
      discount: '112.00',
      azn: '22.40',
    },
    {
      title: 'Высококачественные термосы с отделением для чая и воды"',
      img: 'https://boon.az/upload/iblock/466/2zxmj2tftgpkpiytf1338clzmq4kho5u/vysokokachestvennyetermosysotdeleniemdlyachayaivodygreen.JPEG',
      text: 'Есть в наличии ',
      AZN: '25.60',
      discount: '32.00',
      azn: '6.40',
    },
    {
      title: 'Шарики "Baoding" Инь Ян для снятия стресса 3 см"',
      img: 'https://boon.az/upload/iblock/0b5/cbetnytpxump3wsf73xglt76i5xu2dn2/sharikibaodinginyandlyasnyatiyastressa3sm.jpg',
      text: 'Есть в наличии ',
      AZN: '12.00',
      discount: '15.00',
      azn: '3.00',
    },
    {
      title: 'Головоломка лабиринт"',
      img: 'https://avatars.mds.yandex.net/get-mpic/13894603/2a000001961f7a2b6fec362b48c27bdad1e5/orig',
      text: 'Есть в наличии ',
      AZN: '24.80',
      discount: '31.00',
      azn: '6.20',
    },
    {
      title: 'Роза в стеклянной колбе (синий цветок)',
      img: 'https://content1.rozetka.com.ua/goods/images/big/249823647.jpg',
      text: 'Есть в наличии ',
      AZN: '29.60',
      discount: '37.00',
      azn: '7.40',
    },
    {
      title: 'Мультифункциональный складной набор 9в1',
      img: 'https://boon.az/upload/iblock/d9f/zhew0p0impcobpuy35hedqywk8lk9t6b/multifunktsionalnyyskladnoynabor9v1.jpg',
      text: 'Есть в наличии ',
      AZN: '9.60',
      discount: '12.00',
      azn: '2.40',
    },
    {
      title: 'Многоярусная шкатулка для украшений',
      img: 'https://boon.az/upload/iblock/b31/jkpif0wu0bm7z82okp10fhpex7c5b0mk/mnogoyarusnayashkatulkadlyaukrasheniy.jpg',
      text: 'Есть в наличии ',
      AZN: '69.60',
      discount: '87.00',
      azn: '17.40',
    },
    {
      title: 'Сувенир "Корабль"',
      img: 'https://boon.az/upload/iblock/d03/kj73d70qtprgzjkzv06czj1j66m3vhdi/20240525_210318.jpg',
      text: 'Есть в наличии ',
      AZN: '25.60',
      discount: '32.00',
      azn: '6.40',
    },
  ];

 
  const normalizedCards = normalizeCards(newCardes);

  const filtered = normalizedCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-3">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Axtarış..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row" style={{ alignItems: 'stretch' }}>
        {filtered.length > 0 ? (
          filtered.map((card) => (
            <div key={card.id} className="col-3">
              <Card
                id={card.id}
                title={card.title}
                img={card.img}
                text={card.text}
                AZN={card.AZN}
                discount={card.discount}
                azn={card.azn}
              />
            </div>
          ))
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};

export default NewCards;