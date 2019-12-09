import React, { Component, Fragment } from 'react';
import './index.scss'
import InputForm from '../InputForm/index'

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '' 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    e.persist();
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.password === this.state.confirmPassword){ 
      alert('password correct....')
    } else alert('incorrect...password does not match')
  }

  render() {
    return (
      <Fragment>
        <div className ='container md-700px'>
          <h4>Sign Up</h4>
          <form onSubmit ={this.handleSubmit}>
            <div className = 'form-col'>
              {/* <input value = {this.state.firstName} onChange = {this.handleChange.bind(this)} id='firstName' /> */}
              <InputForm 
                inputType = 'text'
                labelText = 'First Name'
                placeholder="First Name"
                id = "firstName"
                autoComplete="off"
                name = 'firstname'
                value = {this.state.firstName}
                onChange = {this.handleChange}
              />
              <InputForm 
                inputType = 'text'
                labelText = 'Last Name'
                placeholder="Last Name"
                id = "lastName"
                autoComplete="off"
                name = 'lastname'
                value = {this.state.lastName}
                onChange = {this.handleChange}
              />
              <InputForm 
                inputType = 'email'
                labelText = 'Email'
                placeholder="johndoe@example.com"
                id = "email"
                autoComplete="off"
                name = 'email'
                value = {this.state.email}
                onChange = {this.handleChange}
              />
              <InputForm 
                inputType = 'password'
                labelText = 'Password'
                placeholder="Password"
                id = "password"
                autoComplete="off"
                name = 'Password'
                value = {this.state.password}
                onChange = {this.handleChange}
              />
              <InputForm 
                inputType = 'password'
                placeholder="Confirm Password"
                id = "confirmPassword"
                labelText = 'Confirm Password'
                name = 'Confirm Password'
                value = {this.state.confirmPassword}
                onChange = {this.handleChange}
              />
              <input type = 'submit' className="btn btn-primary input"/>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default SignUp;
