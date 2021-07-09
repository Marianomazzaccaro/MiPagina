import React,{useEffect} from 'react';
import Encabezado from './Encabezado.js'
import Banner from './Banner.js'
import Producto from './SmallCard.js'
import Footer from './Footer.js'
import DescNosotros from '../components/Pages/DescNosotros.js'

function Nosotros(){
    useEffect(()=>{
        let altura = document.querySelector(".encabezado").clientHeight;
        let DescNosotros = document.querySelector(".DescNosotros")
        DescNosotros.style.paddingTop = (altura + 20) +"px"
    },[])
    return(
<div>

     <Encabezado/>
    <DescNosotros/>
    
    
    <Footer/>
    
</div>
    )
}
export default Nosotros;

