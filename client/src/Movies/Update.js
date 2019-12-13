import React from 'react';
import axios from 'axios';

export default class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            title: '',
            director: '',
            metascore: null,
            stars: []
        };
    }

    handleTitle = e => {
        this.setState({title: e.target.value})
    }

    handleDirector = e => {
        this.setState({director: e.target.value})
    }

    handleMetascore = e => {
        this.setState({metascore: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        axios
            .put(`http://localhost:5000/api/movies/${this.props.match.params.id}`, {
                id: this.props.match.params.id,
                title: this.state.title,
                director: this.state.director,
                metascore: this.state.metascore,
                stars: this.state.stars

            })
            .then(window.location.replace(`/movies/${this.props.match.params.id}`))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
            .then(res => {
                this.setState({movie: res.data});
                this.setState({title: res.data.title});
                this.setState({director: res.data.director});
                this.setState({metascore: res.data.metascore});
                this.setState({stars: res.data.stars});
            })
            .catch(err => console.log(err.response));
    }

    render() {
        console.log(this.state.stars)
        if (!this.state.movie) {
            return <div>Loading....</div>;
        }

        return(
            <div>
                <h1>Edit Movie Information</h1>
                <form onSubmit={this.handleSubmit}>
                    <span>Title: </span>
                    <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleTitle}
                    />
                    <br/>
                    <span>Director: </span>
                    <input
                        type='text'
                        name='director'
                        value={this.state.director}
                        onChange={this.handleDirector}
                    />
                    <br/>
                    <span>Metascore: </span>
                    <input
                        type='text'
                        name='metascore'
                        value={this.state.metascore}
                        onChange={this.handleMetascore}
                    />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}