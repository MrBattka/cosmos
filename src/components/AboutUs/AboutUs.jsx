import React from "react";
import styles from './AboutUs.module.css'
import icon from '../../img/aboutUs/icon_cosmos.jpg'
import aboutBg from '../../img/aboutUs/about__bg.jpg'

const AboutUs = () => {
    return (
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
    )
}

export default AboutUs;