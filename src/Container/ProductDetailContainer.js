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
            <Col xs={6} sm={6} xl={6}><ImageCarousel /></Col>
             <Col xs={6} sm={6} xl={6}><ProductInfo /></Col>
      </Row>
    </Container>
          
        </div>
    );
}

export default ProductDetailContainer;