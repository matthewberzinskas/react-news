import "./App.css";
import NewsFeed from "./components/NewsFeed";
import Navbar from "./components/Navbar";
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }

  callback = (term) => {
    console.log(term);
    this.setState({query: term})
  };

  render() {
    return (
      <div className="App bg-dark min-vh-100">
        <div className="p-3">
          <div className="container border p-2 bg-light">
            <Navbar callBack = {this.callback} />
            <div className="main border p-2">
              <NewsFeed query = {this.state.query} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
