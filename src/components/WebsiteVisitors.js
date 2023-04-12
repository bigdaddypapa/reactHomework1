import React, { useState } from 'react';

export default function WebsiteVisitors () {
  const [count, setCount] = useState(821);
  function handleClick() {
    setCount(count + 1);
  }
    return ( 
            <div className="webVisitors">
              <div className="webText">
            <h5>Website Visitors</h5>
            <p>Please click button to register your visit</p>
            <button className= 'button' onClick={handleClick}>
              REGISTER</button> 
            <h1>{count}</h1>
            </div>
            </div>
            )
  }
  