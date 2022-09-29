import React, {Fragment, Component} from 'react';
import ActorsList from './ActorsList';

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
									<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Apellido</th>
												<th>Rating</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Apellido</th>
												<th>Rating</th>
											</tr>
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