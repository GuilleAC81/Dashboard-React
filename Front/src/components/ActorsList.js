import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';

function ActorsList(props) {
  return (
    <Fragment>
        <tr>
            <td>{props.id}</td>
            <td><Link to={`/actors/${props.id}`}>{props.first_name}</Link></td>
            <td><Link to={`/actors/${props.id}`}>{props.last_name}</Link></td>
            <td>{props.rating}</td>
        </tr>
    </Fragment>
  )
}

export default ActorsList