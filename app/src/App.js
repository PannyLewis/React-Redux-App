import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import FetchNames from "./components/FetchNames";

function App() {
  return (
    <div className="App">
      <FetchNames />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     state:
//     state:
//     state:
//   }
// }

// const madDispatchToProps = {
//   action1,
//   action2,
// }

// export default connect(mapStateToProps, madDispatchToProps)(App);
export default App;
