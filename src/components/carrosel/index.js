import imagem from '../../imagens/imagem.jpg'
import imagem1 from '../../imagens/imagem1.jpg'
import imagem2 from '../../imagens/imagem2.jpg'
//import Swiper  no React components
import { Swiper, SwiperSlide } from "swiper/react";


//import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


import './styles.css';

//importando requerid modules
import { EffectCube, Pagination} from "swiper/modules";
function Carrossel(){
    return(
        <div>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale:0.94
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={imagem}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagem1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagem2}/>
                </SwiperSlide>
            </Swiper>
        </div>
    
    );
}

export default Carrossel;