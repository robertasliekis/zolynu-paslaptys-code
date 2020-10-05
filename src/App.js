import React from "react";
import Page1 from "./components/Page1";
import VideoBackground from "./components/VideoBackground";
import InfoContainers from "./components/InfoContainers";
import ChangePageButtons from "./components/ChangePageButtons";
import { connect } from "react-redux";

import "./App.css";
//"homepage": "http://https://robertasliekis.github.io/zolynu-paslaptys/",

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <ChangePageButtons />
          <VideoBackground />
          {/* <div
            className="page1-div"
           // style={{ display: this.props.pageNumber === 1 ? "flex" : "none" }}
          >
            <Page1 />
          </div> */}
          <div
            className="info-container-div"
            // style={{ display: this.props.pageNumber === 2 ? "flex" : "none" }}
          >
            <InfoContainers />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageNumber: state.changePageNumber.pageNumber,
  };
};

export default connect(mapStateToProps)(App);
