import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link }from 'react-router';
import {getPatientInfo} from 'C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/reduxFiles/req.js';

class PatientProfile extends Component {
   constructor(props) {
    super(props);
    this.state = {
      name: '',
      age:'',
      disease: '',
      PatientID:''
      
  };
}
componentDidMount() {
 getPatientInfo(this.props.params.PatientID).then(results => {
      this.setState({
      PatientID: results.data.patientId,
        name: results.data.patientname,
        age:results.data.patientage,
        disease:results.data.disease
        
      })
    });
  }
render() {
  
return(
<div>
        <h3>Patient Profile: </h3>
        <div>Name: {this.state.name}</div>
        <div>Age: {this.state.age}</div>
        <div>Disease: {this.state.disease}</div>

</div>
);
}

}
// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}
// Wrap the component to inject dispatch and state into it
export default connect(select)(PatientProfile);