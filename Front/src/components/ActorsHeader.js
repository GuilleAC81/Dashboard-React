import React,{Fragment} from 'react'

function ActorsHeader() {
  return (
    <Fragment>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Rating</th>
        </tr>
    </Fragment>
  )
}

export default ActorsHeader