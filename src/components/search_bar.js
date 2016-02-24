import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
  rawMarkup () {
      return {__html: marked(this.props.children.toString(), {sanitize: true}) };
  };

  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    )
  }
}

export default SearchBar;
