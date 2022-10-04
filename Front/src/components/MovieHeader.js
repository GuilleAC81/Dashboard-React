import React,{Fragment} from 'react'

function MovieHeader() {
  return (
    <Fragment>
        <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Calificación</th>
            <th>Premios</th>
            <th>Duración</th>
        </tr>
    </Fragment>
  )
}

export default MovieHeader