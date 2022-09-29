import React,{Fragment} from 'react'

function MovieList(props) {
  return (
    <Fragment>
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.rating}</td>
            <td>{props.awards}</td>
            <td>{props.length}</td>
        </tr>
    </Fragment>
  )
}

export default MovieList