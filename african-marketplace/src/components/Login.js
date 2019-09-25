import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Header, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

/*class Login extends React.Component {
  
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  
  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        console.log("Successful login", res);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log('Oh-oh, something wrong', err));
  };

  
  render() {
  return (
    <Container text>
      <Header as='h2'>Welcome to the African Marketplace App!</Header>
      <Header as='h3'>Fill this from for access</Header>
      <Form onSubmit={this.login}>
        <Form.Field>
        <label>Login</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
        <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </Form.Field>
          <Button primary type='submit'>Log In</Button>
          <Button secondary><Link to="/signup">Sign Up</Link></Button>
        </Form>
    </Container>
  );
  }
};
*/

const LoginForm = ({ values, errors, touched, isSubmitting }) => {


  return (





    <Form>
      <label>
        Username
        </label>
      <Field
        type="text"
        name="username"
      />
      {touched.username && errors.username && <p className="error">{errors.username}</p>}

      <label>
        Password
        </label>
      <Field
        type="password"
        name="password"
      />
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}








      <Button primary type='submit' disabled={isSubmitting}>Login</Button>
      <Button secondary><Link to="/signup">Sign Up</Link></Button>
    </Form >





  );
}



const Login = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",

    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),

  }),



  handleSubmit(values, { props, setErrors }) {
    //event.preventDefault();
    if (!values.username) {
      setErrors({ username: "Username is required." });
    } else if (!values.password) {
      setErrors({ password: "Password is required" });
    } else {
      console.log("In else clause");

      axiosWithAuth()
        .post('/login', values)
        .then(res => {
          console.log("Successful login", res);
          props.history.push('/dashboard');
        })
        .catch(err => console.log('Oh-oh, something wrong', err));
    }
  },

})(LoginForm);


function LoginPageHeader(props) {
  return (
    <Container text>
      <Header as='h2'>Welcome to the African Marketplace App!</Header>
      <Header as='h3'>Complete this form to create a new account</Header>
      <Login {...props} />
    </Container>
  );
}






export default LoginPageHeader;