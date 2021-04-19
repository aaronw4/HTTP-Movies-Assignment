import React from 'react';
import axios from 'axios';

export default class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            title: '',
            director: '',
            metascore: '',
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

        let movie = {
            id: this.props.match.params.id,
            title: this.state.title,
            director: this.state.director,
            metascore: this.state.metascore,
            stars: this.state.stars
        }
        console.log(movie)
        axios
            .put(`https://arw-movie-database.herokuapp.com/api/movies/${this.props.match.params.id}`, movie)
            .then(res => {
                window.location.replace(`/`)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        axios
            .get(`https://arw-movie-database.herokuapp.com/api/movies/${this.props.match.params.id}`)
            .then(res => {
                this.setState({id: res.data[0].id});
                this.setState({title: res.data[0].title});
                this.setState({director: res.data[0].director});
                this.setState({metascore: res.data[0].metascore});
                this.setState({stars: res.data[0].stars});
                console.log(res.data[0])
            })
            .catch(err => console.log(err.response));
    }

    render() {
        console.log(this.state)
        if (!this.state) {
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