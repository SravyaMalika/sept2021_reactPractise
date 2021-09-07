import Greeting from './Greeting';
import LineChartGraph from './Chart/LineChartGraph';
import NumberChart from './Chart/NumberChart';
import SimpleCard from './UIComponent/Card';
import { Container, Row, Col } from 'reactstrap';
import AreaChartGraph from './Chart/AreaChartGraph';
import ScatterChartGraph from './Chart/ScatterGraph';
import DoughnutChart from './Chart/DoughnutChart';
import Header from './Header';

function App() {
  return (
    //  <Greeting />
    <div>
      <Header />
      <Container fluid={true}>
        <Row  xs="3">
          <Col style={{padding:"12px"}}>
            <SimpleCard title="New Users">
            <NumberChart value = {36}/>
            </SimpleCard>
          </Col>
          <Col style={{padding:"12px"}}>
            <SimpleCard title="Users">
              <DoughnutChart />
            </SimpleCard>
          </Col>
          <Col style={{padding:"12px"}}>
            <SimpleCard title="Region Share">
              <AreaChartGraph />
            </SimpleCard>
          </Col>
        </Row>
        <Row >
          <Col style={{padding:"12px"}} style={{padding:"12px"}} sm={4}>
            <Row>
              <Col>
                <SimpleCard title="Revenue">
                <NumberChart value = {36}/>
                </SimpleCard>
              </Col>

            </Row>
            <Row >
              <Col style={{padding:"12px"}}>
                <SimpleCard title="Products">
                  <ScatterChartGraph />
                </SimpleCard>
              </Col>

            </Row>
          </Col>
          <Col style={{padding:"12px"}} sm={8}>
            <SimpleCard title="Performance">
              <LineChartGraph />
            </SimpleCard>
          </Col>
        </Row>
      </Container>
     
    </div>


  );
}

export default App;
