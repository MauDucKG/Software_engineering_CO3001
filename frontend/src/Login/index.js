import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './index.css'


function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
            <h1 class="h3 mb-3 fw-normal text-center">UWC 2.0</h1>
            <MDBInput wrapperClass='mb-4' label='Tài khoản' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4' label='Mật khẩu' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Duy trì đăng nhập' />
            <a href="!#">Quên mật khẩu?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">Đăng nhập</MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;