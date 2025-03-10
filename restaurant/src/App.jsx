import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { data, Link, Route, Routes } from 'react-router-dom';
import Menu from './Pages/Menu';
import Order from './Pages/Order';
import Reservation from './Pages/Home/Reservation';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Profile from './Pages/Home/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp'
import Featured from './Components/FeaturedItems/Featured';
import Cart from './Components/Cart/Cart';

const getUser = () => 
{
  fetch("/api/user")
  .then(res => res.json())
  .then(json => console.log(json))
}




const App = () => {
  return (
    <div className='container'>
      <Navbar/>
     
      
      <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/Menu' element={<Menu/>}></Route>
          <Route path='/Order' element={<Order/>}></Route>
          <Route path='/Reservation' element={<Reservation/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          
          
      </Routes>
      

    </div>
    
    

   
  )
}

export default App
