import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
//import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const { user, login, logout } = useContext(UserContext);
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{user ? `HI ${user.name}` : `Welcome`}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        { user 
                            ? 
                            <>
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <button onClick={logout} className='btn btn-primary'>LogOut</button>
                            </>                         
                            :
                            <button onClick={login} className='btn btn-primary'>LogIn</button>
                        }
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar