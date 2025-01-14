import imagem from '../../imagens/imagem.jpg'
import imagem1 from '../../imagens/imagem1.jpg'
import imagem2 from '../../imagens/imagem2.jpg'
import imagem3 from '../../imagens/imagem 3.png'
import imagem4 from '../../imagens/imagem4.jpeg'

//import Swiper  no React components
import { Swiper, SwiperSlide } from "swiper/react";


//import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import './styles.css';

//importando requerid modules
import { Navigation} from "swiper/modules";
function Carrossel(){
    return(
        <div className='corpoCarrocel'>
            <Swiper
                navigation={true}
                modules={(Navigation)}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={imagem2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagem1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagem}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagem3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagem4}/>
                </SwiperSlide>
            </Swiper>
        </div>
    
    );
}

export default Carrossel;