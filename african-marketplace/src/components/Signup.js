import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";
import * as Yup from "yup";
import { Container, Header, Button, } from 'semantic-ui-react'
import { Form, Field, Formik, withFormik, FormikProps } from "formik";


/*
class Signup extends React.Component {

  state = {
    credentials: {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    }
  };

  handleChange = e => {
    const loginSchema = {
      username: Yup.object().shape({ username: Yup.string().required("Username required"), }),
      password: Yup.object().shape({ password: Yup.string().min(6, "Password must be at least 6 characters").required("Password required"), }),
      first_name: Yup.object().shape({ first_name: Yup.string().required("First name required"), }),
      last_name: Yup.object().shape({ last_name: Yup.string().required("Last name required"), }),
      email: Yup.object().shape({ email: Yup.string().email("Please enter a valid email address").required("Email required"), }),
    };

    loginSchema[e.target.name].isValid({ [e.target.name]: e.target.value })
      .then(valid => {
        if (valid) {
          this.setState({
            credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
            }
          });
        } else {
          console.log(valid);
        }
      })

  };

  login = e => {
    e.preventDefault();
    const loginSchema = Yup.object().shape({
      username: Yup.string().required("Username required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password required"),
      first_name: Yup.string().required("First name required"),
      last_name: Yup.string().required("Last name required"),
      email: Yup.string().email("Please enter a valid email address").required("Email required"),
    });
    console.log(this.state.credentials);
    loginSchema.isValid(this.state.credentials)
      .then(valid => {
        if (valid) {
          axiosWithAuth()
            .post('/signup', this.state.credentials)
            .then(res => {
              console.log("Successful signup");
              localStorage.setItem('token', res.data.payload);
              this.props.history.push('/dashboard');
            })
            .catch(err => console.log('Oh-oh, something wrong', err));
        } else {
          console.log("Is valid? ", valid);
        }
      })

  };


  render() {
    return (
      <Container text>
        <Header as='h2'>Welcome to the African Marketplace App!</Header>
        <Header as='h3'>Fill this from for new account</Header>
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
          <Form.Field>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={this.state.credentials.first_name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={this.state.credentials.last_name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Sign Up</Button>
        </Form>
      </Container>
    );
  }
};

*/

function Signup({ errors, touched }) {

  return (
    <Form>
      <label>
        Email:
      <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
      </label>
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
      <label>
        First Name:
      <Field type="text" name="first_name" placeholder="First Name" />
        {touched.first_name && errors.first_name && <p className="error">{errors.first_name}</p>}
      </label>
      <label>
        Last Name:
      <Field type="text" name="last_name" placeholder="Last Name" />
        {touched.last_name && errors.last_name && <p className="error">{errors.last_name}</p>}
      </label>
      <button type="submit">Login</button>
    </Form >

  );
}

const SignupForm = withFormik({
  mapPropsToValues({ username, password, email, first_name, last_name }) {
    return {
      username: username || "",
      password: password || "",
      email: email || "",
      first_name: first_name || "",
      last_name: last_name || ""
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(6, "Password must be at least six characters").required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("Full name is required"),
    last_name: Yup.string().required("Full name is required")
  }),
  handleSubmit(values, { props, setErrors }) {
    if (!values.username) {
      setErrors({ username: "Username is required." });
    } else if (!values.username) {
      setErrors({ password: "Password is required" });
    } else if (values.password && values.password.length < 6) {
      setErrors({ password: "Password must be at least six characters" })
      //} else if (this.validationSchema.validateAt({ email:  })) {
      // setErrors({ email: "Please enter a valid email" });
    } else if (!values.first_name) {
      setErrors({ first_name: "First name is required" });
    } else if (!values.last_name) {
      setErrors({ last_name: "Last name is required" })
    } else {
      console.log("In else clause");

      axiosWithAuth()
        .post('/signup', values)
        .then(res => {
          console.log("Successful sign up");
          localStorage.setItem('token', res.data.payload)
        }).then(() => {
          console.log(props);
          props.history.push('/dashboard');
        }).catch(err => console.log('Oh-oh, something wrong', err));
    }
  }
})(Signup);

export default SignupForm;


/*
export default Signup;
*/