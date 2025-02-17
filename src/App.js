import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PointTask from "./components/pointTask/PointTask";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import Events from './components/events/Events';


const App = () => {
  const [account, setAccount] = useState(null);

  return (
   <Router>
     <Navbar account={account} setAccount={setAccount}/>
     <Routes>
         <Route path='/' element={<><HomePage /> {account && <PointTask account={account} setAccount={setAccount}/>}</>}/>
         <Route path='/events' element={<Events />} />
     </Routes>
   </Router>
  ) 
};

export default App;


