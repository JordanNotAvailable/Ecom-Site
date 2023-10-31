import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Shirts from './pages/Shirts'
import Jumpers from './pages/Jumpers'
import Shorts from './pages/Shorts'
import Pants from './pages/Pants'
import Shoes from './pages/Shoes'
import Accessories from './pages/Accessories'
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
