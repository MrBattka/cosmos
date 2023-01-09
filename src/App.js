import styles from './App.module.css';
import price from './img/price_list.jpg'
import icon from './img/icon_cosmos.jpg'
import iconHeader from './img/icon_head.jpg'
import aboutBg from './img/about__bg.jpg'
import vk from './img/vk.svg'
import inst from './img/inst.svg'
import phone from './img/phone.png'
import phoneTitle from './img/phone_title.png'
import { Carousel } from 'antd';
import carusel_1 from './img/carusel_2.jpg'
import carusel_2 from './img/carusel_3.jpg'
import carusel_3 from './img/carusel_1.jpg'
import photo_1 from './img/Photo/9MYjCAPMQs8.jpg'
import photo_2 from './img/Photo/bWW2x4q8dDY.jpg'
import photo_3 from './img/Photo/C5PupKl_WzQ.jpg'
import photo_4 from './img/Photo/DMq06NN3rgE.jpg'
import photo_5 from './img/Photo/FNlzmtBXXb8.jpg'
import photo_6 from './img/Photo/Ly5W-B5vwPc.jpg'

function App() {
  return (
    <div className={styles.app__wrapper}>
      <div className={styles.title__wrapper}>
        <a name='top' alt="#"></a>
        <div className={styles.img__background}>
          <header className={styles.header}>
            <ul className={styles.desktop__header}>
              <li><a className={styles.skip__link} href='#top'>Home</a></li>
              <li><a href='#about'>О нас</a></li>
              <li><a href='#media'>Фото</a></li>
              <li><a href='#price'>Цены</a></li>
              <li><a href='#contact'>Контакты</a></li>
            </ul>
            <a className={styles.icon__header} href='#top'><img className={styles.icon__header_img} src={iconHeader} alt="#" /></a>
            <div className={styles.header__phone}>
            <a href="tell: +7(978) 075 9934"><img src={phoneTitle} alt="#" /><span>+7(978) 075 9934</span></a>
            </div>
          </header>
          <div className={styles.title__header}>
            <h2>Cosmos Zone</h2>
          </div>
          <Carousel className={styles.img__carusel} autoplay>
            <div className={styles.caruselTitle__1}>
              <img src={carusel_1} alt="#" />
            </div>
            <div className={styles.caruselTitle__2}>
              <img src={carusel_2} alt="#" />
            </div>
            <div className={styles.caruselTitle__3}>
              <img src={carusel_3} alt="#" />
            </div>
          </Carousel>
        </div>
      </div>
      <a name="about"></a>
      <div className={styles.about__wrapper}>
        <img className={styles.about__bg} src={aboutBg} alt="#" />
        <div className={styles.about__text_wrapper}>
          <h2>LOFT ПРОСТРАНСТВО для детей и взрослых!</h2>
          <div className={styles.about__text}>
            <p>⚡️3 уютных зала, которые предоставлены только Вам.
              У нас Вы сможете:</p>
            <p>✖️Насладиться любимым фильмом,</p>
            <p>✖️Oтметить День Рождения или провести корпоратив,</p>
            <p>✖️Сыграть в PlayStation 4,</p>
            <p>✖️Поиграть в настольные игры,</p>
            <p>✖️Спеть в караоке без стеснения или устроить настоящую вечеринку!</p>
            <p>🍷принести с собой напитки или заказать доставку🍕</p>
            <p>Ждём Вас!♥️</p>
          </div>
        </div>
        <img className={styles.icon} src={icon} alt="#" />
      </div>
      <a name='media' alt="#" href='/'></a>
      <div className={styles.media__wrapper}>
        <div className={styles.caruselWrapper__1}>
          <Carousel autoplay>
            <div>
              <img src={photo_1} alt="#" />
            </div>
            <div>
              <img src={photo_2} alt="#" />
            </div>
            <div>
              <img src={photo_3} alt="#" />
            </div>
          </Carousel>
        </div>
        <div className={styles.caruselWrapper__2}>
          <Carousel autoplay>
            <div>
              <img src={photo_4} alt="#" />
            </div>
            <div>
              <img src={photo_5} alt="#" />
            </div>
            <div>
              <img src={photo_6} alt="#" />
            </div>
          </Carousel>
        </div>
      </div>
      <a name='price' alt="#" href='/'></a>
      <div className={styles.price__wrapper}>
        <img className={styles.img__price} src={price} alt="#" />
      </div>
      <a name="contact"></a>
      <div className={styles.contact__wrapper}>
        <div className={styles.icon__wrapper}>
          <div className={styles.icon__social}>
            <a href='https://vk.com/cosmos.zone'><img src={vk} alt="#" /></a>
          </div>
          <div className={styles.icon__social}>
            <a href='https://www.instagram.com/cosmos.zone/'><img src={inst} alt="#" /></a>
          </div>
        </div>
        <div className={styles.adress}>
          <p>Набережная Адмирала Клокачева , 1</p>
          <p><img className={styles.phone} src={phone} alt="#" /><a href="tell: +7(978) 075 9934">+7(978) 075 9934</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
