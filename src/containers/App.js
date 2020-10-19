import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from "../components/robots";
import ErrorBoundy from "../components/ErrorBoundy";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {

        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else
            return (
                <div className='tc'>
                    <h1 className='h2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <ErrorBoundy>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundy>
                </div>
            );

    }
}

export default App;