import {React} from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCompass } from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../componentes/Sidebar'

function Navbar(){

    const [toggle, setToggle] = useState(false);

    const Toggle = () => {
      if (toggle === true) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    };

    return (
        <div className="container-fluid  bodyDashboard ">
        <div className="row ">
          {toggle && (
            <div
              className="col-4 col-md-2 vh-100 position-fixed"
              style={{ backgroundColor: "#572AB0" }}
            >
              <Sidebar />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
              <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
                {toggle ? (
                  <FontAwesomeIcon
                    className="navbar-brand fs-4 ml-1"
                    icon={faBars}
                    onClick={Toggle}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="navbar-brand fs-4 ml-1"
                    icon={faCompass}
                    onClick={Toggle}
                  />
                )}

                <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <FontAwesomeIcon
                    className="navbar-brand fs-4 ml-1"
                    icon={faBars}
                  />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="#"
                        id="dropdownId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Admin
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownId"
                      >
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Setting
                        </a>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
          </div>
        </div>
      </div>
 
    )
}

export default Navbar