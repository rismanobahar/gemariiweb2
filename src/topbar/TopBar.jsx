import React from 'react'
import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-google"></i>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter"></div>
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">HELP</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
            <div className="topRight">
                <img className="topImg"
                src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-135620.jpg&fm=jpg" 
                alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
