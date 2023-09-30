import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
    const navigate = useNavigate();
    function SignIn() {
        navigate('/signin')
    }
    return (
        <div className="mainNavbar">
            <nav className="navbar navbar-expand-lg  navbar_bg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="https://pixner.net/boleto/demo/assets/images/logo/logo.png" alt="boletoimage" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Home One</a></li>
                                    <li><a className="dropdown-item" href="#">Home Two</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movies
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Movie Grid</a></li>
                                    <li><a className="dropdown-item" href="#">Movie List</a></li>
                                    <li><a className="dropdown-item" href="#">Movie Details</a></li>
                                    <li><a className="dropdown-item" href="#">Movie Details2</a></li>
                                    <li><a className="dropdown-item" href="#">Movie Ticket Plan</a></li>
                                    <li><a className="dropdown-item" href="#">Movie Seat Plan</a></li>
                                    <li><a className="dropdown-item" href="#">Movie Checkout</a></li>
                                    <li><a className="dropdown-item" href="#">Movie Food</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Events</a></li>
                                    <li><a className="dropdown-item" href="#">Events Details</a></li>
                                    <li><a className="dropdown-item" href="#">Events Speaker</a></li>
                                    <li><a className="dropdown-item" href="#">Events Ticket</a></li>
                                    <li><a className="dropdown-item" href="#">Events Checkout</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sports
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sports</a></li>
                                    <li><a className="dropdown-item" href="#">Sports Details</a></li>
                                    <li><a className="dropdown-item" href="#">Sports Tickets</a></li>
                                    <li><a className="dropdown-item" href="#">Sports Checkout</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Apps Download</a></li>
                                    <li><a className="dropdown-item" href="/signin">Sign In</a></li>
                                    <li><a className="dropdown-item" href="/signup">Sign Up</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Single</a></li>

                                </ul>
                            </li>

                        </ul>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" >
                                    Contact
                                </a>

                            </li>
                            <button onClick={SignIn} className="btn btn-success">Join Us</button>

                        </ul>

                    </div>
                </div>
            </nav>
            <hr />
        </div>
    )
}

