import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);

        // Khởi tạo default state 
        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)} />
                    <p>{this.state.value}</p>
            </div>
        );
    }
}

export default InputField;