import React from "react";

class NameSetDropdownInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = { value: this.props.currentDevName }
    }

    handleInputChange(ev) {
        this.setState({ value: ev.target.value })
    }

    render() {
        return (
            <div className="name-set-modal">
                <p>Name</p>
                <input type="text" id="name-input" value={this.state.value} onChange={this.handleInputChange} />
                <button id='set-name' onClick={this.props.setDevName.setDevName.bind(this.props.setDevName, this.state.value)}>OK</button>
                <div></div>
            </div>
        )
    }
}

export default NameSetDropdownInput
