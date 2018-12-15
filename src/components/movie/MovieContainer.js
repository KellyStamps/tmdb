import React, { Component, useEffect, useState } from 'react';
import { fetchMovie } from '../../services/ApiService';

// class MovieContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movie: {},
//     };
//   }

//   componentDidMount() {
//     fetchMovie(this.props.match.params.id)
//       .then(response => {
//         this.setState({ movie: response.data });
//         console.info(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   render() {
//     return <h1>{this.state.movie.original_title}</h1>;
//   }
// }

const MovieContainer = ({ match }) => {
  const [movie, setMovie] = useState({});
  useEffect(
    () => {
      fetchMovie(match.params.id)
        .then(response => {
          setMovie(response.data);
          console.info(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [] // Highly important, without [], fetch would execute forever !!
  );

  return (
    <div className="section">
      <div className="container">
        <h2>{movie.original_title}</h2>
      </div>
    </div>
  );
};

export default MovieContainer;