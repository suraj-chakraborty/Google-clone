import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

const Home = () => {
    return (
        <div className="home">
            <div className="homeheader">
                
                <div className="headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                    </div>
                </div>
            <div className="homeBody">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="inputContainer">
                    <Search />
                </div>

                
                </div>                                                              
        </div>
        
    )
}

export default Home
