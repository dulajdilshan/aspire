import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import ControlPanel from './ControlPanel';
import TodayData from './TodayData';
import HistoryCard from './HistoryCard';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            started: false,
        };
    }

    getDate() {
        var date = { currentTime: new Date().toLocaleString() };

        this.setState({
            date: date
        });
    }

    handleStartButtonClick() {
        this.setState({ started: true });
    }

    handleStopButtonClick() {
        this.setState({ started: false })
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
                <ControlPanel
                    startButtonOnClick={() => this.handleStartButtonClick()}
                    stopButtonOnClick={() => this.handleStopButtonClick()}
                    started={this.state.started}
                />
                <TodayData />
                < br/>
                <HistoryCard />
            </Container>
        );
    }
}

export default Main;

