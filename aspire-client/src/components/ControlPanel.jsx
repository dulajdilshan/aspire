import React, { Component } from 'react';
import ActionButton from './ActionButton';


class ControlPanel extends Component {

    render() {
        return (
            <div className="row">
                <ActionButton kind="primary" value="Start"/>
                <ActionButton kind="secondary" value="Stop"/>
            </div>
        );
    }
}

export default ControlPanel;