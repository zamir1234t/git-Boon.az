import {  Link } from "react-router-dom";
import './scss/Header.scss'
function Header() {
  return (
    <>
    <hr />
     <div className="img-300px-left d-flex">
     <div className="images-local">
   <a href=""><img  src="https://st5.depositphotos.com/1915171/79808/v/450/depositphotos_798083520-stock-illustration-discount-sun-rays-gradient-banner.jpg" alt="скидка до 20% "/></a>
     </div>
     <div className="left-img">
      <div className="bottom-img ">
        <img src="https://static.tengrinews.kz/userdata/news/2025/news_564064/thumb_b/photo_504137.jpeg" 
        alt="img" />
        <div className="bottom my-3 ">
        <img src="https://img.freepik.com/premium-photo/christmas-gifts-men-dark-blue-gift-box-candy-christmas-background-gift-time-present-him-mock-up_536572-623.jpg" 
        alt="img" />
        </div>
      </div>
     </div>
     </div>
     <div className="offer d-flex justify-content-between">
      <div className="hit-3local-3">
        <h2>Лучшие предложение</h2>
      </div>
      <div className="router-in-left">
        <ul className='menu'>
          <li>
            <Link to='hit'>Хит</Link>
          </li>
          <li>
            <Link to='new'>новинка</Link>
          </li>
          <li>
            <Link to='Promotion'>Акции</Link>
          </li>
          <li><a href="">весь каталог</a></li>
        </ul>
      </div>
     </div>
     
    </>
  )
}

export default Header
