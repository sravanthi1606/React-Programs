import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item p-2">
                                <Link to="/home" className='items'>Home</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to="/" className='items'>About</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to="/contact" className='items'>Contact</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to="/login" className='items'>Login</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link to="/sign" className='items'>SingIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;