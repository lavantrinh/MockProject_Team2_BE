import React from 'react';
import Form from 'react-bootstrap/Form';
function ProductInfo(props) {
    return (
        <div className='mx-4 px-4 mt-5'>
            <h4>Áo len nữ</h4>
            <h3 className='text-danger fw-bold'>980.000 vnd</h3>
               <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
               <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-half text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            Lựa chọn màu sắc
            <div>
            <Form.Check width={5} className='bg-danger' label="3" type='radio' name='color'/>
            <Form.Check className='bg-warning' label="3" type='radio' name='color'/>
            <Form.Check className='bg-success' label="3" type='radio' name='color' />
            <Form.Check className='bg-secondary' label="3" type='radio' name='color'/>
            </div>
            
        </div>
    );
}

export default ProductInfo;