import React from 'react';
import axios from 'axios';

export default class SignupPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      username: '',
      password: ''
    }
  }

  signup(username, password){
    axios.post('/api/login', {username, password})
    .then(function(){
      //do session state stuff
    });
  }

  render(){
    return(
      <div className="center-block searchbox">
        Username: <input className="searchboxinput" type="text"onChange={(event) => {
            this.setState({username: event.target.value});
        }} value={this.state.username} value={this.state.username}/>
        <br/>
        Password: <input className="searchboxinput" type="text"onChange={(event) => {
            this.setState({password: event.target.value});
        }} value={this.state.password} value={this.state.password}/>

        <button className="searchsubmit" onClick={() => {this.signup(this.state.username, this.state.password)}}>Sign Up!</button>

      </div>
      )
  }
}