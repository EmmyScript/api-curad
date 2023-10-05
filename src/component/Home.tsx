import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IuserArr, userInterface } from "./Create";


const Home = () => {
  
  const [data, setData] = useState<IuserArr | any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);

  console.log(data)
  return (
    <>
      <div className="d-flex flex-column justify-content-center col-md-8 align-items-center mt-2 bg-light">
        <h1>List of Userssee</h1>
        <div className="w-75 rounded bg-white shado p-4">
          <div className="d-flex juustify-content-end">
            <Link to="/create" className="btn btn-success">
              Add +{" "}
            </Link>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                
                <th>street</th>
                <th>suite</th>
                <th>city</th>
                <th>zipcode</th>
                <th>lat</th>
                <th>ing</th>
                <th>phone</th>
                <th>website</th>
                
                <th>name</th>
                <th>catchPhrase</th>
                <th>bs</th>
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
                  <td>{d.address?.street}</td>
                  <td>{d.address.suite}</td>
                  <td>{d.address.city}</td>
                  <td>{d.address.zipcode}</td>
                  <td>{d.address.geo.lat}</td>
                  <td>{d.address.geo.ing}</td>
                  <td>{d.phone}</td>
                  <td>{d.website}</td>
                  
                  <td>{d.company.catchPhrase}</td>
                  <td>{d.company.catchPhrase}</td>
                  <td>{d.company.bs}</td>
                  
                  <td><Link to = {`/read/${d.id}`} className="btn btn-sm btn-primary">Read</Link></td>
                    <td>
                    <button className="btn btn-sm btn-primary">Edit</button>
                    </td>
                    <td>
                    <button className="btn btn-sm btn-danger">Delete</button>
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
