import axios from "axios";
import { useState } from "react";
import AppInput from "./AppInput";
import { Link, useNavigate } from "react-router-dom";

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

export interface IuserArr {
  userInterface: [];
}

const Create = () => {
  const [allValue, setAllValue] = useState<userInterface>({
    id:"", 
    name: "",
    username: "",
    email: "",
   
      street: "",
      suite: "",
      city: "",
      zipcode: "",
        lat: "",
        lng: "",
        phone: "",
        website: "",
       companyname: "",
      catchPhrase: "",
      bs: "",
    
  });

  const formData = {

    id:allValue.id,
    name: allValue.name,
    username: allValue.username,
    email: allValue.email,
   
    address:{
       street: allValue.street,
      suite: allValue.suite,
      city: allValue.city,
      zipcode: allValue.zipcode,

      geo: {
        lat: allValue.lat,
        lng: allValue.lng,
      }
    },
    phone: allValue.phone,
    website: allValue.website,
    
    company: {
      name: allValue.name,
      catchPhrase: allValue.catchPhrase,
      bs: allValue.bs,
    },
  }
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData)
    axios
       .post("http://localhost:5000/users", formData)
      .then((res) => {
        console.log(res);
        navigate("/");
       })
       .catch((err) => console.log(err));
  };
  const handleValues = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name)
    const data = { ...allValue, [name]: value };
    setAllValue(data);
    console.log(data)
  };


  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="title text-center mb-3 bg-primary text-white">Add USERS</div>
            <div className="col-md-6">
              <AppInput
                type="number"
                label="id"
                name="id"
                value={allValue.id}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="name"
                name="name"
                value={allValue.name}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="username"
                name="username"
                value={allValue.username}
                onChange={handleValues}
              />
            </div>

            <div className="col-md-6">
              <AppInput
                type="text"
                label="email"
                name="email"
                value={allValue.email}
                onChange={handleValues}
              />
            </div>

            <div className="col-md-6">
              <AppInput
                type="text"
                label="street"
                name="street"
                value={allValue.street}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="suite"
                name="suite"
                value={allValue.suite}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="city"
                name="city"
                value={allValue.city}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="zipcode"
                name="zipcode"
                value={allValue.zipcode}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="lat"
                name="lat"
                value={allValue.lat}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="lng"
                name="lng"
                value={allValue.lng}
                onChange={handleValues}
              />
            </div>

            <div className="col-md-6">
              <AppInput
                type="text"
                label="phone"
                name="phone"
                value={allValue.phone}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="website"
                name="website"
                value={allValue.website}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="CompanyName"
                name="companyname"
                value={allValue.companyname}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="catchphrase"
                name="catchPhrase"
                value={allValue.catchPhrase}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6">
              <AppInput
                type="text"
                label="bs"
                name="bs"
                value={allValue.bs}
                onChange={handleValues}
              />
            </div>
            <div className="col-md-6"></div>

            <div className="col-md-6 mt-2 wt-5">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <Link to="/" className="btn btn-primary ms-5 ">
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
