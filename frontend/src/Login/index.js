import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showerr, setshowerr] = useState(false);
  useEffect(() => {
    document.title = "Login";
  });
  const nav = useNavigate();
  const onHandleLogin = () => {
    let request = {
      username,
      password,
    };
    axios.post("http://localhost:4000/user/login", request).then((respond) => {
      if (respond.data.user) {
        localStorage.setItem('user', respond.data.user)
        nav("/");
      } else {
        setshowerr(true)
      }
    });
  };

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
              {showerr && <div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Error: </strong>Sai thông tin đăng nhập</div>}
              {showerr || <></>}
              <div class="form-floating">
                <input
                  type="username"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setusername(e.target.value);
                    setshowerr(false)
                  }}
                />
                <label for="floatingInput">Tài khoản</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                    setshowerr(false)
                  }}
                />
                <label for="floatingPassword">Mật khẩu</label>
              </div>
            </form>
            <button
              class="w-100 btn btn-lg btn-primary"
              onClick={onHandleLogin}
            >
              Đăng nhập
            </button>
          </main>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
