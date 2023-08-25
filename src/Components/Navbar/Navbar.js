import React from 'react'
import { Link } from 'react-router-dom';
// import Movies from './Movies'
// import Eventslider from './Eventslider';

function Navbar() {
    return (
        <div>

            <nav className='navbar'>
                <div className='right'>
                    <Link to="/">
                    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
                    </Link>

                    <input type="text" name="" id="" placeholder='Search for movies here' />
                </div>
                <div className='left'>
                    <select name="" id="">
                        <option value="Kochi">Kochi</option>

                    </select>
                    <button>Sign in</button>
                </div>
            </nav>

            <div className="menu">
                <div className="rightmenu">
                    <Link to="/movies">Movies</Link>
                    <Link to="/stream">Stream</Link>
                    <Link to="/events">Events</Link>
                    <a href=""></a>
                    <a href="">Plays</a>
                    <a href="">Sports</a>
                    <a href="">Activities</a>
                    <a href="">Buzz</a>
                    <a href=""><img src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" width={"250px"} /></a>
                </div>

                <div className="menuleft">
                    <a href="">ListYourShow</a>
                    <a href="">Corporates</a>
                    <a href="">Offers</a>
                    <a href="">Gift Cards</a>

                </div>
            </div>

           
        </div>
        // ---
    )
}

export default Navbar;