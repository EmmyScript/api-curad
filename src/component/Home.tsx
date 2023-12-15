import axios from "axios";
import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import { IuserArr, } from "./Create";
import Navbar from "./Navbar";
import { userInterface } from "./Read";

// npm run jsonserver
const Home = () => {
  
  const [data, setData] = useState<IuserArr | any>([]);

  /*
  const formData = {

    id:data.id,
    name: data.name,
    username: data.username,
    email: data.email,
   
    address:{
       street: data.street,
      suite: data.suite,
      city: data.city,
      zipcode: data.zipcode,

      geo: {
        lat: data.lat,
        lng: data.lng,
      }
    },
    phone: data.phone,
    website: data.website,
    
    company: {
      name: data.name,
      catchPhrase: data.catchPhrase,
      bs: data.bs,
    },
  }
  */

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);

  console.log(data)
  const handleDelete = (id: any) => {
    const confirm = window.confirm("would you like to Delete?");
    if(confirm){
      axios.delete("http://localhost:5000/users/" +id)
      .then(_res =>{
        location.reload()

      }).catch(err => console.log(err));
    }
  }
  return (
    <>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        
      <div className="">
        <div className=""></div>
        <h2 className="text-center">List of Users </h2>
        <div className=" container-fluid ">
          <div className="d-flex juustify-content-end">
            <Link to="/create" className="btn btn-success">
              Add +{" "}
            </Link>
          </div>
          <div className="table-responsive-sm">
          <table className="table  bg-dark">
            <thead>
              <tr>
                <th className="primary">ID</th>
                <th className="secondary">Name</th>
                <th className="info">UserName</th>
                <th className="danger">Email</th>
                
                <th className="warning">Street</th>
                <th className="success">Suite</th>
                <th className="dark">City</th>
                <th>Zipcode</th>
                <th>Lat</th>
                <th>Lng</th>
                <th>Phone</th>
                <th>Website</th>
                
                
                <th>CatchPhrase</th>
                <th>Bs</th>
                <th>Acion</th>
                <th></th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {data?.map((d:userInterface) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>{d.street}</td>
                  <td>{d.suite}</td>
                  <td>{d.city}</td>
                  <td>{d.zipcode}</td>
                  <td>{d.lat}</td>
                  <td>{d.lng}</td>
                  <td>{d.phone}</td>
                  <td>{d.website}</td>
      
                  <td>{d.catchPhrase}</td>
                  <td>{d.bs}</td>
                  
                  <td><Link to = {`/read/${d.id}`} className="btn btn-sm btn-primary">Read</Link></td>
                    <td>
                    <Link to = {`/update/${d.id}`} className="btn btn-sm btn-primary">Edit</Link>
                    </td>
                    <td>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(d.id)}>Delete</button>
                  </td>
                  

                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    <div className="col-md-2"></div>
      </div>
      </div>
    </>
  );
};

export default Home;
