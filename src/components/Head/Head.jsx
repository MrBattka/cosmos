import React from "react";
import styles from './Head.module.css'
import carusel_1 from '../../img/title/carusel_2.jpg'
import carusel_2 from '../../img/title/carusel_3.jpg'
import carusel_3 from '../../img/title/carusel_1.jpg'
import carusel_4 from '../../img/title/carusel_4.jpg'
import iconHeader from '../../img/title/icon_head.jpg'
import phoneTitle from '../../img/title/phone_title.png'
import { Carousel } from "antd";

const Head = () => {
    return (
        <div className={styles.title__wrapper}>
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
          <Carousel className={styles.img__carusel} dots={false} autoplay>
            <div className={styles.caruselTitle__1}>
              <img src={carusel_1} alt="#" />
            </div>
            <div className={styles.caruselTitle__2}>
              <img src={carusel_2} alt="#" />
            </div>
            <div className={styles.caruselTitle__3}>
              <img src={carusel_3} alt="#" />
            </div>
            <div className={styles.caruselTitle__3}>
              <img src={carusel_4} alt="#" />
            </div>
          </Carousel>
        </div>
      </div>
    )
}

export default Head;