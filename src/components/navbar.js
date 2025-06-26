import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand me-auto" to="/">Murakami</Link>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Murakami</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link
                                    className="nav-link mx-lg-2" to="/books">Books
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-lg-2" to="/quiz">Quiz</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="log-button" to="/login">Login</Link>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}
export default Navbar;