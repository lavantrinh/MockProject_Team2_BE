import React from "react";
import HeaderCart from "../Components/HeaderCart";

import CartItems from "../Components/CartItems";
import CartTotal from "../Components/CartTotal";
import { Col, Container, Row } from "react-bootstrap";

function CartContainer(props) {
  return (
    <div>
      <Container>
        <HeaderCart></HeaderCart>
        <Row>
          <Col sm={8}>
            <CartItems></CartItems>
          </Col>
          <Col sm={4}>
            <CartTotal></CartTotal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartContainer;
