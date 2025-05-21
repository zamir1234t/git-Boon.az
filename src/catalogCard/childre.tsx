import React, { useMemo, useState } from 'react';
import Card from '../cards/card';
import '../scss/children.scss';

export const childrenCard = [
  {
    id: 1,
    title: 'Книга - сейф «PISA» 24 см',
    img: 'https://boon.az/upload/iblock/ef4/f7a8f69264ed69625a0b9856013c39ca.jpg',
    text: 'есть в наличии',
    AZN: '25.60',
    discount: '32.00',
    azn: '6.40',
    category: 'other'
  },
  {
    id: 2,
    title: 'Настольная игра «Hedbanz»',
    img: 'https://strgimgr.umico.az/sized/1680/434836-232da81f181c63f9a67d7e6acf282d29.jpg',
    text: 'есть в наличии',
    AZN: '19.60',
    discount: '24.50',
    azn: '4.90',
    category: 'board_games'
  },
  {
    id: 3,
    title: 'Настольная игра «Морской бой»',
    img: 'https://images.deal.by/255047146_w600_h600_255047146.jpg',
    text: 'есть в наличии',
    AZN: '29.60',
    discount: '37.00',
    azn: '7.40',
    category: 'board_games'
  },
  {
    id: 4,
    title: 'Настольная игра «Карточные фокусы»',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHWvGw069DcLdEh_vORtKdnInOnGgKAUMvw&s',
    text: 'есть в наличии',
    AZN: '20.00',
    discount: '25.00',
    azn: '5.00',
    category: 'board_games'
  },
  {
    id: 5,
    title: 'Набор для творчества «Светильник из бутылки» 4M',
    img: 'https://boon.az/upload/iblock/753/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '53.60',
    discount: '67.00',
    azn: '13.40',
    category: 'creativity'
  },
  {
    id: 6,
    title: 'Набор для творчества «Динамо-фонарь» 4M Dynamo torch',
    img: 'https://boon.az/upload/iblock/ec8/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '15.60',
    discount: '19.50',
    azn: '3.90',
    category: 'creativity'
  },
  {
    id: 7,
    title: 'Набор для рисования «Юный художник»',
    img: 'https://boon.az/upload/iblock/d4c/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '88.00',
    discount: '110.00',
    azn: '22.00',
    category: 'creativity'
  },
  {
    id: 8,
    title: 'Семейная игра Dunk HAT (облей водой)',
    img: 'https://boon.az/upload/iblock/ae4/Djek_.jpg',
    text: 'есть в наличии',
    AZN: '26.40',
    discount: '33.00',
    azn: '6.60',
    category: 'board_games'
  },
  {
    id: 9,
    title: 'Детский шпионский набор «Охранная сигнализация» 4М',
    img: 'https://boon.az/upload/iblock/09d/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '84.00',
    discount: '105.00',
    azn: '21.00',
    category: 'creativity'
  },
  {
    id: 10,
    title: 'Немецкая противотанковая САУ Marder III AUSF.H',
    img: 'https://boon.az/upload/iblock/436/Djek_-13.jpg',
    text: 'есть в наличии',
    AZN: '47.20',
    discount: '59.00',
    azn: '11.80',
    category: 'constructors'
  },
  {
    id: 11,
    title: 'Кубик - Рубика головоломка «Ghost Cube» Lefun (silver)',
    img: 'https://boon.az/upload/iblock/e17/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '39.00',
    discount: '49.00',
    azn: '9.80',
    category: 'other'
  },
  {
    id: 12,
    title: 'Конструктор «Эко мусорщик» 4М Trash robot',
    img: 'https://boon.az/upload/iblock/e36/Djek_-11.jpg',
    text: 'есть в наличии',
    AZN: '37.60',
    discount: '47.00',
    azn: '9.40',
    category: 'constructors'
  },
  {
    id: 13,
    title: 'Набор-конструктор «Электромобиль» 4М',
    img: 'https://boon.az/upload/iblock/d6b/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '33.60',
    discount: '42.00',
    azn: '8.40',
    category: 'constructors'
  },
  {
    id: 14,
    title: 'Конструктор «Амфибия» 4M Amphibian Rover',
    img: 'https://boon.az/upload/iblock/40f/Djek_-12.jpg',
    text: 'есть в наличии',
    AZN: '60.00',
    discount: '75.00',
    azn: '15.00',
    category: 'constructors'
  },
  {
    id: 15,
    title: 'Настольная игра «Морской бой» (Стеллар), Board game «Sea Battle» (Stellar)',
    img: 'https://boon.az/upload/iblock/b0a/17044mg9du3zpyxt7uxosd2z3po1u4up/%D0%BD149336_1.jpeg',
    text: 'есть в наличии',
    AZN: '46.40',
    discount: '58.00',
    azn: '11.60',
    category: 'board_games'
  },
  {
    id: 16,
    title: 'Брелок для ключей «Фредди Крюгер». Funko POP Freddy Krueger',
    img: 'https://boon.az/upload/iblock/4a6/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '14.40',
    discount: '18.00',
    azn: '3.60',
    category: 'other'
  },
  {
    id: 17,
    title: 'Креативный ночник «Чайник»',
    img: 'https://boon.az/upload/iblock/d29/Djek_-10.jpg',
    text: 'есть в наличии',
    AZN: '15.20',
    discount: '19.00',
    azn: '3.80',
    category: 'other'
  },
  {
    id: 18,
    title: 'Настольная игра «Монополия для миллениалов»',
    img: 'https://boon.az/upload/iblock/a5b/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '36.00',
    discount: '45.00',
    azn: '9.00',
    category: 'board_games'
  },
  {
    id: 19,
    title: 'Интерактивная копилка «Обезьянка»',
    img: 'https://boon.az/upload/iblock/5fc/Djek_-2.jpg',
    text: 'есть в наличии',
    AZN: '24.20',
    discount: '29.00',
    azn: '5.80',
    category: 'other'
  },
  {
    id: 20,
    title: '«Аэромяч с LED подсветкой и музыкой»',
    img: 'https://boon.az/upload/iblock/12f/12f9a3bef7b4221b4280144932976df3.jpg',
    text: 'есть в наличии',
    AZN: '14.80',
    discount: '18.50',
    azn: '3.70',
    category: 'other'
  },
  {
    id: 21,
    title: 'Конструктор «Детский катамаран» 4M Bottle catamaran',
    img: 'https://boon.az/upload/iblock/b5b/Djek_-9.jpg',
    text: 'есть в наличии',
    AZN: '50.40',
    discount: '63.00',
    azn: '12.60',
    category: 'constructors'
  },
  {
    id: 22,
    title: 'Конструктор CaDA «Storm Tank» на пульте управления (501 деталей)',
    img: 'https://boon.az/upload/iblock/d24/Djek_-12.jpg',
    text: 'есть в наличии',
    AZN: '176.00',
    discount: '220.00',
    azn: '44.00',
    category: 'constructors'
  },
  {
    id: 23,
    title: 'Набор-конструктор «Рука робота» 4М',
    img: 'https://boon.az/upload/iblock/efe/Djek_-5.jpg',
    text: 'есть в наличии',
    AZN: '85.60',
    discount: '107.00',
    azn: '21.40',
    category: 'constructors'
  },
  {
    id: 24,
    title: 'Сувенир « Волшебный сон с единорогом » (музыкальный)',
    img: 'https://boon.az/upload/iblock/5e1/Djek_.jpg',
    text: 'есть в наличии',
    AZN: '22.40',
    discount: '28.00',
    azn: '5.60',
    category: 'other'
  },
  {
    id: 25,
    title: 'Игра настольная «Пирог в лицо» Board game «Pie face»',
    img: 'https://boon.az/upload/iblock/7c1/r66tkn4w2tqrw94ws9yk188yhkbp7m24/GRA-PIE-FACE-CIASTEM-W-TWARZ-HASBRO-B7063-INSTR-PL-Kod-producenta-B7063.jpg',
    text: 'есть в наличии',
    AZN: '28.00',
    discount: '35.00',
    azn: '7.00',
    category: 'board_games'
  },
  {
    id: 26,
    title: 'Игра настольная « Беги кролик беги! » (Cosmodrome Games)',
    img: 'https://boon.az/upload/iblock/be9/Djek_-8.jpg',
    text: 'есть в наличии',
    AZN: '71.20',
    discount: '89.00',
    azn: '17.80',
    category: 'board_games'
  },
];

