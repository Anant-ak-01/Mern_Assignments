import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg nav-color  rounded-2">
  <div className="container-fluid" >
    <NavLink className="navbar-brand text-light mx-2 pt-2" to="#">Port<span>folio</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-auto pt-2">
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold px-4" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold px-4" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold px-4" to="/Skills">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold px-4" to="/Projects">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 fw-bold px-4" to="/Contact">Contact</NavLink>
        </li>
      </ul>
       <div className="icon-nav mx-2">
            <ul>
                <li><a href="https://www.linkedin.com/in/anant-kashyap-8193b3420/" target="_blank"><i className="fa fa-linkedin mx-2"></i></a></li>
                <li><a href="https://github.com/Anant-ak-01/Mern_Assignments" target="_blank"><i className="fa fa-github mx-2"></i></a></li>
                <li><a href="https://www.instagram.com/a_n_a_n_t_.01" target="_blank"><i className="fa fa-instagram mx-2"></i></a></li>
            </ul>
        </div>
    </div>

  </div>
</nav>
  )
}

export default Navbar
