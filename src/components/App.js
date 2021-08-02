import React, { useEffect, useState } from 'react'
import { FaMusic } from 'react-icons/fa'
import Audio from './Audio'
import Home from './Home'

function App() {
    const [musicOn, setMusicOn] = useState(false)
    const [location, setLocation] = useState('home')

    useEffect(() => {
        const audio =  document.getElementById('music')
        musicOn ? audio?.play() : audio?.pause()
    }, [musicOn])

    const handleMusicToggle = (ev) => {
        if (ev.currentTarget.classList.contains('music-on')) {
            setMusicOn(false)
        } else {
            setMusicOn(true)
        }
    }

    return (
        <div id="container" className="container">
            <Audio />
            <i id="sound" onClick={handleMusicToggle} className={musicOn ? 'music-on' : ''}><FaMusic /></i>
            {
                location === 'home'
                ? <Home /> : null
            }
        </div>
    )
}

export default App
