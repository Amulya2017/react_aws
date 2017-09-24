import React from 'react';
import { Link } from 'react-router';

function Patient(props)
{
     
    return(
        <div className="PatientID">
      <div>
           <Link to={'/patientprofile/'+ props.PatientID}>
             <ul>
                 <li>PatientID:{props.PatientID} </li>
            </ul> 
          </Link>
        </div>
    </div>
    )
}
export default Patient;