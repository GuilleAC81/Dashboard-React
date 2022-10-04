import React, {Fragment, Component} from 'react';
import MovieList from './MovieList';
import MovieHeader from './MovieHeader';

class oneMovie extends Component{
	
    constructor(){
        super()
        this.state ={
        moviesList : [ ],
        }
    };

	componentDidMount(){
		let id = this.props.params.id
		fetch('/api/movies')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(movies =>{
			let movie = movies.data.filter(function(oneMovie){
				return oneMovie.id  === id})
        this.setState({moviesList: movie})
        })
        .catch(error => console.log(error))
        }

	render(){
		return(
			<Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">Detail for selected Movie</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<MovieHeader/>								
										</thead>

										<tbody>
										{
											this.state.moviesList.map((item, i) => {
												return <MovieList {...item} key = {`item-${i}`}/>
												})
										}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</Fragment>
		)
	}
    
}
export default oneMovie;