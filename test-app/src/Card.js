
import React from 'react';
import {
    Card, CardBody,Button
  } from 'reactstrap';
  
  const SimpleCard = (props) => {
    return (
      <div>
        <Card>
          <CardBody>
            {props.children}
          </CardBody>
        </Card>
      </div>
    );
  };

  export default SimpleCard;
