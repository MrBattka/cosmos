import { Carousel } from "antd";
import React from "react";
import styles from './Media.module.css'
import photo_2 from '../../img/Photo/carusel_1/bWW2x4q8dDY.jpg'
import photo_1 from '../../img/Photo/carusel_1/9MYjCAPMQs8.jpg'
import photo_3 from '../../img/Photo/carusel_1/C5PupKl_WzQ.jpg'
import photo_4 from '../../img/Photo/carusel_1/DMq06NN3rgE.jpg'
import photo_5 from '../../img/Photo/carusel_2/exkc2OV4n5Y.jpg'
import photo_6 from '../../img/Photo/carusel_2/FNlzmtBXXb8.jpg'
import photo_7 from '../../img/Photo/carusel_2/fUYPhawVmaE.jpg'
import photo_8 from '../../img/Photo/carusel_2/Ly5W-B5vwPc.jpg'

const Media = () => {
    return (
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
                    <div>
                        <img src={photo_4} alt="#" />
                    </div>
                </Carousel>
            </div>
            <div className={styles.caruselWrapper__2}>
                <Carousel autoplay>
                    <div>
                        <img src={photo_5} alt="#" />
                    </div>
                    <div>
                        <img src={photo_6} alt="#" />
                    </div>
                    <div>
                        <img src={photo_7} alt="#" />
                    </div>
                    <div>
                        <img src={photo_8} alt="#" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Media;