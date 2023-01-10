import styles from './index.scss';
import Loader from 'react-loaders';
import { useRef } from 'react';

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';

import Kv from "../../assets/images/swiper-kv.jpeg";
import Nz from "../../assets/images/swiper-nz.JPG";
import Pd from "../../assets/images/swiper-pd.JPG";
import Sofia from "../../assets/images/swiper-sofia.JPG";
import Tas from "../../assets/images/swiper-tas.JPG";

// import AnimatedLetters from '../AnimatedLetters';
// import RevealLetters from '../RevealLetters';




const Photography = () => {
    
    return (
        <div>

            <h2 className='description-text'>photography examples using <a target="_blank" rel="noreferrer" href='https://swiperjs.com/'>Swiper</a> JavaScript library</h2>

            <Loader type="line-scale" color="rgb(169, 255, 3)" width={500} />

            <div className='swiper'>

                <div className={styles.container}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                        navigation
                        effect={'fade'}
                        speed={1000}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        className={styles.myswiper}

                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >

            


                        <SwiperSlide>
                            <img className={styles.swiperslide} src ={Kv} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.swiperslide} src ={Nz} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.swiperslide} src ={Pd} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.swiperslide} src ={Sofia} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.swiperslide} src ={Tas} />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
                



        </div>
    );
}

export default Photography;