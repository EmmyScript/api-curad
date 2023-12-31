import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IuserArr, } from "./Create";

export interface userInterface {
 

  id: string | number
  name:string
  username: string
  email: string
  
    street: string
    suite: string
    city: string
    zipcode: string
      lat: string
      lng: string

      phone: string
      website: string
      companyname: string
    catchPhrase: string
    bs: string
  
}



const Read = () => {

  const [data, setData] = useState<IuserArr| any>([
    
    
  ]);
const {id} = useParams();
  useEffect(() => {
    
    axios
      .get("http://localhost:5000/users/" + id)
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-50 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-2 pt-3 pb-5 rounded">
        <h3 className="text-center bg-primary text-white ">DETAIL OF USERS</h3> 
        <div className="mb-2">
          <strong>id: {data.id}</strong>
        </div>

        <div className="mb-2">
          <strong>name: {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>username: {data.username}</strong>
        </div>
        <div className="mb-2">
          <strong>email: {data.email}</strong>
        </div>
        
        <div className="mb-2">
          <strong>street: {data.street}</strong>
        </div>
        <div className="mb-2">
          <strong>suite: {data.suite}</strong>
        </div>
        <div className="mb-2">
          <strong>city: {data.city}</strong>
        </div>
        <div className="mb-2">
          <strong>zipcode: {data.zipcode}</strong>
        </div>
        <div className="mb-2">
          <strong>lat: {data.lat}</strong>
        </div>
        <div className="mb-2">
          <strong>lng: {data.lng}</strong>
        </div>

        <div className="mb-2">
          <strong>phone: {data.phone}</strong>
          </div>
          <div className="mb-2">
          <strong>website: {data.website}</strong>
        </div>
        <div className="mb-2">
          <strong>companyname: {data.companyname}</strong>
        </div>
        <div className="mb-2">
          <strong>catchPhrase: {data.catchPhrase}</strong>
        </div>
        <div className="mb-2">
          <strong>bs: {data.bs}</strong>
        </div>
        <div className="mb-2">
        <Link to = {`/update/${id}`} className="btn btn-success" >Edit</Link>
        <Link to = "/" className="btn btn-primary ms-3">Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Read;