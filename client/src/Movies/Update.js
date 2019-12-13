import React from 'react';
import axios from 'axios';

export default class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
            .then(res => this.setState({movie: res.data}))
            .catch(err => console.log(err.response));
    }

    render() {
        if (!this.state.movie) {
            return <div>Loading....</div>;
        }

        return(
            <div>
                {this.state.movie.title}
            </div>
        )
    }
}