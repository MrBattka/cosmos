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
    )
}

export default Contact;