import React from 'react';
import "../../src/assets/css/banner.css"
import bannerVideo from "../../src/assets/video/bannerVideo.mp4"
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import AllSportsHome from "../../src/assets/img/AllSportsIngresa.jpg"
import reloj2 from "../../src/assets/img/reloj2.jpg"
import reloj3 from "../../src/assets/img/reloj3.jpg"


import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        id:1,
        
        img: AllSportsHome,
        testimonial: "Home sitio 100 % Responsive" 
    },
    {
        id:2,
        username:'Juan',
        img: reloj2,
        testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates autem dignissimos eligendi explicabo. Recusandae accusamus rerum beatae atque architecto in odit sed molestias unde nihil magnam, ullam magni voluptatem'
    },
    {
        id:3,
        username:'Pedro',
        img: reloj3,
        testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates autem dignissimos eligendi explicabo. Recusandae accusamus rerum beatae atque architecto in odit sed molestias unde nihil magnam, ullam magni voluptatem'
    },
    
]



function banner(){
    
    return(
        
        <div className="banner">
           
        <video className="video" src={bannerVideo} autoPlay loop muted/> 
     
        <Swiper
        
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {data.map(user => (
            <SwiperSlide key={user.id} className="slide"> 
         <div className="slide-content">
             <div className="user-image">
                 {/* <img src={reloj1} alt="" className="user-photo" /> */}
                 
                 <img src={user.img} alt="" class="imgSlider"/>
        
             
             </div>
             <h5>{user.username}</h5>
             <p className="user-testimonial">
                 "<i>{user.testimonial}</i>"
             </p>
            
       
         </div>
  
  
                
                 </SwiperSlide>
        ))}
        
 

     
      ...
    </Swiper>
    
        
    </div>
       
      
              
            
    )
}
export default banner