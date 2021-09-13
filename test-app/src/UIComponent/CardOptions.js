import { BsListUl,BsFillPieChartFill } from 'react-icons/bs';
import { RiBubbleChartFill } from 'react-icons/ri';
import {Nav} from 'reactstrap';
import './Card.css';
import './CardOptions.css'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CradOptions = (props) => {
    debugger;
    const tabs = props.tabs;
    const dropdown = props.dropDown;
    const components = {
        List: BsListUl,
        PieChart: BsFillPieChartFill,
        ScatterChart: RiBubbleChartFill
      };
    var tabList = [];
    
    if(tabs && tabs.length){
            var tab_List = tabs.map((tab,i) => {
                let classNames = 'card-tabs';
                if(i+1 == tabs.length){
                    classNames = 'card-tabs active'
                }
                if(tab.type == "text")
                    tabList.push( <div key={tab.name} className={classNames}>{tab.name}</div>);
                if(tab.type == "icon"){
                    const IconName = components[tab.name]
                    classNames = classNames + ' card-tab-icon'
                    tabList.push( <div key={tab.name} data-testid={tab.name} className={classNames}><IconName /></div>);
                }
            
            })
    }
   
    
    return(
        <Nav>
            {dropdown && <RenderDropDown dropDown={dropdown}/>}
            {
                tabList && tabList.length>0 && (
                <Nav>
                    {tabList}
                </Nav>
            )}

        </Nav>
      
    )
}

const RenderDropDown = (props) => {
  
 

  return (
    <UncontrolledDropdown  inNavbar nav size="sm" className="dropdown">
      <DropdownToggle tag="span" data-toggle="dropdown" caret>
        {props.dropDown.name}
      </DropdownToggle>
      <DropdownMenu>
      
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

}

export default CradOptions;