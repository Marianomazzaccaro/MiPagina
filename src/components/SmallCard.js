import React, { Component } from 'react';
import {Card, CardText, CardBody, CardTitle, CardImg} from 'reactstrap';
import "../../src/assets/css/smallCard.css"



function SmallCard(){

    
        return(
            <div className="Cards">
                <div>
                <Card className="CardIn">
                {/* <CardImg style={{width:'18rem' }} variant="top" src={ss}/> */}
              
                <CardBody className="CardBody">                    
                    <CardTitle className="CardTitle">Card Title</CardTitle>
                    <CardText className="CardText" >
                    Some quick example text to bugggggggggggggggggggggggggssssssdasdasdasdasdasdasdasild on ssffffffffffffffffffffffffffffsssssssssssssssssssssssssffffffffffffffffffffssssssthe card title and make up the bulk of the card's content.
                    </CardText>                 
                </CardBody>
                </Card>
                </div>
                <div>
                    <Card className="CardIn">
                {/* <CardImg style={{width:'18rem' }} variant="top" src={ss}/> */}
                <CardBody className="CardBody">
                    <CardTitle className="CardTitle">Card Title</CardTitle>
                    <CardText className="CardText">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>                 
                </CardBody>
                </Card>
                </div>
                <div>
                <Card className="CardIn">
                {/* <CardImg style={{width:'18rem' }} variant="top" src={ss}/> */}
                <CardBody className="CardBody">
                    <CardTitle className="CardTitle">Card Title</CardTitle>
                    <CardText className="CardText">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>                 
                </CardBody>
                </Card>
                </div>

            </div>
            
        )
    


}

export default SmallCard;