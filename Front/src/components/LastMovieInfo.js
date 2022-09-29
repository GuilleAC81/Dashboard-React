import React, {Fragment} from 'react';
import propTypes from 'prop-types';
function LastMovieInfo(props){

    return (
            <Fragment>
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base:{props.title}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={props.img} alt={props.title} />
                    </div>
                    <p>{props.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={props.link}>View movie detail</a>
                </div>
            </Fragment>

        )

}

LastMovieInfo.propTypes = {
    title: propTypes.string.isRequired,
    link:  propTypes.string.isRequired,
    img:   propTypes.string.isRequired,
}

LastMovieInfo.defaultProps = {
    title: '',
    link:  '/',
    // img: ''
}

export default LastMovieInfo