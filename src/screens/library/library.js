import React, {useEffect, useState} from 'react';
import APIkit from '../../spotify';
import './library.css'

export default function Library() {

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIkit.get('me/playlists').then(function(response) {
    setPlaylists(response.data.items);
    console.log(response.data.items);
    });
  }, []); 

  return (
  <div className='screen-container'>
    <div className='library-body'>
    {playlists?.map((playlist => 
      <div className='playlist-card'>
        <img src={playlist.images[0].url} className='playlist-image' alt='Playlist Pic' />
        <p className='playlist-title'>{playlist.name}</p>
        <p className='playlist-total'>{playlist.tracks.total} songs</p>
      </div>
    ))}
    </div>  
  </div>
  );
}
