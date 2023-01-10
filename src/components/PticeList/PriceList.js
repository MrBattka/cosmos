import { Carousel } from "antd";
import React from "react";
import styles from './PriceList.module.css'
import price from '../../img/price_list.jpg'
import price_vip from '../../img/price_list_vip.jpg'

const PriceList = () => {
    return (
        <div className={styles.price__wrapper}>
            <div className={styles.caruselWrapper__price}>
                <Carousel autoplay>
                    <div className={styles.img__price}>
                        <img src={price} alt="#" />
                    </div>
                    <div className={styles.img__price}>
                        <img src={price_vip} alt="#" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default PriceList;