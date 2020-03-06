import { connect } from "react-redux";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";
import News from "../components/News";
import Header from "../components/Header";
import Source from "../components/Source";
import { loadNews } from "../actions";
import _ from "lodash";
import moment from "moment";

class NewsList extends React.Component {
  state = {
    newsList: [],
    searchText: "",
    category: "HEADLINES"
  };

  componentDidMount() {
    this.props.loadNews("us");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.newsList[0]?.title !== nextProps.newsList[0].title) {
      this.setState({ newsList: nextProps.newsList, searchText: "" });
    }
  }

  setCategory = category => this.setState({ category });

  setHeadLines = headLines => this.props.loadNews(headLines);

  handleChangeSearch = searchText => this.setState({ searchText });

  search = () => {
    const { newsList, searchText } = this.state;

    let filteredList = _.filter(
      newsList,
      news =>
        news.source?.name.toLowerCase().includes(searchText.toLowerCase()) ||
        news.author?.toLowerCase().includes(searchText.toLowerCase())
    );

    this.setState({ newsList: filteredList });
  };

  sort = () => {
    let newsList = _.orderBy(this.state.newsList, o => moment(o.publishedAt), [
      "asc"
    ]);
    this.setState({ newsList });
  };

  render() {
    const { sourcesList } = this.props;
    const { newsList, category, searchText } = this.state;

    return (
      <Jumbotron>
        <Header
          category={category}
          setCategory={category => this.setCategory(category)}
          setHeadLines={headLines => this.setHeadLines(headLines)}
          sort={() => this.sort()}
          searchText={searchText}
          handleChangeSearch={searchText => this.handleChangeSearch(searchText)}
          search={() => this.search()}
        ></Header>

        {category === "HEADLINES" ? (
          <ListGroup>
            {newsList.map((headLine, index) => (
              <News key={index} {...headLine} />
            ))}
          </ListGroup>
        ) : (
          <ListGroup>
            {sourcesList.map((source, index) => (
              <Source key={index} {...source} />
            ))}
          </ListGroup>
        )}
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    ...state
  };
};

const NewsListContainer = connect(mapStateToProps, { loadNews })(NewsList);

export default NewsListContainer;
