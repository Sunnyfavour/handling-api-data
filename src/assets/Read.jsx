import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function Read() {
  
  const [data, setData] = useState([])
  const {id} = useParams();
  console.log(id)
  console.log(data)
  useEffect(()=>{
    axios.get('http://localhost:3000/users/'+ id)
    .then(res=> {setData(res.data),console.log(res)})
    .catch(err=> console.log(err));
  }, [])
  return (
    <div className="vh-100 d-flex justify-content-center vw-100 align-items-center bg-light">
        <div className="bg-white border shadow px-5 pb-3 pt-5 rounded w-50">
          <h3>Details of User</h3>
          <div className="mb-2">
            <strong>Name: {data.name}</strong>
          </div>
          <div className="mb-2">
            <strong>Email: {data.email}</strong>
          </div>
          <div className="mb-3">
            <strong>Phone: {data.phone}</strong>
          </div>
          <Link to={`/update/${id}`} className="btn btn-success"  >Edit</Link>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </div>
    </div>
  )
}

export default Read