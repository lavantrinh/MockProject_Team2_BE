import React from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Navbar,
  Row,
} from "react-bootstrap";
import Rating from "./Rating";

function CartItems(props) {
  return (
    <>
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Row>
            <Col sm={4}>
              <Image
                src="/images/jpgoods_61_345589.webp"
                alt="ao khoac"
                class="float-left"
                height="200px"
                href="#home"
              />
            </Col>
            <Col sm={4}>
              <Navbar.Collapse className="justify-content-top fs-6">
                <Navbar.Text>
                  <p className="text-sm-start fw-bold">Áo khoác nữ</p>
                  <p className="text-sm-start">Size: L</p>
                  <p className="text-sm-start">Giá: 1.250.000 vnd</p>
                  <p className="text-sm-start"> Số lượng
                    <DropdownButton variant="light" id="dropdown-basic-button" title="1"
                    >
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                      <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                      <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                      <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                      <Dropdown.Item href="#/action-8">8</Dropdown.Item>
                      <Dropdown.Item href="#/action-9">9</Dropdown.Item>
                      <Dropdown.Item href="#/action-10">10</Dropdown.Item>
                    </DropdownButton>
                  </p>
                  <p className="text-sm-start" ><Rating/></p>
                  
                </Navbar.Text>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Navbar.Brand>
        <br/>
      </Container>
    </Navbar>

    <Navbar>
      <Container>
        <Navbar.Brand>
          <Row>
            <Col sm={4}>
              <Image
                src="/images/jpgoods_61_345589.webp"
                alt="ao khoac"
                class="float-left"
                height="200px"
                href="#home"
              />
            </Col>
            <Col sm={4}>
              <Navbar.Collapse className="justify-content-top fs-6">
                <Navbar.Text>
                  <p className="text-sm-start fw-bold">Áo khoác nữ</p>
                  <p className="text-sm-start">Size: L</p>
                  <p className="text-sm-start">Giá: 1.250.000 vnd</p>
                  <p className="text-sm-start"> Số lượng
                    <DropdownButton variant="light" id="dropdown-basic-button" title="1"
                    >
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                      <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                      <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                      <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                      <Dropdown.Item href="#/action-8">8</Dropdown.Item>
                      <Dropdown.Item href="#/action-9">9</Dropdown.Item>
                      <Dropdown.Item href="#/action-10">10</Dropdown.Item>
                    </DropdownButton>
                  </p>
                  <p className="text-sm-start" ><Rating/></p>
                  
                </Navbar.Text>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Navbar.Brand>
        <br/>
      </Container>
    </Navbar>
</>
    
    
  );
}

export default CartItems;
