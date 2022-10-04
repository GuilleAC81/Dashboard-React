import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';

function MovieList(props) {
  return (
    <Fragment>
              <tr>
                  <td>{props.id}</td>
                  <td><Link to={`/movie/${props.id}`}>{props.title}</Link></td>
                  <td>{props.rating}</td>
                  <td>{props.awards}</td>
                  <td>{props.length}</td>
              </tr>
    </Fragment>
  )
}

export default MovieList