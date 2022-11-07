import React, {useState, useEffect} from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton.js';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../spotify';


export default function Sidebar() {

  const [image, setImage] = useState('https://sun9-74.userapi.com/impg/c857220/v857220949/de4a5/yE4ZGYUf55w.jpg?size=608x1080&quality=96&sign=e73e18f169e9b58b9f44a71d9f84ba90&type=album');
  useEffect(() => {
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);
    });
  },[]);
  return ( 
  <div className='sidebar-container'>
    <img src= {image} className='profile-img' alt='Profile Img' />
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
