import './scss/footer.scss'

function footer() {
  const scroll =() =>{
    window.scrollTo({top:0, behavior: 'smooth'})
  }
  return (
    <>
    <hr />
    <div className="cardess-container d-flex">
  <div className="cardess">
    <div className="card-text">СУВЕНИРЫ</div>
  </div>

  <div className="img">
    <div className="text">АКСЕССУАРЫ</div>
  </div>

  <div className="img-2">
    <div className="text-2">ЭКСПЕДИЦИЯ</div>
  </div>
</div>

<div className="cards-bottom d-flex">
 <div className="img-3">
 <div className='text-3'>ВСЁ ДЛЯ СТИЛЬНОГО ДОМА</div>
 </div>

 <div className="img-4">
  <div className="text-4">ПОДАРКИ ДЛЯ ДЕТЕЙ</div>
 </div>

 <div className="img-5">
  <div className="text-5">НАСТОЛЬНЫЕ ИГРЫ</div>
 </div>
</div>

<footer>
  <div className="footer-local my-5 d-flex">  
    <div className="bac-color">
      <div className="button-wit">
        <button id='btn' type='submit'>подписаться на рассылку</button>
        <i className="fa-brands fa-telegram"></i>
      </div>
    </div>
    <div className="ul-lilocal ">
      <ul>
        <li>+994504930370</li>
        <li>info@boon.az</li>
        <li>г. Баку М.Хади 68</li>
      </ul>
    </div>
    <div className="icons-local">
    <i className="fa-brands fa-facebook local-1"></i>
    <i className="fa-brands fa-instagram local-2"></i>
    <i className="fa-brands fa-youtube local-3"></i>
    <i className="fa-brands fa-whatsapp local-4"></i>
    <i className="fa-brands fa-tiktok local-5"></i>
    </div>
    <div className="confik">
    <i className="fa-solid fa-book-open">
    <span>Политика <br /> конфиденциальности
    </span>
    </i>
    </div>
  </div>
  <button className='topButton'  onClick={scroll}>↑</button>
</footer>
    </>
  )
}

export default footer
