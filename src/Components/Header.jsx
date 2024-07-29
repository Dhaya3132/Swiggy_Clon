import swiggy from '../assets/swiggy-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="p-5 drop-shadow-md border border-solid border-b-2 border-slate-100">
            <nav className='flex justify-between'>
                <img src={swiggy} alt="logo" className='w-20 h-14' />
                <ul className='flex justify-end items-center gap-9 text-md font-normal text-slate-900'>
                    <li className='flex gap-3 items-center hover:text-orange-400'>
                        <FontAwesomeIcon icon={faFile} size="lg" />
                        <h4>Swiggy Corporate</h4>
                    </li>
                    <li className='flex gap-3 items-center hover:text-orange-400'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
                        <h4>Search</h4>
                    </li>
                    <li className='flex gap-3 items-center hover:text-orange-400'>
                        <FontAwesomeIcon icon={faPercent} size='lg' />
                        <h4>Offers</h4>
                    </li>
                    <li className='flex gap-3 items-center hover:text-orange-400'>
                        <FontAwesomeIcon icon={faHandshakeAngle} size='lg' />
                        <h4>Help</h4>
                    </li>
                    <li className='flex gap-3 items-center hover:text-orange-400'>
                        <FontAwesomeIcon icon={faUser} size='lg' />
                        <h4>Sign In</h4>
                    </li>
                    <li className='flex gap-3 items-center hover:text-orange-400'>
                        <FontAwesomeIcon icon={faCartShopping} size='lg' />
                        <h4>Cart</h4>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;