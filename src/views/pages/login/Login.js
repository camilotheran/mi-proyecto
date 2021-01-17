import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "",password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    console.log(e);
    if (e.target.id === "user"){
      this.setState({ user: e.target.value });
    }
    
    if (e.target.id ===  "password"){
      this.setState({ password: e.target.value })
    }
    
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.state.user.length === 0 || this.state.password.length === 0) {
      console.log("Usuario o contrasenia estan vacios") ; 
      return;

    }

    const axios = require('axios');
    const user =  this.state.user;
    axios.post('http://test.elecsis.co/auth/', {
      user: this.state.user,
      pass: this.state.password
    })
    .then(function (response) {
      // console.log(response);

      if (response.data === "Usuario no válido"){
        console.log("El usuario o contraseña es invalido")
      }
      else{
        localStorage.setItem("token", response.data);
        localStorage.setItem("user", user);
        window.location.href = "/#dashboard";
      }

    
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput id="user" onChange={this.handleChange} value={this.state.user} type="text" placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput id="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="Password" autoComplete="current-password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton type="submit" color="primary" className="px-4">Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
} 

// const Login = () => {
 
// }

export default Login
