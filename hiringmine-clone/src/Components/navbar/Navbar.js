import logo from '../../Assests/logo.png'
import './navbar.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate } from 'react-router-dom';
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
                    <li><a href='/jobs'>Jobs</a></li>
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