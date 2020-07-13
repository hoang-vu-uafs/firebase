import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  postHandle = () => {
    axios
      .post("https://fir-app-5824c.firebaseio.com/person.json", {
        body: {
          name: "Tom",
          age: 40,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getHandle = () => {
    axios
      .get("https://fir-app-5824c.firebaseio.com/person.json")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateHandle = () => {
    const id = "-MBpkTJeJl-JBD7T30Mf";

    axios
      .put(`https://fir-app-5824c.firebaseio.com/person/${id}.json`, {
        body: {
          name: "sarah",
          age: 12,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteHandle = () => {
    const id = "-MBpkTJeJl-JBD7T30Mf";

    axios
      .delete(`https://fir-app-5824c.firebaseio.com/person/${id}.json`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div>Hello</div>
        <button onClick={this.postHandle}>POST</button>
        <button onClick={this.getHandle}>GET</button>
        <button onClick={this.updateHandle}>UPDATE</button>
        <button onClick={this.deleteHandle}>DELETE</button>
      </div>
    );
  }
}

export default App;
