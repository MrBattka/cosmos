import React from "react";
import styles from './Contact.module.css'
import vk from '../../img/vk.svg'
import inst from '../../img/inst.svg'
import phone from '../../img/phone.png'

const Contact = () => {
    return (
        <div className={styles.contact__wrapper}>
            <div className={styles.icon__wrapper}>
                <div className={styles.icon__social}>
                    <a className={styles.insta}  href='https://vk.com/cosmos.zone'><img src={vk} alt="#" /><p className={styles.inst_text}>cosmos.zone</p></a>
                </div>
                <div className={styles.icon__social}>
                    <a className={styles.insta} href='https://www.instagram.com/cosmos.zone/'><img src={inst} alt="#" /><p className={styles.inst_text}>cosmos.zone</p></a>
                </div>
            </div>
            <div className={styles.adress}>
                <p className={styles.contacts}><a
                    href="https://yandex.ru/maps/959/sevastopol/house/naberezhnaya_admirala_pereleshina_1/Z0oYcwZoTUEEQFpufXpwdHtmYw==/?ll=33.518422%2C44.614516&z=16.75">
                Набережная Адмирала Клокачева , 1</a></p>
                <p className={styles.contacts}><img className={styles.phone} src={phone} alt="#" /><a href="tell: +7(978) 075 9934">+7(978) 075 9934</a></p>
            </div>
        </div>
    )
}

export default Contact;