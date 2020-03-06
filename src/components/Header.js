import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

class Header extends React.Component {
  setCategory = event => this.props.setCategory(event.target.value);

  setHeadLines = event => this.props.setHeadLines(event.target.value);

  click = () => this.props.sort();

  handleChangeSearch = event =>
    this.props.handleChangeSearch(event.target.value);

  render() {
    return (
      <div>
        <div onChange={e => this.setCategory(e)}>
          <input type="radio" value="HEADLINES" name="news" /> HeadLines
          <input type="radio" value="SOURCES" name="news" /> Sources
        </div>
        {this.props.category === "HEADLINES" ? (
          <div>
            <div className="row">
              HeadLines
              <div onChange={e => this.setHeadLines(e)}>
                <input type="radio" value="us" name="headLines" /> US
                <input type="radio" value="ae" name="headLines" /> UAE
                <input type="radio" value="br" name="headLines" /> BRAZIL
                <input type="radio" value="ch" name="headLines" /> SWITZERLAND
                <input type="radio" value="eg" name="headLines" /> EGYPT
                <input type="radio" value="fr" name="headLines" /> FRANCE
              </div>
            </div>
            <input
              type="text"
              value={this.props.searchText}
              onChange={e => this.handleChangeSearch(e)}
            />
            <button
              className="btn btn-primary"
              onClick={() => this.props.search()}
            >
              Search
            </button>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.click()}>
                  Older
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Header;
