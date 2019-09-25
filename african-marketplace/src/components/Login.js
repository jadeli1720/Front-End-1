import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";
import * as Yup from "yup";
import { Container, Header, Button } from 'semantic-ui-react'
import { Form, Field, Formik, withFormik, FormikProps } from "formik";

//class Login extends React.Component {
function Login({ errors, touched }) {

  return (
    < Form >
      <label>
        Username:
      <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && <p className="error">{errors.username}</p>}
      </label>
      <label>
        Password:
      <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
      </label>
      <button type="submit">Login</button>
    </Form >

  );
}

const LoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(6, "Password must be at least six characters").required("Password is required")
  }),
  handleSubmit(values, { props, setErrors }) {
    if (!values.username) {
      setErrors({ username: "Username is required" });
    } else if (!values.username) {
      setErrors({ password: "Password is required" });
    }
    else if (values.password && values.password.length < 6) {
      setErrors({ password: "Password must be at least six characters" })
    } else {
      //e.preventDefault();
      axiosWithAuth()
        .post('/login', values)
        .then(res => {
          console.log("Successful login");
          localStorage.setItem('token', res.data.payload)
        }).then(() => {
          console.log(props);
          props.history.push('/dashboard');
        }
        ).catch(err => console.log('Oh-oh, something wrong', err));

    }
  }
})(Login);

export default LoginForm;

/*
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
      console.log("Successful login");
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/dashboard');
    })
    .catch(err => console.log('Oh-oh, something wrong', err));

};


  render() {
    return (



      <Form>
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label>
          Terms of Service
          <Field type="checkbox" name="terms" />
          {touched.terms && errors.terms && <p className="error">{errors.terms}</p>}
        </label>
        <button type="submit">Add User</button>
      </Form>

















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
    <Button type='submit'>Log in</Button>
  </Form>
</Container>


export default Login;
*/