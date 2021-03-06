
import { Container, Row, Col } from 'reactstrap';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './App.css';
import PageContext from './Components/PageContext';


function App() {
  return (
  
    <div>
      <Container fluid={true} >
        <Row noGutters={true}>
          <Col xs={1} className="App-Sidebar App-ZeroPadding">
            <Sidebar />
          </Col>
          <Col xs={11}  className="App-PageContent App-ZeroPadding">
          <Header />
           <PageContext />
          </Col>
        </Row>
       </Container>
    </div>


  );
}

export default App;
