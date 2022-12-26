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
            <br />
            <p> Lựa chọn màu sắc</p>
           
            <div key='inline-radio'>
            <Form.Check inline className='bg-danger text-danger px-4' label="3" type='radio' name='color'/>
            <Form.Check inline className='bg-warning text-warning px-4' label="3" type='radio' name='color'/>
            <Form.Check inline className='bg-success text-success px-4' label="3" type='radio' name='color' />
            <Form.Check inline className='bg-secondary text-secondary px-4' label="3" type='radio' name='color'/>
            </div>
            <div key='inline-radio'>
                <p> Lựa chọn size</p>
            <Form.Check inline className='px-4' label="XS" type='radio' name='color'/>
                <Form.Check inline className='px-4' label="S" type='radio' name='color' />
                <Form.Check inline className='px-4' label="M" type='radio' name='color' />
                <Form.Check inline className='px-4' label="L" type='radio' name='color' />
                 <Form.Check inline className='px-4' label="XL" type='radio' name='color'/>
            </div>
            
        </div>
    );
}

export default ProductInfo;