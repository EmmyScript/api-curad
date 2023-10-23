import axios from "axios";
import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import { IuserArr, userInterface } from "./Create";
import Navbar from "./Navbar";


const Home = () => {
  
  const [data, setData] = useState<IuserArr | any>([]);
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
      .then(res =>{
        location.reload()

      }).catch(err => console.log(err));
    }
  }
  return (
    <>
    <Navbar />
      <div className="d-flex flex-column justify-content-center  align-items-center mt-2 bg-light">
        <div className="col-md-2"></div>
        <div className=" col-md-10  bg-success p-4">
          <div className="d-flex juustify-content-end">
            <Link to="/create" className="btn btn-success">
              Add +{" "}
            </Link>
          </div>

          <table className="table table-striped ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
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
                  <td>{d.address.street}</td>
                  <td>{d.address.suite}</td>
                  <td>{d.address.city}</td>
                  <td>{d.address.zipcode}</td>
                  <td>{d.address.geo.lat}</td>
                  <td>{d.address.geo.lng}</td>
                  <td>{d.phone}</td>
                  <td>{d.website}</td>
      
                  <td>{d.company.catchPhrase}</td>
                  <td>{d.company.bs}</td>
                  
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
    </>
  );
};

export default Home;
