import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams,  } from "react-router-dom";


function Update() {
  const [touch,setTouch]= useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  const {id} = useParams();
  const navigate = useNavigate();

  

  useEffect(()=>{
    axios.get('http://localhost:3000/users/'+ id, )
    .then(res=> {
      setValues(res.data)
    })
    .catch(err=> console.log(err))
  },[])
  const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:3000/users/' + id, values)
    .then(res=> {
      console.log(res); navigate("/")
    })
    .catch(err=> console.log(err))
  }
  // const [border,setBorder]= useState("2px solid blue")
  useEffect(()=>{
    if(
      values.name!==""&&
      values.email!==""&&
      values.phone!==""

      ){
        setTouch(true)
       
      }
      else{
        setTouch(false)
        
      }
  },[values.email,values.name,values.phone]) 

  
  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100 bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name" value={values.name}  onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Enter Email" value={values.email} onChange={handleChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="name">Phone:</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter Phone Number" value={values.phone} onChange={handleChange}/>
            <button disabled={!touch} className="btn btn-success">Update</button>
            <Link to="/" className="btn btn-primary ms-3">Back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update