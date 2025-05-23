import React, { useMemo, useState } from 'react';
import Card from '../cards/card';


interface CatalogCardItem {
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


function normalizeCards(cards: CatalogCardItem[]): CardItem[] {
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

export const catalogcard: CatalogCardItem[] = [
  {
    id: 1,
    title: 'Игра настольная «Мафия» (с масками)',
    img: 'https://usel.az/image/cache/catalog/products/razvlecheniya/vybor-podarka/podarki-i-igrushki-dlya-detej/nastolnye-igry-dlya-detej/semejnye-igry-i-razvlecheniya/nastolnye-igry/vse-novinki/nastolnaya-kartochnaya-igra-mafiya-s-maskami-gb-00013123-600x600.jpg',
    text: 'есть в наличии',
    AZN: '44.00',
    discount: '55.00',
    azn: '11.00',
    category: 'board_games',
  },
  {
    id: 2,
    title: 'Маятник «Колыбель Ньютона» на овальной подставке (18 см)',
    img: 'https://boon.az/upload/iblock/b86/b86da54121bdf221152fa99673d2d77d.jpg',
    text: 'есть в наличии',
    AZN: '15.20',
    discount: '19.00',
    azn: '3.80',
    category: 'other',
  },
  {
    id: 3,
    title: 'Креативная настенная вешалка «Такси»',
    img: 'https://boon.az/upload/iblock/71d/d0jshicl6upmx5x7llrpx8vs0wi49dpi/20240407_230929.jpg',
    text: 'есть в наличии',
    AZN: '25.60',
    discount: '32.00',
    azn: '6.40',
    category: 'other',
  },
  {
    id: 4,
    title: 'Алмазная вышивка с частичным заполнением «Маяк» (30х40)',
    img: 'https://boon.az/upload/iblock/f04/Djek_-8.jpg',
    text: 'есть в наличии',
    AZN: '52.00',
    discount: '65.00',
    azn: '13.00',
    category: 'diamond_embroidery',
  },
  {
    id: 5,
    title: 'Визитная карточка автовладелицы «Правила парковки»',
    img: 'https://boon.az/upload/iblock/ca1/Djek_-20.jpg',
    text: 'есть в наличии',
    AZN: '4.00',
    discount: '5.00',
    azn: '1.00',
    category: 'other',
  },
  {
    id: 6,
    title: 'Алмазная вышивка с частичным заполнением «Влюблённая пара» (30х40)',
    img: 'https://boon.az/upload/iblock/5ca/Djek_.jpg',
    text: 'есть в наличии',
    AZN: '16.80',
    discount: '21.00',
    azn: '4.20',
    category: 'diamond_embroidery',
  },
  {
    id: 7,
    title: 'Музыкальная шкатулка с фоторамкой для украшений «Jewelry Box» (розовая)',
    img: 'https://boon.az/upload/iblock/809/Djek_-2.jpg',
    text: 'есть в наличии',
    AZN: '28.00',
    discount: '35.00',
    azn: '7.00',
    category: 'music_boxes',
  },
  {
    id: 8,
    title: 'Алмазная вышивка с полным заполнением на холсте «Париж» (30х40)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tn:GT6Pag6XK2e2qaSP1xG7wfaG2lT7FbTvQVcqw&s',
    text: 'есть в наличии',
    AZN: '44.00',
    discount: '55.00',
    azn: '11.00',
    category: 'diamond_embroidery',
  },
  {
    id: 9,
    title: 'Семейная весёлая настольная игра «ВЖУХ»',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tn:GToGFOtCqPHc2PziRTPbk5iV28sVQav4JkB8g&s',
    text: 'есть в наличии',
    AZN: '17.60',
    discount: '22.00',
    azn: '4.40',
    category: 'board_games',
  },
  {
    id: 10,
    title: 'Настольная игра «Дженга гигантская»',
    img: 'https://boon.az/upload/iblock/6d3/Djek_-9.jpg',
    text: 'есть в наличии',
    AZN: '105.60',
    discount: '132.00',
    azn: '26.40',
    category: 'board_games',
  },
  {
    id: 11,
    title: 'Музыкальная шкатулка «Рояль» с балериной (большой)',
    img: 'https://boon.az/upload/iblock/0a9/Djek_-8.jpg',
    text: 'есть в наличии',
    AZN: '42.00',
    discount: '52.50',
    azn: '10.50',
    category: 'music_boxes',
  },
  {
    id: 12,
    title: 'Настольная игра «Монополия БОЛЬШАЯ АФЁРА»',
    img: 'https://strgimgr.umico.az/sized/840/66056-e06a8de337cbea9ad5bb06d712ab31bb.jpg',
    text: 'есть в наличии',
    AZN: '31.20',
    discount: '39.00',
    azn: '7.80',
    category: 'board_games',
  },
  {
    id: 13,
    title: 'Чехол на проездной «Прислонять»',
    img: 'https://boon.az/upload/iblock/c27/c27100ba3f3e2a53903f98f66dd8ccb9.jpg',
    text: 'есть в наличии',
    AZN: '2.80',
    discount: '3.50',
    azn: '0.70',
    category: 'other',
  },
  {
    id: 14,
    title: 'Чехол на проездной «Не напрягаться»',
    img: 'https://boon.az/upload/iblock/242/2422a637bae70749ef405cea48fa09d7.jpg',
    text: 'есть в наличии',
    AZN: '2.80',
    discount: '3.50',
    azn: '0.70',
    category: 'other',
  },
  {
    id: 15,
    title: 'Музыкальная шкатулка с фоторамкой для украшений «Jewelry Box» (бирюза)',
    img: 'https://boon.az/upload/iblock/d4c/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '28.00',
    discount: '35.00',
    azn: '7.00',
    category: 'music_boxes',
  },
  {
    id: 16,
    title: 'Позитивная кружка «Be truth ful with your self»',
    img: 'https://boon.az/upload/iblock/3a0/Djek_-23.jpg',
    text: 'есть в наличии',
    AZN: '12.20',
    discount: '14.00',
    azn: '2.80',
    category: 'other',
  },
  {
    id: 17,
    title: 'Маятник «Колыбель Ньютона» на овальной подставке (14 см)',
    img: 'https://boon.az/upload/iblock/b86/b86da54121bdf221152fa99673d2d77d.jpg',
    text: 'есть в наличии',
    AZN: '12.00',
    discount: '15.00',
    azn: '3.00',
    category: 'other',
  },
  {
    id: 18,
    title: 'Настольная игра «Пьяные крестики нолики»',
    img: 'https://avatars.mds.yandex.net/get-mpic/6219218/img_id7212151826181941633.jpeg/orig',
    text: 'есть в наличии',
    AZN: '59.60',
    discount: '74.50',
    azn: '14.90',
    category: 'board_games',
  },
  {
    id: 19,
    title: 'Музыкальный снежный шар «Little Dombo» (LED подсветка)',
    img: 'https://boon.az/upload/iblock/c03/muzykalnyysnezhnyysharlittledomboledpodsvetka.jpg',
    text: 'есть в наличии',
    AZN: '28.00',
    discount: '35.00',
    azn: '7.00',
    category: 'music_boxes',
  },
  {
    id: 20,
    title: 'Детективная игра «Мафия Luxury» с масками. 36 карт',
    img: 'https://boon.az/upload/iblock/9eb/Djek_-7.jpg',
    text: 'есть в наличии',
    AZN: '60.00',
    discount: '75.00',
    azn: '15.00',
    category: 'board_games',
  },
  {
    id: 21,
    title: 'Алмазная вышивка с частичным заполнением «Пейзаж» (30х40)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tn:GSYVUZAwy9fi8Vv-fkTRYEdMP4-FRkI0hYgaw&s',
    text: 'есть в наличии',
    AZN: '49.90',
    discount: '62.00',
    azn: '12.40',
    category: 'diamond_embroidery',
  },
  {
    id: 22,
    title: 'Алмазная вышивка с частичным заполнением «Весёлые друзья» (30х40)',
    img: 'https://boon.az/upload/iblock/a6d/Djek_-6.jpg',
    text: 'есть в наличии',
    AZN: '49.60',
    discount: '62.00',
    azn: '12.40',
    category: 'diamond_embroidery',
  },
  {
    id: 23,
    title: 'Музыкальная шкатулка с фоторамкой для украшений «Jewelry Box» (белая)',
    img: 'https://boon.az/upload/iblock/d8a/Djek_-11.jpg',
    text: 'есть в наличии',
    AZN: '28.00',
    discount: '35.00',
    azn: '7.00',
    category: 'music_boxes',
  },
  {
    id: 24,
    title: '«500 игр для всей семьи»',
    img: 'https://boon.az/upload/iblock/283/Djek_-10.jpg',
    text: 'есть в наличии',
    AZN: '80.00',
    discount: '100.00',
    azn: '20.00',
    category: 'board_games',
  },
  {
    id: 25,
    title: 'Алмазная вышивка с частичным заполнением «Домики» (30х40)',
    img: 'https://boon.az/upload/iblock/a5f/Djek_-7.jpg',
    text: 'есть в наличии',
    AZN: '53.60',
    discount: '67.00',
    azn: '13.40',
    category: 'diamond_embroidery',
  },
  {
    id: 26,
    title: 'Музыкальная шкатулка «Сердце» с балериной',
    img: 'https://boon.az/upload/iblock/5a7/5a75b56305e5d393c6939d73ff23f22e.jpg',
    text: 'есть в наличии',
    AZN: '29.60',
    discount: '37.00',
    azn: '7.40',
    category: 'music_boxes',
  },
];

const CatalogCard: React.FC<{ searchTerm?: string }> = ({ searchTerm = '' }) => {
  const [columns, setColumns] = useState(4);
  const [category, setCategory] = useState('all');

  const toggleColumns = () => {
    setColumns((prev) => (prev === 3 ? 4 : 3));
  };

  // Нормализуем данные
  const normalizedCards = useMemo(() => normalizeCards(catalogcard), []);

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
          <option value="music_boxes">Музыкальные шкатулки</option>
          <option value="diamond_embroidery">Алмазная вышивка</option>
          <option value="other">Другое</option>
        </select>
        <i className="fa-solid fa-grip" onClick={toggleColumns}></i>
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

export default CatalogCard;