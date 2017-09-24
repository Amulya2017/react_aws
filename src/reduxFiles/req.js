import axios from 'axios';


// function getDoctorById(){
//   return axios.get('http://localhost:8080/doctors/webapi/myresource/get/'+docId);
// }

function getPatientInfo(PatientID){
  return axios.get('http://localhost:8080/doctors/webapi/myresource/patients/'+PatientID);
}
export {getPatientInfo}
