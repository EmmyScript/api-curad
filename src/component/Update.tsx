import { Link, useNavigate, useParams } from "react-router-dom";
import AppInput from "./AppInput";
import axios from "axios";
import { useEffect, useState } from "react";



const Update = () => {
  const [allValue, setAllValue] = useState({
  
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
    
    
     
  })
  //const [data, setData] = useState<IuserArr | any>([]);
  
const {id} = useParams();
  useEffect(() => {
    
    axios
      .get("http://localhost:5000/users/" + id)
      .then((res) => setAllValue(res.data))

      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();

  const handleUpdate =(e:any) =>{
    e.preventDefault();
    axios
      .put("http://localhost:5000/users/"+id, allValue)
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
      <form onSubmit={handleUpdate}>
        <div className="row">
          <div className="title text-center mb-3 bg-primary text-white">UPDATE USERS</div>
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
              label="ing"
              name="ing"
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
              label="name"
              name="name"
              value={allValue.name}
              onChange={handleValues}
            />
          </div>
          <div className="col-md-6">
            <AppInput
              type="text"
              label="catchphrase"
              name="catchphrase"
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
          <div className="col-md-6">
          
          </div>
      
          <div className="col-md-6 mt-2 wt-5">
            <button type="submit" className="btn btn-success" >
              UPDATE
            </button>
            <Link to = "/" className="btn btn-primary ms-5 ">Back</Link>
            
          </div>
        </div>
      </form>
    </div>
  </div>

  )
    
}

export default Update