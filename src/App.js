import React from "react";
import InfoContainers from "./components/InfoContainers";
import ChangePageButtons from "./components/ChangePageButtons";
import { connect } from "react-redux";

import forrestSound from "./sounds/forrest.wav";
import meadowSound from "./sounds/meadow.wav";
import gardenSound from "./sounds/garden.wav";

import "./App.css";
//"homepage": "http://https://robertasliekis.github.io/zolynu-paslaptys/",
//"homepage": "http://localhost:3000/",
//

class App extends React.Component {
  addClassAnimation(number) {
    if (number === this.props.pageNumber) {
      return "page-wrapper-animation";
    } else {
      return "";
    }
  }

  render() {
    const pageCount = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
      <div className="App">
        <div className="content-wrapper">
          <ChangePageButtons />
          {/* <div>
            <audio loop ref={this.audioForrestRef}>
              <source src={forrestSound}></source>
            </audio>
            <audio loop ref={this.audioMeadowRef}>
              <source src={meadowSound}></source>
            </audio>
            <audio loop ref={this.audioGardenRef}>
              <source src={gardenSound}></source>
            </audio>
          </div> */}
          {pageCount.map((page, index) => {
            return (
              <div
                key={index}
                className={
                  "page-wrapper plant-page page" + page + " " + this.addClassAnimation(page)
                }
                // style={{
                //   display:
                //     this.props.pageNumber === page ||
                //     this.props.pageNumber === page - 1 ||
                //     this.props.pageNumber === page + 1
                //       ? "flex"
                //       : "none",
                // }}
              >
                <InfoContainers page={page} />
              </div>
            );
          })}
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
