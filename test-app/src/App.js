import Greeting from './Greeting';
import LineChartGraph from './LineChartGraph';
import NumberChart from './NumberChart';
import SimpleCard from './Card';
import { Container, Row, Col } from 'reactstrap';
import AreaChartGraph from './AreaChartGraph';
import ScatterChartGraph from './ScatterGraph';
import DoughnutChart from './DoughnutChart';

function App() {
  return (
    //  <Greeting />
    <div>
      <Container>
        <Row className = 'App-row'>
          <Col>
            <SimpleCard>
            <NumberChart value = {36}/>
            </SimpleCard>
          </Col>
          <Col>
            <SimpleCard>
              <DoughnutChart />
            </SimpleCard>
          </Col>
          <Col>
            <SimpleCard>
              <AreaChartGraph />
            </SimpleCard>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Row>
              <Col>
                <SimpleCard>
                <NumberChart value = {36}/>
                </SimpleCard>
              </Col>

            </Row>
            <Row>
              <Col>
                <SimpleCard>
                  <ScatterChartGraph />
                </SimpleCard>
              </Col>

            </Row>
          </Col>
          <Col sm={8}>
            <SimpleCard>
              <LineChartGraph />
            </SimpleCard>
          </Col>
        </Row>
      </Container>
     
    </div>


  );
}

export default App;
