
import LineChartGraph from '../Chart/LineChartGraph';
import NumberChart from '../Chart/NumberChart';
import SimpleCard from '../UIComponent/Card';
import { Container, Row, Col } from 'reactstrap';
import AreaChartGraph from '../Chart/AreaChartGraph';
import ScatterChartGraph from '../Chart/ScatterGraph';
import DoughnutChart from '../Chart/DoughnutChart';
import './PageContext.css'

const PageContext = () => {
    const AreaTabs = [{type:"text",name:"Day"},
                      {type:"text",name:"Month"},
                      {type:"text",name:"Year"},
                      {type:"text",name:"5Year"}
                    ];
    const DoughnutChartTabs = [{type:"icon",name:"List"},
                              {type:"icon",name:"PieChart"}];

    const ScatterChartTabs = [{type:"icon",name:"List"},
                              {type:"icon",name:"ScatterChart"}]

    const DropDownItem = {name:"Last 30 Days",menuItems:["opt1","opt2"]}  
    const DropDownItemBySource = {name:"By Source",menuItems:["opt1","opt2"]}              
    

    return (
        <Container fluid={true}>
            <Row xs="3" noGutters>
                <Col xs={4} className='space-rows-col'>
                    <SimpleCard title="New Users" dropDown={DropDownItem}>
                        <NumberChart value={"1434 023"} percentValue={"+2.3%"} />
                    </SimpleCard>
                </Col>
                <Col xs={4} className='space-rows-col'>
                    <SimpleCard title="Users" tabs={DoughnutChartTabs} dropDown={DropDownItemBySource}>
                        <DoughnutChart />
                    </SimpleCard>
                </Col>
                <Col xs={4} className='space-rows-col'>
                    <SimpleCard title="Region Share" tabs={AreaTabs}>
                        <AreaChartGraph />
                    </SimpleCard>
                </Col>
            </Row>
            <Row >
                <Col   sm={4}>
                    <Row>
                        <Col className='space-rows-col'>
                            <SimpleCard title="Revenue" dropDown={DropDownItem}>
                                <NumberChart value={"231.4M"} percentValue={"+6.3%"} />
                            </SimpleCard>
                        </Col>

                    </Row>
                    <Row >
                        <Col className='space-rows-col'>
                            <SimpleCard title="Products" tabs={ScatterChartTabs} dropDown={DropDownItemBySource}>
                                <ScatterChartGraph />
                            </SimpleCard>
                        </Col>

                    </Row>
                </Col>
                <Col className='space-rows-col' sm={8}>
                    <SimpleCard title="Performance" tabs={AreaTabs} height={'500px'}>
                        <LineChartGraph />
                    </SimpleCard>
                </Col>
            </Row>
        </Container>

    )
}

export default PageContext;