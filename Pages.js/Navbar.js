import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavUserContext } from './RouterComponent';

const Navbar = () => {
    const {isAuth,setIsAuth} =useContext(NavUserContext);
    const navigate = useNavigate();

      const handleLogout=()=>{
        if(isAuth){
            localStorage.removeItem("username");
            setIsAuth(false);
        }
        navigate("/login");
      }  
    return (
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
                                <Link to="/" className='items'>Home</Link>
                            </li>
                            {
                                isAuth && (
                                    <>
                                        <li className="nav-item p-2">
                                            <Link to="/about" className='items' onClick={handleLogout}>About</Link>
                                        </li>
                                        <li className="nav-item p-2">
                                            <Link to="/contact" className='items'>Contact</Link>
                                        </li>
                                    </>
                                )
                            }
                            <li className="nav-item p-2">
                                <Link to="/login" className='items' onClick={handleLogout}>
                                    {isAuth ? "Logout" :"login"}
                                </Link>
                            </li>
                            {
                                !isAuth && (
                                    <li className="nav-item p-2">
                                        <Link to="/signup" className='items'>Signup</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;