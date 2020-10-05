import React, { Component } from "react";
import { connect } from "react-redux";
import { changePageNumber } from "../actions";

export class ChangePageButtons extends Component {
  constructor(props) {
    super(props);
    this.handleButtonBackClick = this.handleButtonBackClick.bind(this);
    this.handleButtonNextClick = this.handleButtonNextClick.bind(this);
  }

  handleButtonBackClick() {
    console.log("button back clicked");
    console.log(this.props.pageNumber);
    this.props.changePageNumber(-1);
  }
  handleButtonNextClick() {
    console.log("button next clicked");
    console.log(this.props.pageNumber);
    this.props.changePageNumber(1);
  }

  render() {
    return (
      <div
        className="change-page-buttons"
        style={{ justifyContent: this.props.pageNumber === 1 ? "flex-end" : "space-between" }}
      >
        <div
          className="btn btn-back"
          style={{ display: this.props.pageNumber === 1 ? "none" : "flex" }}
          onClick={this.handleButtonBackClick}
        >
          BACK
        </div>
        <div className="btn btn-next" onClick={this.handleButtonNextClick}>
          NEXT
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

const mapDispatchToProps = {
  changePageNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePageButtons);
