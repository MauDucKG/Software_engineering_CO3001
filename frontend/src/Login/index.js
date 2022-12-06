import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./index.css";

function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <main class="form-signin w-100 m-auto text-center mt-5">
            <form>
              <h1 class="h3 mb-3">UWC 2.0</h1>

              <div class="form-floating">
                <input
                  type="username"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Tài khoản</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Mật khẩu</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Đăng nhập
              </button>
            </form>
          </main>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
