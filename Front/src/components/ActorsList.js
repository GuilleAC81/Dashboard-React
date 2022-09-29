import React,{Fragment} from 'react'

function ActorsList(props) {
  return (
    <Fragment>
        <tr>
            <td>{props.id}</td>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.rating}</td>
        </tr>
    </Fragment>
  )
}

export default ActorsList