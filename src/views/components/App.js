import React from "react";
import homeData from "../../models/home";
import HomePage from "../home-page";
import LevelsPage from "./levels-page/Levels";
import Music from "./Music";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 'home', pageData: homeData }
    }

    setCurrentPage(currentPage, pageData) {
        this.setState({ currentPage, pageData })
    }

    render() {
        let currentPage = this.state.currentPage === 'home'
        ? <HomePage App={this} {...this.state.pageData} /> : this.state.currentPage === 'levels'
        ? <LevelsPage App={this} {...this.state.pageData} /> : null
        return (
            <div id='container'>
                <Music />
                <div id='main-pane'>
                    {currentPage}
                </div>
            </div>
        )
    }
}

export default App