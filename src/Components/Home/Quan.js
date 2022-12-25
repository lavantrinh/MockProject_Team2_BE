import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function Quan(props) {
    return (
        <Container className='mb-5'>
          <h4>QUẦN</h4> 
   
            <Row className='mt-4'>
                <Col xs={4} sm={4} xl={4} md={4}>
                    <Card className='border-0'>
                    <Card.Img variant="top" src="/images/jpgoods_07_343930.webp" />
                    <Card.Body>
                        <Card.Title>Áo khoác ngoài nữ</Card.Title>
                        <Card.Text className='my-1'>
                          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
                            </Card.Text>
                            <Card.Text className='text-center h4 text-danger my-1'>
                                1.250.000 vnd
                </Card.Text>
                  <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
               <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-half text-warning"></i>
              <i class="bi bi-star text-warning"></i>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={8} sm={8} xl={8} md={8}>
                     <Row xs={4} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card className='border-0 rounded-0'>
            <Card.Img className='rounded-0' variant="top" src="/images/jpgoods_09_342969.webp" />
            <Card.Body>
              <Card.Text className='my-1'>Lorem ipsum dolor sit</Card.Text>
              <Card.Text className='text-center text-danger fw-bold my-1'>
               950.999 vnd
              </Card.Text>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
               <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-half text-warning"></i>
              <i class="bi bi-star text-warning"></i>
             
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
             </Col>
            </Row>
        </Container>
    );
}

export default Quan;