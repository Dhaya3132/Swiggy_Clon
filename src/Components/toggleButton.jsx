import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Slice/toggleTheme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function ToggleButton(){
    const dispatch = useDispatch();
    const theme = useSelector(state => state.ToggleTheme);
    console.log(theme);
    

    return (
        <button onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? <FontAwesomeIcon icon={faSun} size="xl" style={{color: "#FFD43B",}} /> : <FontAwesomeIcon icon={faMoon} size="xl" style={{color: "#FFD43B",}} /> }
        </button>
    )
}

export default ToggleButton;