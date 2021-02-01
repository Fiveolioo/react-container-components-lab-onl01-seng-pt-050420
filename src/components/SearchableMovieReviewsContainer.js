import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
    super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    submitEvent(event) {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(resp => resp.json())
            .then(resp => this.setState({ reviews: resp.results }));
    }
    
    render() {
    return(
        <div className="searchable-movie-reviews">
        <h3>The Searched Movie Reviews:</h3>
        <MovieReviews reviews={this.state.reviews} />
        </div>
        );
    }
}

export default SearchableMovieReviewsContainer;