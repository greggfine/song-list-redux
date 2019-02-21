import React from 'react';

const SongDetail = ({currentSong}) => {
    return (
        <div>
            <h1>Detail</h1>
            <p>{currentSong.title}</p>
            <p>{currentSong.length}</p>

        </div>
    )

}

export default SongDetail;