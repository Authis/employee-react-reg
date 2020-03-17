import 'core-js';
import React, { Component } from 'react';
import './Login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class dashboard extends Component {

  handleClick(event, history) {



   var apiBaseUrl = "http://localhost:5009/validateLogon"
   var payload={
      "username":this.state.username,
      "password":this.state.password
   }

   axios.post(apiBaseUrl,payload)
   .then(function (response){
     var res = response.data.statusMsg;
      alert(res);
      if(res === "SUCCESS"){
         history.push({
          pathname: '/dashboard',
          state:{
             username:payload.username,
             message:"Login Successfull Welcome to Employee Search Page"
          }
         })
      }else{
         history.push("/");
      }

   }).catch(function (error){
      console.log(error);
   })


  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {

    const buttonStyle = {
            color: '#000'
          };

    return (
      <div className="relcaldashboard">
        <MuiThemeProvider>
          <div>
            <Typography className="loginTitle" component="h2" variant="h3" gutterBottom>
              Employee Registration Capstone DEMO
            </Typography>

              <TextField
                hintText=""
                floatingLabelText="User ID"
                onChange={ (event, newValue) => this.setState({ username: newValue }) }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={ (event, newValue) => this.setState({ password: newValue }) }
              />
              <br />
              <RaisedButton className="submitButton" label="LOGIN" default={ true } style={ buttonStyle } onClick={ (event) => this.handleClick(event, this.props.history) } />


          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default withRouter(dashboard);
