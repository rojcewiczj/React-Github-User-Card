import React from 'react';
import axios from "axios";
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import SearchUserForm from './components/SearchForm';
import 'semantic-ui-css/semantic.min.css';
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
    .get(`https://api.github.com/users/rojcewiczj`)
    .then(res => this.setState({ User: res.data }))
    .catch(err => console.log("why me!?"));
    console.log(this.state.User)
 axios
    .get(`https://api.github.com/users/rojcewiczj/followers`)
    .then(res => this.setState({ Followers: res.data }))
    .catch(err => console.log("why me!?"));
    console.log(this.state.User)
  };
  
  searchUser = UserName => {
    const newUser = {
      name: UserName,
    };
    this.setState({
      userName: [newUser]
    });
  };
  render() {
    console.log('Rendering component');
    return (
      <div className="App">
        <div className="user"><SearchUserForm searchUser = {this.searchUser} /></div>
        <br></br>
      <div className="header">   
      <UserCard name={this.state.User.name} img={this.state.User.avatar_url} location={this.state.User.location} key={this.state.User.id} />
    
      </div> 
      <div className="followers"><h2> Followers </h2></div>
      <div className="follower-cards">
         
        {this.state.Followers.map(follower => {
          return (
             <FollowerCard name={follower.login} img={follower.avatar_url} location={follower.location} key={follower.id} />   
             )
          })}
  
     </div>
       
      </div>
    );
  }
}

export default App;
