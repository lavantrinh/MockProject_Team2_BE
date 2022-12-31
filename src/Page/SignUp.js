import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserApi from "../api/UserApi";
import {
  Button,
  Card,
  Container,
  Col,
  Row,
  Form,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [formState, setFormState] = useState(true);
  const [email, setEmail] = useState("");
  const [isDisableResendButton, setDisableResendButton] = useState(false);
  const resendEmailToActiveAccount = async () => {
    setDisableResendButton(true);
    await UserApi.resendEmailToActiveAccount(email);
    setDisableResendButton(false);
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  // const handleShowModal = () => setShowModal(true);
  let navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/signin");
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(50, "Must be less than 50 characters")
        .required("Required"),
      lastname: Yup.string()
        .max(50, "Must be less than 50 characters")
        .required("Required"),
      username: Yup.string()
        .min(6, "Must be between 6 and 50 characters")
        .max(50, "Must be between 6 and 50 characters")
        .required("Required")
        .test(
          "checkExistsUsername",
          "This username is already registered.",
          async (username) => {
            // call api
            const isExists = await UserApi.existsByUsername(username);
            // console.log(isExists);
            return !isExists;
          }
        ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .test(
          "checkExistsEmail",
          "This email is already registered.",
          async (email) => {
            // call api
            const isExists = await UserApi.existsByEmail(email);
            // console.log(isExists);
            return !isExists;
          }
        ),
      password: Yup.string()
        .min(6, "Must be between 6 and 50 characters")
        .max(50, "Must be between 6 and 50 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .min(5, "Must be 5 characters or greater")
        .required("Required")
        .when("password", {
          is: (value) => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Confirmed password does not match"
          ),
        }),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // call api
        await UserApi.create(
          values.firstname,
          values.lastname,
          values.username,
          values.email,
          values.password
        );

        // message
        setEmail(values.email);
        setShowModal(true);
      } catch (error) {
        // redirect page error server
        navigate("/error");
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div>
      <Container className="my-5 py-5">
        {/* Form sign up */}
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
                <Form onSubmit={formik.handleSubmit}>
                  {/* first name */}
                  <Form.Group controlId="firstname" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="firstname"
                      type="text"
                      placeholder="Enter your first name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div className="text-danger">
                          {formik.errors.firstname}
                        </div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>

                  {/* last name */}
                  <Form.Group controlId="lastname" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lastname"
                      type="text"
                      placeholder="Enter your last name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div className="text-danger">
                          {formik.errors.lastname}
                        </div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>

                  {/* username */}
                  <Form.Group controlId="username" className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.username && formik.errors.username ? (
                        <div className="text-danger">
                          {formik.errors.username}
                        </div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>

                  {/* email */}
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>

                  {/* password */}
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>

                  {/* confirmed password */}
                  <Form.Group controlId="confirmPassword" className="mb-3">
                    <Form.Label>Confirmed Password</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      placeholder="Enter confirmed password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword ? (
                        <div className="text-danger">
                          {formik.errors.confirmPassword}
                        </div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>

                  {/* button */}
                  <div className="mt-3"></div>
                  <Form.Group>
                    <div className="d-grid gap-2">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={(values) => setFormState(values)}
                        disabled={formik.isSubmitting}
                      >
                        Sign up now!!
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Modal active account */}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          {/* Header */}
          <Modal.Header closeButton>
            <Modal.Title>You need to confirm your account</Modal.Title>
          </Modal.Header>

          {/* Body */}
          <Modal.Body>
            <p className="mb-0">
              We have sent an email to <b>{email}</b>.
            </p>
            <p className="mb-0">Please check your email to active account.</p>
          </Modal.Body>

          {/* Footer */}
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={resendEmailToActiveAccount}
              disabled={isDisableResendButton}
            >
              Resend
            </Button>
            <Button variant="primary" onClick={redirectToLogin}>
              Log in
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

// export default withRouter(SignUp);
export default SignUp;
