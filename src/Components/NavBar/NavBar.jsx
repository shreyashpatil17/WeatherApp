import "./navbar.css";
import logo from "../../Assets/logo.png";

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo"/>
                <h1>Weather App</h1>
            </div>
        </div>
    );
}

export default NavBar;