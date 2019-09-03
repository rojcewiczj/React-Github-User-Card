import React from 'react';
import UserData from './components/UserData';
import FollowerData from './components/FollowersData'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
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
    this.setState({
      User: UserData,
      Followers: FollowersData,
    });
  }

  componentDidUpdate() {
    console.log('CDU is running');
  }

  componentWillUnmount() {}

  ourOwnClassPropertiesHere() {}

  render() {
    console.log('Rendering component');
    return (
      <div className="App">
        <User user={this.state.User} />
        <Followers followers={this.state.Followers} />
      </div>
    );
  }
}

export default App;
