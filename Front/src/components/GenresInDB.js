import React, {Fragment, Component} from 'react';
import propTypes from 'prop-types';
import GenreCard from './GenreCard'

class GenresInDB extends Component{
    
    constructor(){
        super()
        this.state ={
        genresList : [  ]
        }
    };
    
    componentDidMount(){
        fetch('/api/genres')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(genres =>{
        this.setState({genresList: genres.data})
        })
        .catch(error => console.log(error))
        }

        colorChange(){
            document.querySelector('#card-body').classList.toggle('bg-secondary');
        }
    
    render(){
        
        return (
            <Fragment>
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=>this.colorChange()}>Genres in Data Base</h5>
                        </div>
                        <div className="card-body" id="card-body">
                            <div className="row">
                            {
                                this.state.genresList.map((item, i) => {
                                    return <GenreCard {...item} key = {`item-${i}`}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>            
            </Fragment>
        )

    }
}



GenresInDB.propTypes = {
    genreName: propTypes.string.isRequired,
}

GenresInDB.defaultProps = {
    genreName: 'Genre not found',
}

export default GenresInDB

