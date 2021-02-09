import React from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
    return (
        <div>
            <Navbar />
          <div>
            <img src="https://cdn.dribbble.com/users/1774675/screenshots/15040336/media/4ffe99f90e9fd1abe0b94a9917664896.png" 
            className="home" />
          </div>
        </div>
    )
}

export default Home;
