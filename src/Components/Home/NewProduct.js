import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function NewProduct(props) {
    return (
        <Container className='mt-5'>
            <h4 className='text-center my-4'>HÀNG MỚI VỀ</h4>
            <Row xs={3} md={5} sm={4} className="row justify-content-center">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col className='text-center'>
                        <Card className='border-0 round-0'>
                            <Card.Img variant="top" src="images/jpgoods_09_345032.webp" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text className='text-danger fw-bold h5'>
                                    850.900 vnd
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default NewProduct;