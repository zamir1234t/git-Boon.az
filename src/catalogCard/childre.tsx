import React, { useState } from 'react';
import Card from '../cards/card';
import '../scss/children.scss';

function Childre() {
  const childrenCard = [
    {
      title: 'Книга - сейф «PISA» 24 см',
      img: 'https://boon.az/upload/iblock/ef4/f7a8f69264ed69625a0b9856013c39ca.jpg',
      text: 'есть в наличии',
      AZN: '25.60',
      discount: '32.00',
      azn: '6.40'
    },
    {
      title: 'Настольная игра «Hedbanz»',
      img: 'https://strgimgr.umico.az/sized/1680/434836-232da81f181c63f9a67d7e6acf282d29.jpg',
      text: 'есть в наличии',
      AZN: '19.60',
      discount: '24.50',
      azn: '4.90'
    },
    {
      title: 'Настольная игра «Морской бой»',
      img: 'https://boon.az/upload/iblock/6b9/6b9fe8c6634aa5905ff1e7d6e438e717.jpg',
      text: 'есть в наличии',
      AZN: '29.60',
      discount: '37.00',
      azn: '7.40'
    },
    {
      title: 'Настольная игра «Карточные фокусы»',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHWvGw069DcLdEh_vORtKdnInOnGgKAUMvw&s',
      text: 'есть в наличии',
      AZN: '20.00',
      discount: '25.00',
      azn: '5.00'
    },
    {
      title: 'Набор для творчества «Светильник из бутылки» 4M',
      img: 'https://boon.az/upload/iblock/753/Djek_-5.jpg',
      text: 'есть в наличии',
      AZN: '53.60',
      discount: '67.00',
      azn: '13.40'
    },
    {
      title: 'Набор для творчества «Динамо-фонарь» 4M Dynamo torch',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4_Gk1d2vEm9TEBt7I7sTn7HF7uQC4toY-w&s',
      text: 'есть в наличии',
      AZN: '15.60',
      discount: '19.50',
      azn: '3.90'
    },
    {
      title: 'Набор для рисования «Юный художник»',
      img: 'https://boon.az/upload/iblock/d4c/Djek_-5.jpg',
      text: 'есть в наличии',
      AZN: '88.00',
      discount: '110.00',
      azn: '22.00'
    },
    {
      title: 'Семейная игра Dunk HAT (облей водой)',
      img: 'https://boon.az/upload/iblock/ae4/Djek_.jpg',
      text: 'есть в наличии',
      AZN: '26.40',
      discount: '33.00',
      azn: '6.60'
    },
    {
      title: 'Детский шпионский набор «Охранная сигнализация» 4М',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-orNwCtVF-13P-678zC0AnmL9yLUPD4Rbew&s',
      text: 'есть в наличии',
      AZN: '84.00',
      discount: '105.00',
      azn: '21.00'
    },
    {
      title: 'Немецкая противотанковая САУ Marder III AUSF.H',
      img: 'https://boon.az/upload/iblock/436/Djek_-13.jpg',
      text: 'есть в наличии',
      AZN: '47.20',
      discount: '59.00',
      azn: '11.80'
    },
    {
      title: 'Кубик - Рубика головоломка «Ghost Cube» Lefun (silver)',
      img: 'https://boon.az/upload/iblock/e17/Djek_-5.jpg',
      text: 'есть в наличии',
      AZN: '39.00',
      discount: '49.00',
      azn: '9.80'
    },
    {
      title: 'Конструктор «Эко мусорщик» 4М Trash robot',
      img: 'https://boon.az/upload/iblock/e36/Djek_-11.jpg',
      text: 'есть в наличии',
      AZN: '37.60',
      discount: '47.00',
      azn: '9.40'
    },
    {
      title: 'Набор-конструктор «Электромобиль» 4М',
      img: 'https://boon.az/upload/iblock/d6b/Djek_-5.jpg',
      text: 'есть в наличии',
      AZN: '33.60',
      discount: '42.00',
      azn: '8.40'
    }, {
      title: 'Конструктор «Амфибия» 4M Amphibian Rover',
      img: 'https://boon.az/upload/iblock/40f/Djek_-12.jpg',
      text: 'есть в наличии',
      AZN: '60.00',
      discount: '75.00',
      azn: '15.00'
    }, {
      title: 'Настольная игра «Морской бой» (Стеллар), Board game «Sea Battle» (Stellar)',
      img: 'https://boon.az/upload/iblock/b0a/17044mg9du3zpyxt7uxosd2z3po1u4up/%D0%BD149336_1.jpeg',
      text: 'есть в наличии',
      AZN: '46.40',
      discount: '58.00',
      azn: '11.60'
    }, {
      title: 'Брелок для ключей «Фредди Крюгер». Funko POP Freddy Krueger',
      img: 'https://boon.az/upload/iblock/4a6/Djek_-5.jpg',
      text: 'есть в наличии',
      AZN: '14.40',
      discount: '18.00',
      azn: '3.60'
    }, {
      title: 'Креативный ночник «Чайник»',
      img: 'https://boon.az/upload/iblock/d29/Djek_-10.jpg',
      text: 'есть в наличии',
      AZN: '15.20',
      discount: '19.00',
      azn: '3.80'
    }, {
      title: 'Настольная игра «Монополия для миллениалов»',
      img: 'https://boon.az/upload/iblock/a5b/Djek_-5.jpg',
      text: 'есть в наличии',
      AZN: '36,00',
      discount: '45.00',
      azn: '9.00'
    }, {
      title: 'Интерактивная копилка «Обезьянка»',
      img: 'https://boon.az/upload/iblock/5fc/Djek_-2.jpg',
      text: 'есть в наличии',
      AZN: '24.20',
      discount: '29.00',
      azn: '5.80'
    }, {
      title: '«Аэромяч с LED подсветкой и музыкой»',
      img: 'https://boon.az/upload/iblock/12f/12f9a3bef7b4221b4280144932976df3.jpg',
      text: 'есть в наличии',
      AZN: '14.80',
      discount: '18.50',
      azn: '3.70'
    }, {
      title: 'Конструктор «Детский катамаран» 4M Bottle catamaran',
      img: 'https://boon.az/upload/iblock/b5b/Djek_-9.jpg',
      text: 'есть в наличии',
      AZN: '50.40',
      discount: '63.00',
      azn: '12.60'
    }, {
      title: 'Конструктор CaDA «Storm Tank» на пульте управления (501 деталей)',
      img: 'https://boon.az/upload/iblock/d24/Djek_-12.jpg',
      text: 'есть в наличии',
      AZN: '176.00',
      discount: '220.00',
      azn: '44.00'
    }, {
      title: 'Набор-конструктор «Рука робота» 4М',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzKjmWrRPvbYEk0g-QRYISurdaWtTEk_1Nw&s',
      text: 'есть в наличии',
      AZN: '85.60',
      discount: '107.00',
      azn: '21.40'
    }, {
      title: 'Сувенир « Волшебный сон с единорогом » (музыкальный)',
      img: 'https://boon.az/upload/iblock/5e1/Djek_.jpg',
      text: 'есть в наличии',
      AZN: '22.40',
      discount: '28.00',
      azn: '5.60'
    }, {
      title: 'Игра настольная «Пирог в лицо» Board game «Pie face»',
      img: 'https://boon.az/upload/iblock/7c1/r66tkn4w2tqrw94ws9yk188yhkbp7m24/GRA-PIE-FACE-CIASTEM-W-TWARZ-HASBRO-B7063-INSTR-PL-Kod-producenta-B7063.jpg',
      text: 'есть в наличии',
      AZN: '28.00',
      discount: '35.00',
      azn: '7.00'
    }, {
      title: 'Игра настольная « Беги кролик беги! » (Cosmodrome Games)',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlKzWeiZyFX3cRxFyCH79X3CVatiZWNX9gpw&s',
      text: 'есть в наличии',
      AZN: '71.20',
      discount: '89.00',
      azn: '17.80'
    },
  ];

  const [columns, setColumns] = useState(3); 

  const toggleColumns = () => {
    setColumns(prev => (prev === 3 ? 4 : 3)); 
  };

  const columnClass = columns === 3
    ? 'col-12 col-sm-6 col-md-4 mb-4' 
    : 'col-12 col-sm-6 col-md-3 mb-4'; 

  return (
    <div>
      <div className="w-100 d-flex justify-content-end mt-4 px-4">
        <button className="btn btn-primary" onClick={toggleColumns}>
          {columns === 3 ? 'Показать 4 в ряд' : 'Показать 3 в ряд'}
        </button>
      </div>
      <div className="container py-3">
        <div className="row local-stor">
          {childrenCard.map((card, index) => (
            <div className={columnClass} key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Childre;
