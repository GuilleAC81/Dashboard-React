import React, {Fragment} from 'react';
import propTypes from 'prop-types';

function GenresInDB(props){

    return (
        <Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        {props.name}
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

GenresInDB.propTypes = {
    genreName: propTypes.string.isRequired,
}

GenresInDB.defaultProps = {
    genreName: 'Genre not found',
}

export default GenresInDB