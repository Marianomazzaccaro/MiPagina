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
                        <h1>Back-end</h1>
                    </CardTitle>
                </div> 
                <div className="CardText">
                    <CardText  >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus ipsa cum! Nam qui dolorum voluptatibus aliquid accusamus repellendus in ducimus dolores. Cupiditate fugit officiis, eligendi iure quisquam esse. Nam?
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae neque velit aspernatur consequuntur quam eius autem aperiam cumque in, ea ducimus distinctio nesciunt error laborum fugit provident enim est!
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae neque velit aspernatur consequuntur quam eius autem aperiam cumque in, ea ducimus distinctio nesciunt error laborum fugit provident enim est!
                    </CardText>                 
                
                </Card>
                </div>

            </div>
            
        )
    


}

export default SmallCard;