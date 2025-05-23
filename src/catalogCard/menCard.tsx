import React, { useMemo, useState } from 'react';
import Card from '../cards/card';
import '../scss/men.scss';


interface MenCardItem {
  id: number;
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: string;
  azn: string;
  category: string;
}


interface CardItem {
  id: number;
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: number;
  azn: number;
  category: string;
}


function normalizeCards(cards: MenCardItem[]): CardItem[] {
  return cards.map((item) => ({
    id: item.id,
    title: item.title || '',
    img: item.img || '',
    text: item.text || '',
    AZN: item.AZN || '0',
    discount: parseFloat(item.discount) || 0,
    azn: parseFloat(item.azn) || 0,
    category: item.category || '',
  }));
}

export const menCard: MenCardItem[] = [
  {
    id: 1,
    title: 'Фигурка - Забавная работа «Архитектор» . Figure Funny work «Architect» .',
    img: 'https://boon.az/upload/iblock/a2f/byjha5p6d551gho6u4mfcdt24uza58b9/figurkazabavnayarabotaarkhitektorfigurefunnyworkarchitect.jpg',
    text: 'есть в наличии',
    AZN: '18.80',
    discount: '23.50',
    azn: '4.70',
    category: 'figures',
  },
  {
    id: 2,
    title: 'Фигурка - Забавная работа «Пилот» . Figure Funny work «Pilot»',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXimkPcG8QvXF29lkxdVtth_R6fEkTBNTlA&s',
    text: 'есть в наличии',
    AZN: '44.00',
    discount: '55.00',
    azn: '11.00',
    category: 'figures',
  },
  {
    id: 3,
    title: 'Брелок на ключи «Мяч и бейсбольная бита»',
    img: 'https://boon.az/upload/iblock/a63/Djek_.jpg',
    text: 'есть в наличии',
    AZN: '4.80',
    discount: '6.00',
    azn: '1.20',
    category: 'accessories',
  },
  {
    id: 4,
    title: 'Игральные пластиковые черные карты , Playing plastic Black cards',
    img: 'https://boon.az/upload/iblock/80a/H27f6643bdbf84a9a9beb97fb2ecb2d509.jpg',
    text: 'есть в наличии',
    AZN: '8.00',
    discount: '10.00',
    azn: '2.00',
    category: 'board_games',
  },
  {
    id: 5,
    title: 'Настольная игра «Монополия БОЛЬШАЯ АФЁРА»',
    img: 'https://strgimgr.umico.az/sized/840/66056-e06a8de337cbea9ad5bb06d712ab31bb.jpg',
    text: 'есть в наличии',
    AZN: '31.20',
    discount: '39.00',
    azn: '7.80',
    category: 'board_games',
  },
  {
    id: 6,
    title: 'Чехол на проездной «Прислонять»',
    img: 'https://boon.az/upload/iblock/c27/c27100ba3f3e2a53903f98f66dd8ccb9.jpg',
    text: 'есть в наличии',
    AZN: '2.80',
    discount: '3.50',
    azn: '0.70',
    category: 'accessories',
  },
  {
    id: 7,
    title: 'Чехол на проездной «Не напрягаться»',
    img: 'https://boon.az/upload/iblock/242/2422a637bae70749ef405cea48fa09d7.jpg',
    text: 'есть в наличии',
    AZN: '2.80',
    discount: '3.50',
    azn: '0.70',
    category: 'accessories',
  },
  {
    id: 8,
    title: 'Маятник «Колыбель Ньютона» на овальной подставке (14 см)',
    img: 'https://boon.az/upload/iblock/b86/b86da54121bdf221152fa99673d2d77d.jpg',
    text: 'есть в наличии',
    AZN: '12.00',
    discount: '15.00',
    azn: '3.00',
    category: 'other',
  },
  {
    id: 9,
    title: 'Настольная игра «Пьяные крестики нолики»',
    img: 'https://avatars.mds.yandex.net/get-mpic/6219218/img_id7212151826181941633.jpeg/orig',
    text: 'есть в наличии',
    AZN: '59.60',
    discount: '74.50',
    azn: '14.90',
    category: 'board_games',
  },
  {
    id: 10,
    title: 'Бластер-пулемёт «Z-SHOOT» (пистолет с автоматической перезарядкой барабана)',
    img: 'https://boon.az/upload/iblock/095/Djek_-10.jpg',
    text: 'есть в наличии',
    AZN: '71.20',
    discount: '89.00',
    azn: '17.80',
    category: 'other',
  },
  {
    id: 11,
    title: 'Фигурка - Забавная работа «BOSS» . Figure Funny work «BOSS» .',
    img: 'https://boon.az/upload/iblock/630/nbc2kt85wsf6gk6mnpkkbj4bgc1dh2p8/figurkazabavnayarabotabossfigurefunnyworkboss.jpg',
    text: 'есть в наличии',
    AZN: '16.80',
    discount: '21.00',
    azn: '4.20',
    category: 'figures',
  },
  {
    id: 12,
    title: 'Автотабличка с маркером «Продаю! Как от сердца отрываю!»',
    img: 'https://boon.az/upload/iblock/a5b/Djek_-9.jpg',
    text: 'есть в наличии',
    AZN: '4.00',
    discount: '5.00',
    azn: '1.00',
    category: 'accessories',
  },
  {
    id: 13,
    title: 'Сувенир "Попугаи" 30 см',
    img: 'https://boon.az/upload/iblock/3fd/doyejfju1vbzfnnhwyh6alwyjum5jbis/suvenirpopugai30sm.jpg',
    text: 'есть в наличии',
    AZN: '58.40',
    discount: '73.00',
    azn: '14.60',
    category: 'other',
  },
  {
    id: 14,
    title: 'Панно из металла «Дверь авто» в дизайне интерьера',
    img: 'https://boon.az/upload/iblock/ce8/Djek_-6.jpg',
    text: 'есть в наличии',
    AZN: '101.60',
    discount: '127.00',
    azn: '25.40',
    category: 'other',
  },
  {
    id: 15,
    title: 'Автотабличка с маркером «Жалко.... Но Продаю»',
    img: 'https://boon.az/upload/iblock/0c1/Djek_-17.jpg',
    text: 'есть в наличии',
    AZN: '4.00',
    discount: '5.00',
    azn: '1.00',
    category: 'accessories',
  },
  {
    id: 16,
    title: 'Напольная игра "Твистер Frozen"',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVqm0WfmJX7QUn6hwO1VNWpEIZWu1C5jJ7A&s',
    text: 'есть в наличии',
    AZN: '16.80',
    discount: '21.00',
    azn: '4.20',
    category: 'board_games',
  },
  {
    id: 17,
    title: 'Кружка хамелеон "Facebook"',
    img: 'https://boon.az/upload/iblock/bcc/hwx0btezj1ynyopj5jy0d2lfzgi0vnrr/kruzhkakhameleonfacebook.jpeg',
    text: 'есть в наличии',
    AZN: '12.00',
    discount: '15.00',
    azn: '3.00',
    category: 'other',
  },
  {
    id: 18,
    title: 'Настольная игра «Битва полов»',
    img: 'https://boon.az/upload/iblock/8dc/iztpigl0o2cuyn43qnwcfom16xfa15yu/nastolnayaigrabitvapolov.jpg',
    text: 'есть в наличии',
    AZN: '39.60',
    discount: '49.50',
    azn: '9.90',
    category: 'board_games',
  },
  {
    id: 19,
    title: '3D Металлическая картина "Gasoline Station"',
    img: 'https://boon.az/upload/resize_cache/iblock/5d4/7oglcm5hfzn7060k6c7eb2ccn2i0lri2/600_600_140cd750bba9870f18aada2478b24840a/IMG_3266.JPG',
    text: 'есть в наличии',
    AZN: '88.00',
    discount: '110.00',
    azn: '22.00',
    category: 'other',
  },
  {
    id: 20,
    title: 'Магнитный "Дартс" (40 x 37,5 см)',
    img: 'https://boon.az/upload/iblock/5d3/pszdyahaw33yuvgxy4b788q9udjxty2d/magnitnyydarts40x375sm.JPG',
    text: 'есть в наличии',
    AZN: '17.60',
    discount: '22.00',
    azn: '4.40',
    category: 'board_games',
  },
];

