import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            // .then(() => { })
            // .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 h-28 mb-4 px-20 bg-sky-200 text-orange-500">
            <div className="navbar-start text-5xl font-extrabold">
                CoolShop
            </div>

            <div className="navbar-center flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/addProduct">Add Product</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <>

                    <button onClick={handleLogOut}>Log out</button>
                </>
                    : <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;