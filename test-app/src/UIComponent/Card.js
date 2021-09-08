import React, { useState } from 'react';
import {
    Card, CardBody,CardHeader
  } from 'reactstrap';
  import classnames from 'classnames';
  import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardText, Row, Col } from 'reactstrap';
  
  const SimpleCard = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      <div>
        <Card style={{width:"100%", height:"30%"}}>
          <CardHeader style={{backgroundColor:"white", fontWeight:"500"}}>
            <div>{props.title}
              <span style={{ float: "right" }}>
              
            </span>
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
