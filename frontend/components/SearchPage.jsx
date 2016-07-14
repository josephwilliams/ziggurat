var React = require('react');
var PhotoStore = window.PhotoStore = require('../stores/photo_store');
var ClientActions = require('../actions/client_actions');
var HeaderAlt = require('./HeaderAlt');
var SearchResults = require('./SearchResults');

var SearchPage = React.createClass({
  getInitialState: function () {
    return ({ query: "", photoResults: [] });
  },

  componentDidMount: function () {
    this.photoListener = PhotoStore.addListener(this.updateResults);
  },

  componentWillUnmount: function () {
    this.photoListener.remove();
  },

  updateResults: function () {
    this.setState({ photoResults: PhotoStore.all() });
  },

  updateQuery: function (event) {
    this.setState({ query: event.target.value });
  },

  handleSearch: function (event) {
    event.preventDefault();
    var queryString = this.state.query;
    var queryArray = queryString.split(' ');

    if (queryString !== ""){
      // ClientActions.filterSearch(queryString);
      for (var i = 0; i < queryArray.length; i++) {
        var queryWord = queryArray[i];
        this.searchWord(queryWord);
      }
    }

    this.setState({ query: "" });
  },

  searchWord: function (word) {
    ClientActions.filterSearch(word);
  },

  searchForm: function () {
    return(
      <div className="search-form">
        <form>
          <input type="text"
            value={this.state.query}
            onChange={this.updateQuery}
            className="search-form-input"
            placeholder=""/>

          <button onClick={this.handleSearch}
            className="search-form-button">
            search
          </button>
        </form>
      </div>
    )
  },

  render: function () {
    return(
      <div className="search-page-container">
        <HeaderAlt/>
        <div className="search-top">
          {this.searchForm()}
        </div>
        <div className="search-text">
          search for photos based on their tags
        </div>
          <SearchResults query={this.state.query}
                         photoResults={this.state.photoResults}/>
      </div>
    );
  }
});

module.exports = SearchPage;
