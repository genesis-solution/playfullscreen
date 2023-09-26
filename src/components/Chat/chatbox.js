import React, { useState } from 'react'

const Chatbox = (props) => {
   let input = "npub1nstrcu63lzpjkz94djajuz2evrgu2psd66cwgc0gz0c0qazezx0q9urg5l";
   input = input.replace("nostr:", "")

   const [show, setShow] = useState(false);

   return (
      <div>
         <div className={`chat-box ${show===true?'show':''}`} >
            <button type="button" className="btn chatbox-btn" onClick={() => setShow(!show)}>
               <img src={process.env.PUBLIC_URL + '/images/nostr-logo.png'} alt="logo" width={40}></img>
            </button>
            <div className="chat-panel">
               <div className='chat-container'>
                  <ul className='chat-items'>
                     <li className='other'>
                        <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"></img>
                        <div>
                           <p className='chat-name'>Marko</p>
                           <p className='chat-content'>Ups and downs are part of our journey. Dont get shaken out 🤞</p>
                        </div>
                     </li>
                     <li className='mine'>
                        <div>
                           <p className='chat-content'>This is the best prize you can get</p>
                        </div>
                     </li>
                     <li className='mine'>
                        <div>
                           <p className='chat-content'>We are steady like a rock papa</p>
                        </div>
                     </li>
                     <li className='other'>
                        <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"></img>
                        <div>
                           <p className='chat-name'>Justin Smith</p>
                           <p className='chat-content'>Be patient with the process and reap the results later ❤️❤️❤️</p>
                        </div>
                     </li>
                     <li className='mine'>
                        <div>
                           <p className='chat-content'>Tip broadcaster!</p>
                        </div>
                     </li>
                     <li className='mine'>
                        <div>
                           <p className='chat-content'>I tried to make a stream for that day.</p>
                        </div>
                     </li>
                     <li className='other'>
                        <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"></img>
                        <div>
                           <p className='chat-name'>Clarissa</p>
                           <p className='chat-content'>that's right, I used to be like that when I first started streaming, but after a lot of experience I took, I first cross-checked the project and the Roadmap, if it's good, I bought it and I never saw a candle.</p>
                        </div>
                     </li>
                     <li className='mine'>
                        <div>
                           <p className='chat-content'>Dummy Text</p>
                        </div>
                     </li>
                     <li className='mine'>
                        <div>
                           <p className='chat-content'>Dummy Text</p>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className='chat-input'>
                  <input type="text"></input>
                  <button className='btn btn-icon'><svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true"><path fill="white" d="M17.833 1.667c0.268 0 0.5 0.231 0.5 0.5 0 0.083 -0.023 0.148 -0.065 0.23l-6.908 14.417c-0.083 0.158 -0.24 0.269 -0.443 0.269 -0.185 0 -0.333 -0.093 -0.435 -0.232l-1.518 -2.517c-0.083 -0.147 -0.242 -0.25 -0.417 -0.25l-2 0.01c-0.278 0 -0.508 -0.231 -0.508 -0.508 0 -0.018 0.175 -1.646 0.258 -2.367 0.018 -0.204 -0.075 -0.408 -0.258 -0.518 -0.992 -0.592 -4.112 -2.469 -4.13 -2.478 -0.15 -0.083 -0.242 -0.25 -0.242 -0.425 0 -0.213 0.13 -0.398 0.325 -0.481 0 0 15.657 -5.613 15.657 -5.622 0.065 -0.019 0.12 -0.028 0.185 -0.028M8.12 11.96L17.982 2.073 8.473 8.75l-0.353 3.21M17.833 0c-0.215 0 -0.425 0.03 -0.642 0.092L15.983 0.436 1.335 5.786C0.525 6.132 0 6.922 0 7.797c0 0.773 0.411 1.488 1.073 1.868 0.087 0.052 2.847 1.71 3.485 2.092 -0.079 0.7 -0.188 1.697 -0.188 1.829 0 1.2 0.975 2.175 2.175 2.175l1.328 -0.006 1.264 2.082c0.425 0.579 1.073 0.912 1.779 0.912 0.805 0 1.54 -0.442 1.917 -1.154L19.737 3.192c0.173 -0.306 0.264 -0.657 0.264 -1.025C20 0.971 19.028 0 17.833 0z"/></svg></button>
                  <button className='btn btn-icon'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path width="48" height="48" fill="white" fillOpacity="0.01" d="M0 0H24V24H0V0z"/><path d="M9.5 2H18.5L13 9H20.5L8.5 22L11 12.5H4L9.5 2Z" fill="orange"  /></svg></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Chatbox;