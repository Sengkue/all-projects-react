import React, {Component} from "react";
import CartList from "./CartList";
import SearchBox from "./SearchBox"
import { robots } from "./robots";



class App extends Component {
     constructor(){
         super()
         this.state = {
            robots: robots,
            searchfield: ''
         }
     }

     onSearchChange = (event) => {
         this.setState({searchfield: event.target.value});

     }

    render() {
        const filteredRobots = this.state.robots.filter( robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className="tc">
                <h1>Robotfriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CartList robots={filteredRobots}/>
            </div>
            
        );
    }
}

export default App;
