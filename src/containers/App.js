import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component{

  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: "",
    }
    console.log("constructor");
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))

    console.log("Component Mounted Successfully!")

  }

  onSearchChange = (event) => {
    // console.log(this.state.robots);
    this.setState({ searchfield : event.target.value })
}

  render(){
    const {robots , searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      });
    console.log("Render");
    // JS if 0 returns false, therefore !false === true and if true we run our code
    if (!robots.length){
      return <h1>Loading </h1>
    }
    else{
      return(
        <div className ='tc'>
          <h1 className = 'f1'> RoboFriends </h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList robots = {filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }


}

export default App;
