
interface  Apitype{
    label:string,
    type:string,
    onChange:any,
    name:string,
    value: string |number
}

const AppInput = ({label, type, onChange, name,value}: Apitype) => {
  return (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input type={type} className="form-control" name= {name} onChange={onChange} value={value} />
    </div>
  )
}

export default AppInput