import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";

import { Container, Header, Button, Form  } from 'semantic-ui-react'

class Signup extends React.Component {
  
  state = {
    credentials: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
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
      .post('/signup', this.state.credentials)
      .then(res => {
        console.log("Successful signup");
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log('Oh-oh, something wrong', err));
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
            name="firstName"
            value={this.state.credentials.firstName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={this.state.credentials.lastName}
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

export default Signup;
