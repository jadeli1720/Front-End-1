import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";

import { Container, Header, Button, Form  } from 'semantic-ui-react';
import { Link } from "react-router-dom";

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
        console.log("Successful signup", res);
        this.props.history.push('/');
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
          <Button primary type='submit'>Sign Up</Button>
          <Button secondary><Link to="/">Cancel</Link></Button>
        </Form>
    </Container>
  );
  }
};

export default Signup;