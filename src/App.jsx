import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { createContext, useState } from 'react';
import Contact from './pages/Contact';
import Setting from './pages/Setting';
import Viewcart from './components/Viewcart';
import Ticketanimation from './components/Ticketanimation';
import Checkoutform from './components/CheckoutForm';
import Admindashboard from './components/Admindashboard'


export const MyContext = createContext();

function App() {
  const [user, setUser] = useState([]);
  const[addcart,setAddcart]=useState([])
  const[checkdel,setCheckdel]=useState([])
  const[product,setProduct]=useState([])


  return (
    <MyContext.Provider value={{ user, setUser,addcart,setAddcart,checkdel,setCheckdel,product,setProduct}}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/viewcart' element={<Viewcart/>}/>
          <Route path='/ticketani' element={<Ticketanimation/>}/>
          <Route path='/checkoutform' element={<Checkoutform/>}/>
          <Route path='/admindashboard' element={<Admindashboard/>}/>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
