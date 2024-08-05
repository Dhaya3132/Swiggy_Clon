import './App.css'
import Home from './Components/Home';
import { SwiggyCorporate } from './Components/SwiggyCorporate';
import { Searchtab } from './Components/Searchtab';
import { Offers } from './Components/Offers';
import { Help } from './Components/Help';
import { SignIn } from './Components/SignIn';
import { Cart } from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';


export const cartContext = createContext()

function App() {
  const [cart, setCart] = useState([]);
  const theme = useSelector(state => state.ToggleTheme)
  return (
    <div className={`font-poppins ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <cartContext.Provider value={{cart,setCart}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/corporate' element={<SwiggyCorporate />}></Route>
            <Route path='/search' element={<Searchtab />}></Route>
            <Route path='/offer' element={<Offers />}></Route>
            <Route path='/help' element={<Help />}></Route>
            <Route path='/signin/:userId' element={<SignIn />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  )
}
export default App
