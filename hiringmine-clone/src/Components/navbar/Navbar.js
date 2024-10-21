import logo from '../../Assests/logo.png'
import './navbar.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate, Link } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const homepage = () => {
        navigate('/')
    }
    return (
        <div className="mainNav">
            
               <img onClick={homepage} src={logo} alt='HiringMineLogo' />
            
           
                <ul>
                    <li>About Us</li>
                    <li>People</li>
                    <li><Link to='/jobs'>Jobs</Link></li>
                    <li>Login</li>
                    <li>Join Now</li>
                    <li>Employee / Post Job</li>
                </ul>
            
        
                <button>
                    <DarkModeIcon />
                </button>
            
        </div>
    )
}
export default Navbar