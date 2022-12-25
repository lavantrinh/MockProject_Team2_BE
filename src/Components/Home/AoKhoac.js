import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
function AoKhoac(props) {
    return (
        <Container className='mb-5'>
         
            <Alert className='my-2 py-2 border-0 rounded-0'>
         <h4>ÁO KHOÁC</h4> 
        </Alert>
            <Row>
                <Col xs={4} sm={4} xl={4} md={4}>
                    <Card className='border-0'>
                    <Card.Img variant="top" src="/images/jpgoods_61_345589.webp" />
                    <Card.Body>
                        <Card.Title>Áo khoác ngoài nữ</Card.Title>
                        <Card.Text>
                          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
                            </Card.Text>
                            <Card.Text className='text-center h4 text-danger'>
                                1.250.000 vnd
                            </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={8} sm={8} xl={8} md={8}>
                     <Row xs={4} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card className='border-0 rounded-0'>
            <Card.Img className='rounded-0' variant="top" src="/images/jpgoods_45_344649.webp" />
            <Card.Body>
              <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
              <Card.Text className='text-center text-danger fw-bold'>
               950.999 vnd
              </Card.Text>
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

export default AoKhoac;