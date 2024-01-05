import { useEffect, useState } from "react"
import axios from "axios"
import { Link
} from "react-router-dom"

function Home() {
    const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=> {setData(res.data)})
    .catch(err=> console.log(err))



  },[])
  const handleDelete=(id)=>{
    
    const comfirm = window.confirm("would you like to delete?")
    if (comfirm){
      axios.delete('http://localhost:3000/users/'+  id)
    .then(res=> {console.log(res)})
    .catch(err=> console.log(err))
    location.reload()
    }
    else{
      alert("Your data is safe")
      
    }
    

  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-white vh-80 vw-100" >
      <h1 className="font-bold text-4xl">List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">Add +</Link>
        </div>
          <table className="table table-striped">
            
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
                {
                  data.map((d, i)=>(
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.phone}</td>
                      <td>
                        <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2 hover:bg-white hover:text-bold">Read</Link>
                        <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2 hover:bg-white hover:text-blue-500">Edit</Link>
                        <button onClick={()=>handleDelete(d.id)} className="btn btn-sm btn-danger hover:bg-white hover:text-red-500">Delete</button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>

          </table>
      </div>
    </div>
  )
}

export default Home