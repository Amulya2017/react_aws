import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router';
import store from '../reduxFiles/store';
import Patient from './Patient';
//import action from './reduxFiles/actions'
import Button from './Button';
// import doctor from 'C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/doctor.png';


// var sectionStyle = {
// alignItems: 'center',
//    justifyContent: 'center',
//   resizeMode:'contain',
//   position: 'absolute',
//   height: 'auto',
//   top: 0,
//   left: 0,
//   bottom: 0,
//   right: 0,
//   backgroundImage: "url(" +  doctor  + ")"
// };



//  var divStyle = {
//    backgroundImage: 'url(' + doctor + ')',
//    width: '300px',
//    height: "400px",
//    justifyContent: 'center',
//    alignItems: 'center',
//    resizeMode: 'cover',
//  };
class Logged extends Component{
    constructor(props){
        super(props);

        this.state = {

            Treatments : [],
            PatientID:0
            
            
        };
    }

    componentDidMount(){
      let isLogged = store.getState().loginReducer.isLogged;
      
      console.log('isLogged '+ isLogged);
      let docId = 0;
      if (isLogged)  
      docId= store.getState().loginReducer.id;

      console.log('test' +docId);
        axios.get('http://localhost:8080/doctors/webapi/myresource/get/'+docId).then((results) => {
           // let all = results.data[0];
            // console.log("1111111111"+all);
            // let test = [];
            // test.push(all);
            // console.log('2222222'+test);
            this.setState({

                Treatments:results.data,
                
                           })

           
        }).catch(e =>{
         console.log(e);

         })
    }

    render(){
            let Treatments=this.state.Treatments;
            console.log('test2'+Treatments);
        return(
          // <section style={ sectionStyle }>
           
          <div>

            
                


              
          <h3> Treatment Information: </h3>
          {/*<div><ul><li>TreatmentID: {this.state.TreatmentID}</li></ul></div>
                  <div><ul><li>DoctorID: {this.state.DoctorID}</li></ul></div>
                  <div><ul><li>PatientsID: {this.state.PatientsID}</li></ul></div>
                  <div><ul><li>DiagInfo: {this.state.DiagInfo}</li></ul></div>
                     <div><ul><li>DiagGrade: {this.state.DiagGrade}</li></ul></div>*/}

                     {Treatments.map(Treatment=>
                        
                             
                         <ul>
                            <li>TreatmentID: {Treatment.treatId}</li>
                             <li>Diagnosis: {Treatment.diagnosis}</li>
                             <li>Grade: {Treatment.grade}</li>
                             <li>History: {Treatment.history}</li>
                            
                            
                          <Patient PatientID={Treatment.patId}/> 
                          </ul>
                     
                        
                     
                         
                     )}

                     
            </div>
            //  </section>

        );
    }
}

export default Logged;