import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import "..//App";

function SignIn() {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-md-center">
        <Col xl={6} sm={6}>
          <Card className="form-center">
            <Card.Header>
              <div className="mt-4 text-center">
                <h2>Welcome back to Fashion Shop</h2>
                <p className="lead">Sign in & Enjoy your purchase</p>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                  />
                  <Form.Text>
                    <small>Do you forget your password?</small>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <div className="mt-3"></div>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Go!!
                </Button>
                <p className="text-muted">
                  <small>Do you have an account? Sign up here</small>
                </p>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
