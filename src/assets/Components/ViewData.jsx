import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewData=()=>{

    const [studentData, setStudentData]= useState({});
    const {studentid} = useParams();
    

    useEffect(()=>{
        fetch("https://my-json-db-wggi.onrender.com/student/" + studentid)
        .then((res)=>res.json())
        .then((res)=>setStudentData(res))
        .catch((err)=>console.log(err.message))

    },[]);


    return(
        <>
        <div className="container">
            <h2>Student Details</h2>
            
                {
                  studentData && <div className="details">
                       <div>
                           <p><strong>ID : </strong>{studentData.id}</p>
                           <p><strong>Name : </strong>{studentData.name}</p>
                           <p><strong>Place : </strong>{studentData.place}</p>
                           <p><strong>Phone No. : </strong>{studentData.phone}</p>
                       </div>
                       </div>
                }
           
            <Link to="/" className="btn btn-danger">Back</Link>
        </div>
        </>
    );
}
export default ViewData;