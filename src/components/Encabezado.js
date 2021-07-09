import Triskel from '../assets/img/TriskelEncabezado.jpg';
import {Link} from 'react-router-dom';





function encabezado(){
return(

<header className="encabezado">

    <nav className="titulo">
            <h3>NOMBRE</h3>
    </nav>

    <nav className="Triskel">
 
        <ul>
            <li>
                <Link className="Servicios" to="/servicios">
                    <span>Servicios</span>
                </Link>  
                <a href="/">
                 <img src={Triskel} alt="Triskel" class="TriskelLogo"/>
                </a>  

                <Link className="Quienes" to="/nosotros">
                    <span>Quiénes Somos</span>
                </Link>  
                                      
            </li>
                  
            {/* <li><a href="#productos">Contactanos</a></li> */}
       
        </ul>
    </nav>

    
 


</header>
)
}
export default encabezado