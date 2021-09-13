import React, { useState } from 'react';
import {
    Card, CardBody,CardHeader
  } from 'reactstrap';
  import CradOptions from './CardOptions';
  import './Card.css';
  
  
  const SimpleCard = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    let height = props.height ? props.height : "250px";
  
    return (
      <div>
        <Card style={{height:height}}>
          <CardHeader className="card-header-bgColor">
            <div className="card-title">{props.title}</div>
              <div className="card-options">
              {((props.tabs && props.tabs.length ) || (props.dropDown)) && <CradOptions tabs={props.tabs} dropDown={props.dropDown}/>} 
            </div>
           
          </CardHeader>
          <CardBody>
            {props.children}
          </CardBody>
        </Card>
      </div>
    );
  };

  export default SimpleCard;
