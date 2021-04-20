import React from 'react';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
        this.state = { paused: true }
    }

    togglePlay() {
        console.log(this.props.musicData);
        this.setState((state) => {
            return state.paused
            ? (this.props.music.play(), { paused: false })
            : (this.pauseMusic(), { paused: true })
        })
    }

    render() {
        return <i id='sound' onClick={this.togglePlay} className={`fas fa-music ${this.state.paused ? null : 'music-on'}`}></i>
    }
}

export default Music