const MenCard: React.FC<{ searchTerm?: string }> = ({ searchTerm = '' }) => {
  const [columns, setColumns] = useState(4);
  const [category, setCategory] = useState('all');

  const toggleColumns = () => {
    setColumns((prev) => (prev === 3 ? 4 : 3));
  };

 
  const normalizedCards = useMemo(() => normalizeCards(menCard), []);

  const filteredCards = useMemo(() => {
    return normalizedCards.filter((card) => {
      const matchesCategory = category === 'all' || card.category === category;
      const matchesSearch = searchTerm
        ? card.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm, normalizedCards]);

  const columnClass = columns === 3
    ? 'col-12 col-sm-6 col-md-4 mb-4'
    : 'col-12 col-sm-6 col-md-3 mb-4';

  return (
    <div>
      <div className="w-100 d-flex justify-content-between mt-4 px-5 align-items-center">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="mb-3 form-select w-auto"
        >
          <option value="all">Все</option>
          <option value="board_games">Настольные игры</option>
          <option value="figures">Фигурки</option>
          <option value="accessories">Аксессуары</option>
          <option value="other">Другое</option>
        </select>
        <div>
          <i className="fa-solid fa-grip me-2" onClick={toggleColumns}></i>
        </div>
      </div>
      <div className="container py-3">
        <div className="row local-stor">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div className={columnClass} key={card.id} id={`card-${card.id}`}>
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
            <div className="col-12 text-center">Ничего не найдено</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenCard;