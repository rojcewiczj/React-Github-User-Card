import React from 'react';
import axios from "axios";
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import './App.css';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      User: [],
      Followers: [],
    };
    console.log('Constructor is running!');
  }

  componentDidMount() {
    console.log('CDM is running');
    axios
    .get("https://api.github.com/users/rojcewiczj")
    .then(res => this.setState({ User: res.data }))
    .catch(err => console.log("why me!?"));
    console.log(this.state.User)
 axios
    .get("https://api.github.com/users/rojcewiczj/followers")
    .then(res => this.setState({ Followers: res.data }))
    .catch(err => console.log("why me!?"));
    console.log(this.state.User)
  };
  

  render() {
    console.log('Rendering component');
    return (
      <div className="App">
      <div className="header"> <h1>User and Followers</h1></div>

       <div className="user-card">
          <UserCard name={this.state.User.name} img={this.state.User.avatar_url} location={this.state.User.location} key={this.state.User.id} />
      </div>

     <div className="follower-cards">

        {this.state.Followers.map(follower => {
          return (
             <FollowerCard name={follower.name} img={follower.avatar_url} location={follower.location} key={follower.id} />   
             )
          })}
   

     </div>
       
      </div>
    );
  }
}

export default App;
