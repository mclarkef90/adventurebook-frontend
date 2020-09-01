import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/reviews/1')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        Hi
      </div>
    )
  };
}

export default App;
