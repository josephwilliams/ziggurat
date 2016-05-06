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

    if (queryString !== ""){
      ClientActions.filterSearch(queryString);
    }

    this.setState({ query: "" });
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
          <SearchResults query={this.state.query}
                         photoResults={this.state.photoResults}/>
      </div>
    );
  }
});

module.exports = SearchPage;
