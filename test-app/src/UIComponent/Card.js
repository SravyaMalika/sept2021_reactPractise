
import React from 'react';
import {
    Card, CardBody,CardHeader
  } from 'reactstrap';
  
  const SimpleCard = (props) => {
    return (
      <div>
        <Card style={{width:"100%", height:"30%"}}>
          <CardHeader style={{backgroundColor:"white", fontWeight:"500"}}>{props.title}</CardHeader>
          <CardBody>
            {props.children}
          </CardBody>
        </Card>
      </div>
    );
  };

  export default SimpleCard;
