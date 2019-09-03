import React from 'react';
import axios from "axios";
import UserCard from './components/UserCard';

import './App.css';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      User: [],
      Follower: [],
    };
    console.log('Constructor is running!');
  }

  UserComponentDidMount() {
    console.log('CDM is running');
    axios
    .get("https://api.github.com/rojcewiczj/")
    .then(res => this.setState({ User: res.data }))
    .catch(err => console.log("why me!?"));
    console.log(this.state.User)
  };
 
  

  render() {
    console.log('Rendering component');
    return (
      <div className="App">
   <UserCard name={this.state.User.name} img={this.state.User.img} location={this.state.User.location} key={this.state.User.id} />
        
       
      </div>
    );
  }
}

export default App;
