import '../App.css';
import Card from './card';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from 'react-bootstrap';
import data from './data,';



function CardHero(){
   const cards = data.map((item) => {
     return <Card key={item.id} item={item} />;
   });        
    return (
      <div className="cardhero">
        <h1 className="cardhero-header">Our Recent posts</h1>
        <hr className="herohr" />

        {/* <Container>
          <Row>
            <Col sm={6} md={4}>
              <Card />
            </Col>
            <Col sm={6} md={4}>
              <Card />
            </Col>
            <Col md={4}>
              <Card />
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4}>
              <Card />
            </Col>
            <Col sm={6} md={4}>
              <Card />
            </Col>
            <Col md={4}>
              <Card />
            </Col>
          </Row>
        </Container> */}
        <Container className='card-grid'>{cards}</Container>
      </div>
    );
}

export default CardHero;
