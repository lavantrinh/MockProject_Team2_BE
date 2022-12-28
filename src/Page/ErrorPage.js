import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "..//App";
import error from ".././assets/img/error.png";

function ResetPassword() {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-md-center">
        <Col xl={6} sm={6}>
          <Card>
            <div className="mt-4 text-center"></div>
            <Row className="justify-content-md-center">
              <Col xl={4} sm={4}>
                <Card.Img variant="top" src={error} />
              </Col>
            </Row>
            <div className="mt-4 text-center">
              <Card.Title>
                <h2>Something wrong just happened</h2>
              </Card.Title>{" "}
              <Card.Text>
                Something went wrong. We cannot get that information right now.
                <div></div>
                Please try again later.
              </Card.Text>
            </div>
            <div className="mt-4 text-center">
              <Button variant="primary" type="submit">
                Back to homepage
              </Button>
            </div>
            <div className="mt-4 text-center"></div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;
