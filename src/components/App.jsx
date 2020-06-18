import React from "react";
//import * as Logo from " /asset.SGHowlsMovingCastle.jpg/"

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: [],
            loadFilms: false,
            loadPeople: false
        }
    }



    loadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err))

    }
    loadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(err => console.log(err))
    }



    render() {
        if (this.state.loadFilms) {
            this.loadFilms();
            return this.state.films.map(film => {
                return (
                    <div key={film.id} className="card-body">
                        <div className="card text-white bg-dark mb-3" style="max-width: 18rem;">

                            <h5 className="card-title">{film.title}</h5>
                            <h6 className="subtitle mb-2 text-muted">{film.director}</h6>
                            <p className="card-text">{film.description}</p>
                            <a href={film.url} className="card-link">Go to endpoint</a>
                        </div>
                    </div>

                )

            })
        }
        else if (this.state.loadPeople) {
            this.loadPeople()
            return this.state.people.map(person => {
                return (
                    <div key={person.id} className="card text-white bg-dark mb-3" style="max-width: 18rem;">

                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <h6 className="subtitle mb-2 text-muted">{person.age}</h6>
                            <p className="card-text">{person.eye_color}</p>
                            <a href={person.url} className="btn btn-dark text-white">Go to endpoint</a>
                        </div>
                    </div>

                )

            })
        } else {
            return (
                <>
                    <button onClick={() => this.setState({ loadFilms: true })} className="btn btn-dark text-white" btn-sm m-3>Load Films</button>
                    <button onClick={() => this.setState({ loadPeople: true })} className="btn btn-dark text-white" btn-sm m-3>Load People</button>


                </>
            )

        }



    }
}

