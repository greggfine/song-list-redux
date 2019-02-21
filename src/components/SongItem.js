import React from 'react';

const SongItem = ({songs, handleButtonClick}) =>  {
    return songs.map((song) => (
        <li key={song.title} >{song.title}
            <button 
                onClick={(currentSong) => handleButtonClick(song)}
                style={{margin: '20px'}}>Select</button>
        </li>
        
    ))
}

export default SongItem;