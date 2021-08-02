import React from 'react'
import AudioFile from '../utils/cool_music.mp3'

function Audio() {
    return (
        <audio src={AudioFile} id="music"></audio>
    )
}

export default Audio
