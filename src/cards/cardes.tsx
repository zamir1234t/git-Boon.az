import React from 'react';
import Card from './card';
import data from './data';
import './card.scss';
import { useOutletContext } from 'react-router-dom';

interface OutletContext {
  searchTerm: string;
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

export const cards: CardItem[] = [
  {
    id: 1,
    title: 'Силиконовый ночник Зайка',
    img: 'https://www.mommybag.ua/wp-content/uploads/2022/12/zajchik35.jpg',
    text: 'есть в наличии',
    AZN: '22.40',
    discount: 28.00,
    azn: 5.60,
  },
  {
    id: 2,
    title: 'Левитирующая магнитная Лампочка',
    img: 'https://ae04.alicdn.com/kf/S4edf99f480034833b51b00494c88da6dP.jpg',
    text: 'есть в наличии',
    AZN: '135.68',
    discount: 169.60,
    azn: 33.92,
  },
  {
    id: 3,
    title: 'Пепельница классическая Cohiba',
    img: 'https://boon.az/upload/iblock/6a8/4osh666u3bznf1jzn5gvp179fpqwcdp6/pepelnitsaklassicheskayacohiba.jpeg',
    text: 'есть в наличии',
    AZN: '97.60',
    discount: 122.00,
    azn: 24.40,
  },
  {
    id: 4,
    title: 'Пепельница для сигар Cohiba',
    img: 'https://ae01.alicdn.com/kf/Hb14c64382aa8480db05e22e18f917160V.jpg',
    text: 'есть в наличии',
    AZN: '42.40',
    discount: 53.00,
    azn: 10.60,
  },
  {
    id: 5,
    title: 'Гильотина для сигар Cohiba',
    img: 'https://boon.az/upload/iblock/116/zn4o4c5rfv2l9mw90xh677265qki7ep4/gilotinadlyasigarcohiba.jpeg',
    text: 'есть в наличии',
    AZN: '59.60',
    discount: 74.50,
    azn: 14.90,
  },
  {
    id: 6,
    title: 'Конструктор Minecraft Подземная крепость, 359 деталей',
    img: 'https://boon.az/upload/iblock/afd/t58oiu9ye7050j3hacwq0vkckqtro1ba/konstruktorminecraftpodzemnayakrepost359detaley.jpeg',
    text: 'есть в наличии',
    AZN: '25.60',
    discount: 32.00,
    azn: 6.40,
  },
  {
    id: 7,
    title: 'Увлажнитель с эффектом пламени Костер',
    img: 'https://boon.az/upload/iblock/5b2/zshmx8knhy4wv8uud6per0eek6mezahv/uvlazhnitelseffektomplamenikosterbelyy.jpeg',
    text: 'есть в наличии',
    AZN: '59.60',
    discount: 74.50,
    azn: 14.90,
  },
  {
    id: 8,
    title: 'Настольная игра Магнитный бой',
    img: 'https://boon.az/upload/iblock/4e0/dzdbj76z1lhbfm3hyjwucke1al5ydv25/nastolnayaigramagnitnyyboy.jpeg',
    text: 'есть в наличии',
    AZN: '44.80',
    discount: 56.00,
    azn: 11.20,
  },
  {
    id: 9,
    title: 'Газовая зажигалка в ретро стиле',
    img: 'https://boon.az/upload/iblock/d87/dxk07hh24m6321d8ajgigaatfwh074hm/gazovayazazhigalkavretrostilemarlbro.jpeg',
    text: 'есть в наличии',
    AZN: '14.80',
    discount: 18.50,
    azn: 3.70,
  },
  {
    id: 10,
    title: 'Набор для изготовления сквишей',
    img: 'https://boon.az/upload/iblock/ac6/es8of2peu1kui6nf7416p9vpq8abyy8s/nabordlyaizgotovleniyaskvishey142predmeta.jpeg',
    text: 'есть в наличии',
    AZN: '37.60',
    discount: 47.00,
    azn: 9.40,
  },
  {
    id: 11,
    title: 'Подарочный набор для виски в деревянной коробке',
    img: 'https://boon.az/upload/iblock/400/i9j44voa3yojzse9kc7r1fu06k3711th/podarochnyynabordlyaviskivderevyannoykorobke.jpeg',
    text: 'есть в наличии',
    AZN: '59.60',
    discount: 74.50,
    azn: 14.90,
  },
  {
    id: 12,
    title: 'Ночник уличный фонарь в снежную ночь DİY сделай сам',
    img: 'https://boon.az/upload/iblock/77e/t7csau76nboa9u1w9gyj7vc1hwipdktc/nochnikulichnyyfonarvsnezhnuyunochdiysdelaysam.jpeg',
    text: 'есть в наличии',
    AZN: '14.80',
    discount: 18.50,
    azn: 3.70,
  },
  {
    id: 13,
    title: 'Золотые абстрактные фигурки Мысли, Ожидание, Знание',
    img: 'https://boon.az/upload/iblock/0c8/dmiije3jikfth24y2o99ao4laqdmtbi9/zolotyeabstraktnyefigurkimysliozhidanieznanie.jpeg',
    text: 'есть в наличии',
    AZN: '49.60',
    discount: 60.00,
    azn: 12.00,
  },
  {
    id: 14,
    title: 'Зажим для денег (серебристый)',
    img: 'https://boon.az/upload/iblock/468/ugwfy64mc4trmymff941mfhfm288yej8/Photoroom_20250329_183039.jpeg',
    text: 'есть в наличии',
    AZN: '5.92',
    discount: 7.40,
    azn: 1.48,
  },
  {
    id: 15,
    title: 'Анимированная маска Человека-Паука с подсветкой и пультом',
    img: 'https://boon.az/upload/iblock/e5d/jdgwy56z48ctmedbspz8r9j1mmjs914k/animirovannayamaskachelovekapaukaspodsvetkoyipultom.jpeg',
    text: 'есть в наличии',
    AZN: '64.80',
    discount: 81.00,
    azn: 16.20,
  },
  {
    id: 16,
    title: 'Подарочный набор с флягой Wild West',
    img: 'https://boon.az/upload/iblock/569/p1g205iwhiyx0rkdo5jotqm3phn8l35j/podarochnyynaborsflyagoywildwest.jpeg',
    text: 'есть в наличии',
    AZN: '25.60',
    discount: 32.00,
    azn: 6.40,
  },
  {
    id: 17,
    title: 'Мафия Баку & Шах – Две игры в одной коробке',
    img: 'https://boon.az/upload/iblock/0a0/i2ybcuj7uzpe803eymf5l7qysaxxju0e/IMG_0497.jpeg',
    text: 'есть в наличии',
    AZN: '5.60',
    discount: 7.00,
    azn: 1.40,
  },
  {
    id: 18,
    title: 'Подарочный набор Jack Daniel’s фляга + 2 стопки',
    img: 'https://boon.az/upload/iblock/d48/l5bvkvz80ccqp6kd1jjpm9zu6h8blgeg/podarochnyynaborjackdanielsflyaga2stopki.jpeg',
    text: 'есть в наличии',
    AZN: '20.00',
    discount: 25.00,
    azn: 5.00,
  },
  {
    id: 19,
    title: 'Монополия - настольная карточная игра / Monopoly Deal, версия на английском языке',
    img: 'https://boon.az/upload/iblock/645/galv1osr0j7ss106sneqljr32s2691lg/monopoliyanastolnayakartochnayaigramonopolydealversiyanaangliyskomyazyke.jpeg',
    text: 'есть в наличии',
    AZN: '6.40',
    discount: 8.00,
    azn: 1.60,
  },
  {
    id: 20,
    title: 'Ювелирная шкатулка "Мишка с розой"',
    img: 'https://boon.az/upload/iblock/2e5/r0npx1bohpk3ezwhk235qmv0fpykr21x/yuvelirnayashkatulkamishkasrozoy.jpeg',
    text: 'есть в наличии',
    AZN: '39.60',
    discount: 49.50,
    azn: 9.90,
  },
  {
    id: 21,
    title: 'Мягкая игрушка Пингвин в шапке Luck',
    img: 'https://ir.ozone.ru/s3/multimedia-g/c1000/6788758048.jpg',
    text: 'есть в наличии',
    AZN: '12.00',
    discount: 15.00,
    azn: 3.00,
  },
  {
    id: 22,
    title: 'Цветной дым Color smoke',
    img: 'https://luxsalut.kz/files/resized/products/color-smoke-ng-137080-sinij-1-st-106062549-1.600x800.jpg',
    text: 'есть в наличии',
    AZN: '7.60',
    discount: 9.50,
    azn: 1.90,
  },
  {
    id: 23,
    title: 'Набор фляга с рюмками с мультитулом и ручкой England',
    img: 'https://boon.az/upload/iblock/5b8/ffg846szi6wtx8tcty8cdjlgxd8q4zer/naborflyagasryumkamismultitulomiruchkoyengland.jpeg',
    text: 'есть в наличии',
    AZN: '18.80',
    discount: 23.50,
    azn: 4.70,
  },
  {
    id: 24,
    title: 'Ночник-зеркало облако с цветами «Бесконечные Тюльпаны»',
    img: 'https://boon.az/upload/iblock/729/l8jl0z3fip6zg62347059tpe4ubxnk7g/IMG_2819.jpeg',
    text: 'есть в наличии',
    AZN: '12.00',
    discount: 15.00,
    azn: 3.00,
  },
];

interface RawCardItem {
  id?: number;
  title?: string;
  img?: string;
  text?: string;
  AZN?: string | number;
  discount?: string | number;
  azn?: string | number;
}

function normal(cards: RawCardItem[]): CardItem[] {
  return cards.map((item, index) => ({
    id: typeof item.id === 'number' ? item.id : index + 1,
    title: item.title || '',
    img: item.img || '',
    text: item.text || '',
    AZN: typeof item.AZN === 'string' ? item.AZN : (item.AZN || 0).toString(), 
    discount: typeof item.discount === 'string' ? parseFloat(item.discount) || 0 : item.discount || 0,
    azn: typeof item.azn === 'string' ? parseFloat(item.azn) || 0 : item.azn || 0,
  }))
}

const Cardes: React.FC = () => {
  const { searchTerm } = useOutletContext<OutletContext>();

  const allCards = normal([...cards, ...(data as RawCardItem[])])

  const displayCards = searchTerm ? allCards : cards

  const filtered = displayCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-3">
      <div className="row" style={{ alignItems: 'stretch' }}>
        {filtered.length > 0 ? (
          filtered.map((card) => (
            <div
              key={`card-${card.id}`}
              className="col-3"
              id={`card-${card.id}`}
            >
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

export default Cardes;