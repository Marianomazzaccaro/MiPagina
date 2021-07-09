import React,{useEffect} from 'react';
import Encabezado from './Encabezado.js'
import Banner from './Banner.js'
import Producto from './SmallCard.js'
import Footer from './Footer.js'
import DescServicios from '../components/Pages/DescServicios.js'

function Servicios(){
    useEffect(()=>{
        let altura = document.querySelector(".encabezado").clientHeight;
        let DescNosotros = document.querySelector(".DescServicios")
        DescNosotros.style.paddingTop = (altura + 20) +"px"
    },[])
    return(
<div>

     <Encabezado/>
    <DescServicios/>
    
    
    <Footer/>
    
</div>
    )
}
export default Servicios;

