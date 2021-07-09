import React,{useEffect} from 'react';
import Encabezado from './Encabezado.js'
import Banner from './Banner.js'
import Producto from './SmallCard.js'
import Footer from './Footer.js'
import SmallCard from './SmallCard.js'


function Home(){
    useEffect(()=>{
        let altura = document.querySelector(".encabezado").clientHeight;
        let banner = document.querySelector(".banner")
        banner.style.paddingTop = (altura + 20) +"px"
    },[])
    useEffect(()=>{
        let altura = document.querySelector(".banner").clientHeight;
        let footer = document.querySelector(".footer")
        footer.style.paddingTop = (altura + 5) +"px"
    },[])
    return(
<div>

    <Encabezado/>
    <Banner/>
    <SmallCard/>
  

    {/* <Producto/> */}
    <Footer/>
    
</div>
    )
}
export default Home;

