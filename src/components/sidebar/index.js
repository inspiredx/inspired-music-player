import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton.js';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";



export default function Sidebar() {
  return ( 
  <div className='sidebar-container'>
    <img src='https://sun9-74.userapi.com/impg/c857220/v857220949/de4a5/yE4ZGYUf55w.jpg?size=608x1080&quality=96&sign=e73e18f169e9b58b9f44a71d9f84ba90&type=album' className='profile-img' alt='Profile Img' />
    <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
    </div>
    <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />    
  </div>  
  );
}
