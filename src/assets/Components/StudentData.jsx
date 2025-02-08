
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentData=()=>{

    const [students, setStudents]=useState("")
    const navigate=useNavigate();

    const DisplayDetails=(id)=>{
        console.log(id)
        navigate("/student/view/"+id)
    }
    const EditDetails=(id)=>{
      console.log(id)
      navigate("/student/edit/"+id)
    }
    const DeleteData=(id)=>{
      if(window.confirm("Are you sure want to delete the DATA")){
        fetch("https://my-json-db-wggi.onrender.com/student/" + id,{
          method:"DELETE",          
      })
      .then((res)=>{
          alert("Data Succefully Deleted")
          window.location.reload();
      })
      .catch((err)=>console.log(err))
      }

    }

    useEffect(()=>{
        
        fetch('https://my-json-db-wggi.onrender.com/student')
        .then((res)=>res.json())
        .then((data)=> setStudents(data))
        .catch((err)=>console.log(err.message))
    },[])



    return(
        <>
        <div className="container">
          
       <div className="d-flex justify-content-between align-items-center">
          <h2>School Data</h2>  
       </div>    
      
        <div className="table-container">
            <Link to='/student/create' className="btn btn-primary mb-2">Add New Student</Link>
            <table className="text-center">
                <thead className="btn-primary text-white mb-2">
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                 </thead>
                 <tbody>
                    {
                        students && students.map((student, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{student.name}</td>
                                <td>{student.place}</td>
                                <td>{student.phone}</td>
                                <td className="d-flex justify-content-center">
                                    <button onClick={()=>DisplayDetails(student.id)} className="btn btn-primary">View</button>
                                    <button onClick={()=>EditDetails(student.id)} className="btn btn-info">Edit</button>
                                    <button onClick={()=>DeleteData(student.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                 </tbody>
           </table>
        </div>
        </div>
        </>
    );
}
export default StudentData;