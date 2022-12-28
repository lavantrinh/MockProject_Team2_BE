import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import "..//App";

function SignUp() {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-md-center">
        <Col xl={6} sm={6}>
          <Card className="form-center">
            <Card.Header>
              <div className="mt-4 text-center">
                <h2>Welcome to Fashion Shop</h2>
                <p className="lead">Sign up & Start your purchase</p>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirmed password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <div className="mt-3"></div>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Sign up now!!
                </Button>
              </div>
              <div className="mt-3"></div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
