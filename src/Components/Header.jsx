import swiggy from '../assets/swiggy-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFile, faPercent, faHandshakeAngle, faUser, faCartShopping, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ToggleButton from './toggleButton';

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        console.log('Clicked');
        setOpen(!open)
    }

    return (
        <nav className="md:p-5 p-3 drop-shadow-md  border-solid border-b-2 border-slate-100 sticky top-0">
            <div className='md:flex justify-between items-center md:max-w-7xl mx-auto'>
                <div className='flex justify-between items-center'>
                    <img src={swiggy} alt="logo" className='w-20 h-14 mb-3' />
                    <ToggleButton />
                    <div className='md:hidden'>
                        <button onClick={handleMenu}>
                           { open ? <FontAwesomeIcon icon={faX} size="2xl" className='hover:text-orange-400' /> : <FontAwesomeIcon icon={faBars} size="2xl" /> }                        
                        </button>
                    </div>
                </div>

                <div className={`flex md:block justify-end ${open ? 'block' : 'hidden'}`}>
                    <ul className='md:flex md:item-center md:gap-6 md:text-md text-xl font-normal space-y-8 md:space-y-0'>
                        <Link to="/corporate">
                            <li className='flex gap-3 items-center hover:text-orange-400 mb-5 md:mb-0'>
                                <FontAwesomeIcon icon={faFile} size="lg" />
                                <h4>Swiggy Corporate</h4>
                            </li>
                        </Link>
                        <Link to="/search">
                            <li className='flex gap-3 items-center hover:text-orange-400 mb-5 md:mb-0'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
                                <h4>Search</h4>
                            </li>
                        </Link>
                        <Link to="/offer">
                            <li className='flex gap-3 items-center hover:text-orange-400 mb-5 md:mb-0'>
                                <FontAwesomeIcon icon={faPercent} size='lg' />
                                <h4>Offers</h4>
                            </li>
                        </Link>
                        <Link to="/help">
                            <li className='flex gap-3 items-center hover:text-orange-400 mb-5 md:mb-0'>
                                <FontAwesomeIcon icon={faHandshakeAngle} size='lg' />
                                <h4>Help</h4>
                            </li>
                        </Link>
                        <Link to="/signin">
                            <li className='flex gap-3 items-center hover:text-orange-400 mb-5 md:mb-0'>
                                <FontAwesomeIcon icon={faUser} size='lg' />
                                <h4>Sign In</h4>
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className='flex gap-3 items-center hover:text-orange-400 mb-5 md:mb-0'>
                                <FontAwesomeIcon icon={faCartShopping} size='lg' />
                                <h4>Cart</h4>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
