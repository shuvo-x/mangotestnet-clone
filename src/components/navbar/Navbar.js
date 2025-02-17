import React from 'react';
import { Link } from 'react-router-dom';
import WalletConnect from '../WalletConnect';
import './Navbar.css';

const Navbar = ({account, setAccount}) => {
  return (
    <div className='main-wrapper'>
       <div className='navItem-button'>
           <Link to='/'>Home Page</Link>
           <Link>Events</Link>
           <Link>Help</Link>
           <Link>Mango Wallet</Link>
       </div>
       <div className='wallet-button'>
         <WalletConnect account={account} setAccount={setAccount}/>
       </div>
    </div>
  )
}

export default Navbar