
import LineChartGraph from '../Chart/LineChartGraph';
import NumberChart from '../Chart/NumberChart';
import SimpleCard from '../UIComponent/Card';
import { Container, Row, Col } from 'reactstrap';
import AreaChartGraph from '../Chart/AreaChartGraph';
import ScatterChartGraph from '../Chart/ScatterGraph';
import DoughnutChart from '../Chart/DoughnutChart';

const PageContext = () => {
    return (
        <Container fluid={true}>

            <Row xs="3" noGutters>
                <Col xs={4} style={{ padding: "12px" }}>
                    <SimpleCard title="New Users">
                        <NumberChart value={"1434 023"} percentValue={"+2.3%"} />
                    </SimpleCard>
                </Col>
                <Col xs={4} style={{ padding: "12px" }}>
                    <SimpleCard title="Users">
                        <DoughnutChart />
                    </SimpleCard>
                </Col>
                <Col xs={4} style={{ padding: "12px" }}>
                    <SimpleCard title="Region Share">
                        <AreaChartGraph />
                    </SimpleCard>
                </Col>
            </Row>
            <Row >
                <Col style={{ padding: "12px" }} style={{ padding: "12px" }} sm={4}>
                    <Row>
                        <Col>
                            <SimpleCard title="Revenue">
                                <NumberChart value={"231.4M"} percentValue={"+6.3%"} />
                            </SimpleCard>
                        </Col>

                    </Row>
                    <Row >
                        <Col style={{ padding: "12px" }}>
                            <SimpleCard title="Products">
                                <ScatterChartGraph />
                            </SimpleCard>
                        </Col>

                    </Row>
                </Col>
                <Col style={{ padding: "12px" }} sm={8}>
                    <SimpleCard title="Performance">
                        <LineChartGraph />
                    </SimpleCard>
                </Col>
            </Row>
        </Container>

    )
}

export default PageContext;