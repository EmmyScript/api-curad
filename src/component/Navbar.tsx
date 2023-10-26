

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <div className="row">
        <div className="table-responsive">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
    </div>
  </nav>
  )
}

export default Navbar