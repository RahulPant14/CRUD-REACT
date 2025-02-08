import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const EditData=()=>{

         const [id, setId]= useState("")
            const [name, setname]= useState("")
            const [place, setplace]= useState("")
            const [phone, setphone]= useState("")
            const [validation, setValidation]=useState(false)
            const {studentid} = useParams();
            const navigate = useNavigate();
        
    
        useEffect(()=>{
            fetch("https://my-json-db-wggi.onrender.com/student/" + studentid)
            .then((res)=>res.json())
            .then((res)=>{
                setId(res.id);
                setname(res.name);
                setplace(res.place);
                setphone(res.phone)
            })
            .catch((err)=>console.log(err.message))
    
        },[]);

        const handleSubmit=(e)=>{
            e.preventDefault();
            const StudentData={id,name,place,phone}
            fetch("https://my-json-db-wggi.onrender.com/student/" + studentid,{
                method:"PUT",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(StudentData)
                
            })
            .then((res)=>{
                alert("Data Succefully Updated")
                navigate("/")
            })
            .catch((err)=>console.log(err))
        }

    

    return(
        <>
        <div className="container">
            <h2>Edit Student Details</h2>
           <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input className="d-block w-100" type="text" id="id" name="id" value={id} required  onChange={(e)=>{setId(e.target.value)}} onMouseDown={()=>{setValidation(true)}} />
                {id.length === 0 && validation && <span className="err-msg">Please Enter Id</span>} 
                <label htmlFor="name">Name:</label>
                <input className="d-block w-100" type="text" id="name" name="name" value={name} required  onChange={(e)=>{setname(e.target.value)}} onMouseDown={()=>{setValidation(true)}}/>
                {name.length === 0 && validation && <span className="err-msg">Please Enter Your Name</span>} 
                <label htmlFor="place">Place:</label>
                <input className="d-block w-100" type="text" id="place" name="place" value={place} required  onChange={(e)=>{setplace(e.target.value)}} onMouseDown={()=>{setValidation(true)}}/>
                {place.length === 0 && validation && <span className="err-msg">Please Enter Your Place</span>} 
                <label htmlFor="phone">Phone:</label>
                <input className="d-block w-100" type="text" id="phone" name="phone" value={phone} required onChange={(e)=>{setphone(e.target.value)}} onMouseDown={()=>{setValidation(true)}}/>
                {phone.length === 0 && validation && <span className="err-msg">Please Enter Your Phone No.</span>} 
                <button type="submit" className="btn btn-primary mt-3">Update</button>
                <Link className="btn btn-danger mt-3" to="/">Back</Link>
            </form>
            
        </div>
        </>
    );
}
export default EditData;