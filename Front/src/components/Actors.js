import React, {Fragment, Component} from 'react';
import ActorsList from './ActorsList';
import ActorsHeader from './ActorsHeader';

class Actors extends Component{
	
    constructor(){
        super()
        this.state ={
        actorsList : [ ]
        }
    };

	componentDidMount(){
        fetch('/api/Actors')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(actors =>{
        this.setState({actorsList: actors.data})
        })
        .catch(error => console.log(error))
        }
	
	render(){
		return(
			<Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">All the actors in the Database</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>											
											<ActorsHeader/>											
										</thead>
										<tfoot>											
											<ActorsHeader/>											
										</tfoot>
										<tbody>
										{
											this.state.actorsList.map((item, i) => {
												return <ActorsList {...item} key = {`item-${i}`}/>
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
export default Actors;