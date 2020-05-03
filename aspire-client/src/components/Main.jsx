import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import ControlPanel from './ControlPanel';
import TodayData from './TodayData';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
        };
    }

    getDate() {
        var date = { currentTime: new Date().toLocaleString() };

        this.setState({
            date: date
        });
    }

    componentDidMount() {
        this.getDate();
    }

    render() {
        console.log(this.state.date);
        return (
            <Container maxWidth="sm">
                <h2>Work From Home Timer</h2>
                <p>{this.state.date.currentTime}</p>
                <ControlPanel />
                <TodayData />
            </Container>
        );
    }
}

export default Main;

