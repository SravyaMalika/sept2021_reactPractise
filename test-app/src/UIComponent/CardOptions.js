import { BsListUl,BsFillPieChartFill } from 'react-icons/bs';
import { RiBubbleChartFill } from 'react-icons/ri';
import {Nav} from 'reactstrap';
import Icons from './Icon';
import './Card.css';

const CradOptions = (props) => {
    const tabs = props.tabs;
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
                tabList.push( <div className={classNames}>{tab.name}</div>);
            if(tab.type == "icon"){
                const IconName = components[tab.name]
                tabList.push( <div className={classNames}><Icons><IconName /></Icons></div>);
            }
            
        })
    }
    else{
        return ;
    }
    console.log(tabList);
    return(
       <Nav>
         {tabList}
       </Nav>
    )
}

export default CradOptions;