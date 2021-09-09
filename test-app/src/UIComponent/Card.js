import React, { useState } from 'react';
import {
    Card, CardBody,CardHeader
  } from 'reactstrap';
  import classnames from 'classnames';
  import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardText, Row, Col } from 'reactstrap';
  import CradOptions from './CardOptions';
  import './Card.css';
  
  
  const SimpleCard = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      <div>
        <Card>
          <CardHeader className="card-header-bgColor">
            <div className="card-title">{props.title}</div>
              <div className="card-options">
              {props.tabs && props.tabs.length && <CradOptions tabs={props.tabs} />} 
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
