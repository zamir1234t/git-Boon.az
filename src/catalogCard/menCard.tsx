import React from 'react';
import Card from '../cards/card';

function menCard() {
  const menCard = [
    {
      title: 'Фигурка - Забавная работа «Архитектор» . Figure Funny work «Architect» .',
      img: 'https://boon.az/upload/iblock/a2f/byjha5p6d551gho6u4mfcdt24uza58b9/figurkazabavnayarabotaarkhitektorfigurefunnyworkarchitect.jpg',
      text: 'есть в наличии',
      AZN: '18.80',
      discount: '23.50',
      azn: '4.70'
    },
    {
      title: 'Фигурка - Забавная работа «Пилот» . Figure Funny work «Pilot» .',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXimkPcG8QvXF29lkxdVtth_R6fEkTBNTlA&s',
      text: 'есть в наличии',
      AZN: '44.00',
      discount: '55.00',
      azn: '11.00'
    },
    {
      title: 'Брелок на ключи «Мяч и бейсбольная бита»',
      img: 'https://boon.az/upload/iblock/a63/Djek_.jpg',
      text: 'есть в наличии',
      AZN: '4.80',
      discount: '6.00',
      azn: '1.20'
    },
    {
      title: 'Игральные пластиковые черные карты , Playing plastic Black cards',
      img: 'https://boon.az/upload/iblock/80a/H27f6643bdbf84a9a9beb97fb2ecb2d509.jpg',
      text: 'есть в наличии',
      AZN: '8.00',
      discount: '10.00',
      azn: '2.00'
    },
    {
      title: 'Настольная игра «Монополия БОЛЬШАЯ АФЁРА»',
      img: 'https://strgimgr.umico.az/sized/840/66056-e06a8de337cbea9ad5bb06d712ab31bb.jpg',
      text: 'есть в наличии',
      AZN: '31.20',
      discount: '39.00',
      azn: '7.80'
    },
    {
      title: 'Чехол на проездной «Прислонять»',
      img: 'https://boon.az/upload/iblock/c27/c27100ba3f3e2a53903f98f66dd8ccb9.jpg',
      text: 'есть в наличии',
      AZN: '2.80',
      discount: '3.50',
      azn: '0.70'
    },
    {
      title: 'Чехол на проездной «Не напрягаться»',
      img: 'https://boon.az/upload/iblock/242/2422a637bae70749ef405cea48fa09d7.jpg',
      text: 'есть в наличии',
      AZN: '2.80',
      discount: '3.50',
      azn: '0.70'
    },
    {
      title: 'Маятник «Колыбель Ньютона» на овальной подставке (14 см)',
      img: 'https://boon.az/upload/iblock/b86/b86da54121bdf221152fa99673d2d77d.jpg',
      text: 'есть в наличии',
      AZN: '12.00',
      discount: '15.00',
      azn: '3.00'
    },
    {
      title: 'Настольная игра «Пьяные крестики нолики»',
      img: 'https://avatars.mds.yandex.net/get-mpic/6219218/img_id7212151826181941633.jpeg/orig',
      text: 'есть в наличии',
      AZN: '59.60',
      discount: '74.50',
      azn: '14.90'
    },
    {
      title: 'Бластер-пулемёт «Z-SHOOT» (пистолет с автоматической перезарядкой барабана)',
      img: 'https://boon.az/upload/iblock/095/Djek_-10.jpg',
      text: 'есть в наличии',
      AZN: '71.20',
      discount: '89.00',
      azn: '17.80'
    },
    {
      title: 'Фигурка - Забавная работа «BOSS» . Figure Funny work «BOSS» .',
      img: 'https://boon.az/upload/iblock/630/nbc2kt85wsf6gk6mnpkkbj4bgc1dh2p8/figurkazabavnayarabotabossfigurefunnyworkboss.jpg',
      text: 'есть в наличии',
      AZN: '16.80',
      discount: '21.00',
      azn: '4.20'
    },
    {
      title: 'Автотабличка с маркером «Продаю! Как от сердца отрываю!»',
      img: 'https://boon.az/upload/iblock/a5b/Djek_-9.jpg',
      text: 'есть в наличии',
      AZN: '4.00',
      discount: '5.00',
      azn: '1.00'
    },
    {
      title: 'Сувенир "Попугаи" 30 см',
      img: 'https://boon.az/upload/iblock/3fd/doyejfju1vbzfnnhwyh6alwyjum5jbis/suvenirpopugai30sm.jpg',
      text: 'есть в наличии',
      AZN: '58.40',
      discount: '73.00',
      azn: '14.60'
    },
    {
      title: 'Панно из металла «Дверь авто» в дизайне интерьера',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcJ2g1C2pu6OXvR0UOgARHyOOO7GUbzoR1Q&s',
      text: 'есть в наличии',
      AZN: '101.60',
      discount: '127.00',
      azn: '25.40'
    },
    {
      title: 'Автотабличка с маркером «Жалко.... Но Продаю»',
      img: 'https://boon.az/upload/iblock/0c1/Djek_-17.jpg',
      text: 'есть в наличии',
      AZN: '4.00',
      discount: '5.00',
      azn: '1'
    },
    {
      title: 'Напольная игра "Твистер Frozen"',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVqm0WfmJX7QUn6hwO1VNWpEIZWu1C5jJ7A&s',
      text: 'есть в наличии',
      AZN: '16.80',
      discount: '21.00',
      azn: '4.20'
    },
  ];

  return (
    <div className="container py-3">
      <div className="row local-stor">
        {menCard.map((card, find) => (
          <div className="col-12 col-sm-6 col-md-3 mb-4" key={find}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default menCard;