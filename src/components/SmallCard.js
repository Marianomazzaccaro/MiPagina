import React, { Component } from 'react';
import {Card, CardText, CardBody, CardTitle, CardImg} from 'reactstrap';
import "../../src/assets/css/smallCard.css"



function SmallCard(){

    
        return(
            <div className="Cards">
                <div className="CardIn">
                <Card  >
                {/* <CardImg style={{width:'18rem' }} variant="top" src={ss}/> */}
                <div className="CardTitle">                      
                    <CardTitle >
                        <h1>Back-end / DataBase</h1>
                    </CardTitle>
                </div> 
                <div className="CardText">
                    <CardText  >
                    <ul>
                        <li>Node.js / JavaScript</li>
                        <li>MySQL</li>
                        <li>Express</li>
                    </ul>
                    </CardText>
                    </div>                 
                
                </Card>
                </div>
                <div className="CardIn">
                <Card  >
                {/* <CardImg style={{width:'18rem' }} variant="top" src={ss}/> */}
                                            
                    <CardTitle className="CardTitle">
                        <h1>Front-end</h1>
                        </CardTitle>
                    <CardText className="CardText" >
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        
                        <li>JQuery</li>
                        <li>BootStrap</li>
                    </ul>
                    </CardText>                 
                
                </Card>
                </div>
                <div className="CardIn">
                <Card  >
                {/* <CardImg style={{width:'18rem' }} variant="top" src={ss}/> */}
                                            
                    <CardTitle className="CardTitle">
                        <h1>UX</h1>
                        </CardTitle>
                    <CardText className="CardText" >
                    <ul>
                        <li>HTML / CSS</li>
                        <li>Diseño de Wireframe</li>
                    </ul>
                    </CardText>                 
                
                </Card>
                </div>

            </div>
            
        )
    


}

export default SmallCard;