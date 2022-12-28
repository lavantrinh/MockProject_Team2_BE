import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function ProductInfo(props) {
    return (
        <div className='mx-4 px-4 mt-5'>
            <h4>Áo len nữ</h4>
            <h3 className='text-danger fw-bold'>980.000 vnd</h3>
               <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
               <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
            <i className="bi bi-star text-warning"></i>
            <br />
            <p className='mt-4 mb-0'> Lựa chọn màu sắc</p>
           
            <div key='inline-radio mt-0'>
            <Form.Check inline className='bg-danger text-danger px-4' label="3" type='radio' name='color'/>
            <Form.Check inline className='bg-warning text-warning px-4' label="3" type='radio' name='color'/>
            <Form.Check inline className='bg-success text-success px-4' label="3" type='radio' name='color' />
            <Form.Check inline className='bg-secondary text-secondary px-4' label="3" type='radio' name='color'/>
            </div>
            <div key='inline-radio'>
                <p className='mt-4 mb-0'> Lựa chọn size</p>
            <Form.Check inline className='px-4' label="XS" type='radio' name='color'/>
                <Form.Check inline className='px-4' label="S" type='radio' name='color' />
                <Form.Check inline className='px-4' label="M" type='radio' name='color' />
                <Form.Check inline className='px-4' label="L" type='radio' name='color' />
                 <Form.Check inline className='px-4' label="XL" type='radio' name='color'/>
            </div>
            <p>So how did the classical Latin become so incoherent? According to McClintock</p>
            <Form>
                 <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
              <Form.Label>Số lượng</Form.Label>
              <Form.Control type="number" name="firstName" value={1}/>
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
           
          </Row>
</Form>
             <Button variant="danger text-white mt-5"><i className="bi bi-cart3"></i> Thêm vào giỏ hàng</Button>
        </div>
    );
}

export default ProductInfo;