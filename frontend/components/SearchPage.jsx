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

  updateQuery: function (event) {
    this.setState({ query: event.target.value });
  },

  updateResults: function () {
    this.setState({ photoResults: PhotoStore.all() });
  },

  handleSearch: function (event) {
    event.preventDefault();
    var queryString = this.state.query;
    // ClientActions.filterSearch calls PhotoActions.getPhotos, resulting in
    // PhotoStore receiving the searched photos, emitting a change, and having
    // an updated PhotoStore.all(), which this.state.photoResults is set to in
    // this.updateResults

    if (queryString !== ""){
      ClientActions.filterSearch(queryString);
    }
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
