import React from 'react';
import ImageCarousel from '../Components/ProductDetail/ImageCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductInfo from '../Components/ProductDetail/ProductInfo';
function ProductDetailContainer(props) {
    return (
      <div>
        <Container className='my-5 py-4'>
      <Row>
            <Col xs={5} sm={5} xl={5}><ImageCarousel /></Col>
             <Col xs={7} sm={7} xl={7}><ProductInfo /></Col>
      </Row>
    </Container>
          
        </div>
    );
}

export default ProductDetailContainer;