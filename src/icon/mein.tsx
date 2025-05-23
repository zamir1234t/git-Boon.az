import './mein.scss'


function mein() {
  return (
    <>
      <div className="press-19-f">
        <div className="store">
            <span>Kорзина</span>
        </div>
      </div>
      <br />
      <br />
      <br />
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
    </>
  )
}

export default mein
