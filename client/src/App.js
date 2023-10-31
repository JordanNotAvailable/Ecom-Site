import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Cart from './pages/Cart/Cart'
import Shirts from './pages/Shirts/Shirts'
import Jumpers from './pages/Jumpers/Jumpers'
import Shorts from './pages/Shorts/Shorts'
import Pants from './pages/Pants/Pants'
import Shoes from './pages/Shoes/Shoes'
import Accessories from './pages/Accessories/Accessories'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/ecom-site" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shirts" element={<Shirts/>} />
          <Route path="/jumpers" element={<Jumpers />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/accessories" element={<Accessories />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
