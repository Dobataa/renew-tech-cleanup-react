import { Link } from "react-router-dom";

function Navigation() {
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo-img" src="./images/logo2.png" alt="logo" />
            </Link>
            <nav>
                <div>
                    <Link to="/solutions">Solutions</Link>
                </div>

                <div className="user">
                    <Link to="/add">Add Solution</Link>
                    <Link to="#">Logout</Link>
                </div>

                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;