import axios from "axios"
import { useState } from "react"
import AppInput from "./AppInput"
import { Link, useNavigate } from "react-router-dom"

export interface userInterface {

  id: string | number;
  username: string | number;
  email: string | number;
  phone: string | number;
  website: string | number;
  name:string;
  address:{
    
    street: string,
    suite:string,
    city:string,
    zipcode:string,
   
    geo:{
      lat: string,
      ing: string,
    }
  };

   company: {
    name:string,
    catchPhrase:string,
    bs:string
   }
}

export interface IuserArr{
  userInterface:[]


}

  const Create = () => {
    
  const [allValue, setAllValue] = useState<userInterface>({

     
    id:"",
    name:"",
    username:"",
    email:"",
    phone: "",
    website: "",
    
    address:{
      street:"",
      suite:"",
      city:"",
      zipcode:"",
      
      geo:{
       lat:"",
       ing:"",
      }
      
      
    },

    company: {
      name:"",
      catchPhrase:"",
      bs:"",

     }
    
  
  })
  const navigate = useNavigate();

  const handleSubmit =(e:any) =>{
    e.preventDefault();
    axios
      .post("http://localhost:5000/users", allValue)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err))
    
  }
  const handleValues = (e:any) =>{
    const value = e.target.value;
    const name = e.target.name;
    const data = {...allValue, [name]: value}
    setAllValue(data)
  }
 
  return (
    <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="title text-center mb-3">Add Users</div>
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
              value={allValue.address.street}
              onChange={handleValues}
            />
          </div>
          <div className="col-md-6">
            <AppInput
              type="text"
              label="suite"
              name="suite"
              value={allValue.address.suite}
              onChange={handleValues}
            />
          </div>
          <div className="col-md-6">
            <AppInput
              type="text"
              label="city"
              name="city"
              value={allValue.address.city}
              onChange={handleValues}
            />
          </div>
          <div className="col-md-6">
            <AppInput
              type="text"
              label="zipcode"
              name="zipcode"
              value={allValue.address.zipcode}
              onChange={handleValues}
            />
          </div>
          <div className="col-md-6">
            <AppInput
              type="number"
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
              label="catchphrase"
              name="catchphrase"
              value={allValue.company.catchPhrase}
              onChange={handleValues}
            />
          </div>
          <div className="col-md-6">
            <AppInput
              type="text"
              label="bs"
              name="bs"
              value={allValue.company.bs}
              onChange={handleValues}
            />
          </div>
          <div className="col-md-6">
          
          </div>
      
          <div className="col-md-6 mt-2 wt-5">
            <button type="submit" className="btn btn-success" >
              Submit
            </button>
            <Link to = "/" className="btn btn-primary ms-5 ">Back</Link>
            
          </div>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Create