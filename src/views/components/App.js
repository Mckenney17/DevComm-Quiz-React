import React from "react";
import homeData from "../../models/home";
import Home from "../home";
import Music from "./Music";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 'home' }
    }

    setCurrentPage(pageName) {
        this.setState({ currentPage: pageName })
    }

    render() {
        const audio = new Audio();
        audio.src = '../../utils/cool_music.mp3';
        let currentPage = this.state.currentPage === 'home'
        ? <Home {...homeData} /> : null
        return (
            <div id='container'>
                <Music music={audio} />
                <div id='main-pane'>
                    {currentPage}
                </div>
            </div>
        )
    }
}

export default App