import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>John's Recipe Site</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Recipe</Link>
         </div>
        </nav>
    );
}
 
export default Navbar;
