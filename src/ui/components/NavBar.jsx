import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const navigate = useNavigate();
    const { state, logout } = useContext(AuthContext);
    const { user } = state;


    const HundleLogin = () => {

        logout();

        navigate('/login', {
            replace: true
        })
    }


    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => (isActive) ? "nav-item nav-link active" : "nav-item nav-link"}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive) ? "nav-item nav-link active" : "nav-item nav-link"}
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive) ? "nav-item nav-link active" : "nav-item nav-link"}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end align-items-center">
                    <ul className="navbar-nav ml-auto">
                        <span className='text-primary nav-item nav-link me-3'>{user?.name}</span>

                        <button
                            className='btn btn-outline-light'
                            onClick={HundleLogin}
                        >Logout</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

