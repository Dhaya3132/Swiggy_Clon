import './App.css'
import Home from './Components/Home';
import { SwiggyCorporate } from './Components/SwiggyCorporate';
import { Searchtab } from './Components/Searchtab';
import { Offers } from './Components/Offers';
import { Help } from './Components/Help';
import { SignIn } from './Components/SignIn';
import { Cart } from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='font-poppins'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/corporate' element={<SwiggyCorporate />}></Route>
          <Route path='/search' element={<Searchtab />}></Route>
          <Route path='/offer' element={<Offers />}></Route>
          <Route path='/help' element={<Help />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}
export default App
