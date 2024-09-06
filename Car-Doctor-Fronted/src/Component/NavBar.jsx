import { NavLink } from 'react-router-dom';
import logo from '../../public/assets/logo.svg'

const NavBar = () => {

    const Links = (<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="">About</NavLink></li>
        <li><NavLink to="">Services</NavLink></li>
        <li><NavLink to="">Blog</NavLink></li>
        <li><NavLink to="">Contact</NavLink></li>
    </>)
    return (
        <div className='flex items-center justify-between'>
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <div className="hidden list-none space-x-8 text-xl text-[#413f3f] font-bold lg:flex">
                {Links}
            </div>
            <div>
                <button className='border text-[#FF3811] px-7 py-4 rounded-xl font-bold text-xl  border-[#FF3811]'>Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;