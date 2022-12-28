import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import "..//App";

function ResetPassword() {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-md-center">
        <Col xl={6} sm={6}>
          <Card className="form-center">
            <Card.Header>
              <div className="mt-4 text-center">
                <h2>Reset Password</h2>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter your email to reset password</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Form>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send email
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;
