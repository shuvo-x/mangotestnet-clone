import React from 'react';
import { Link } from 'react-router-dom';
import './PointTask.css';

const PointTask = ({account, setAccount}) => {

  console.log(account);
  return (
    <div className='container'>
       <h2>Join Maango to earn points</h2>
       <div className='wallet-task'>
           <p>Get Started</p>
           <button>{account ? `${account.slice(0,7)+"..."+account.slice(39)}` : "Connect Wallet"}</button>
       </div>
       <div className='twitter-task'>
         <p>Bind your Twitter account and follow our Mango Network to stay up to date with the latest developments and <br/>important announcements on the Mango platform</p>
         <button>Connect Twitter</button>
       </div>
       <div className='discord-task'>
        <p>Join our Discord community to communicate with other users,share experiences,and receive more information and technical<br/> support about Mango</p>
        <button>Connect Discord</button>
       </div>
       <div className='telegram-task'>
          <p>Join our telegram group to engage with members of the Mango community around the world for discussions<br/> and events</p>
          <button>Join a telegram group</button>
       </div>
       <div className='referal-task'>
        <p>When registering or participating in the event,please enter the referral code you received in order to<br/> take advantage of special offers or participate in the incentive program. (not required)</p>
        <button>J</button>
        <button>C</button>
        <button>G</button>
        <button>F</button>
        <button>U</button>
        <button>F</button>
       </div>
       <div className='joinNow-task'>
         <Link to='/events'>Join Now</Link>
       </div>
       <div className='agreement-task'>
         <input class='check-box' type='checkbox'/>
         <p>I have read and understood the</p>
       </div>
    </div>
  )
}

export default PointTask