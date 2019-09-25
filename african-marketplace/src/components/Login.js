import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";

import { Container, Header, Button, Form  } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Login extends React.Component {
  
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

export default Login;