function Childre({ searchTerm = '' }) {
  const [columns, setColumns] = useState(4);
  const [category, setCategory] = useState('all');

  const toggleColumns = () => {
    setColumns(prev => (prev === 3 ? 4 : 3));
  };

  const filteredCards = useMemo(() => {
    return childrenCard.filter(card => {
      const matchesCategory = category === 'all' || card.category === category;
      const matchesSearch = searchTerm
        ? card.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  const columnClass = columns === 3
    ? 'col-12 col-sm-6 col-md-4 mb-4'
    : 'col-12 col-sm-6 col-md-3 mb-4';

  return (
    <div>
      <div className="w-100 d-flex justify-content-between mt-4 px-5">
        <select onChange={(e) => setCategory(e.target.value)} className="mb-3 me-3 form-select w-auto flex-start">
          <option value="all">Все</option>
          <option value="board_games">Настольные игры</option>
          <option value="constructors">Конструкторы</option>
          <option value="creativity">Творчество</option>
          <option value="other">Другое</option>
        </select>
        <i className="fa-brands fa-hive d-flex justify-content-end" onClick={toggleColumns}></i>
      </div>
      <div className="container py-3">
        <div className="row local-stor">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div className={columnClass} key={card.id} id={`card-${card.id}`}>
                <Card {...card} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">напишите правильно</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Childre;