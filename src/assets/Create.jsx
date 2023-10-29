import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


function Create() {
  

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const [touch,setTouch]= useState(false)
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
  },[values.name,values.email,values.phone])

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users', values)
    .then(res=> {
      console.log(res); navigate("/")
    })
    .catch(err=> console.log(err))
  }
  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100 bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={handleChange}/>
          </div>

          <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={handleChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="name">Phone:</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter Phone Number" onChange={handleChange}/>
            <button disabled={!touch} className="btn btn-success">Submit</button>
            <Link to="/" className="btn btn-primary ms-3">Back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create