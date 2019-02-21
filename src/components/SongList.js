import React from 'react';
import SongItem from './SongItem';

const SongList = ({songs, handleButtonClick}) => {
        return (
            <ul>
                <SongItem 
                    handleButtonClick={handleButtonClick}
                    songs={songs}/>
            </ul>
        )
}

export default SongList;