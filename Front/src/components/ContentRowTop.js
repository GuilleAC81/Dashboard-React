import React, {Fragment} from 'react';
import LastMovieInDB from './LastMovieInDB'
import GenresInDB from './GenresInDB'
import ContentRowMovies from './ContentRowMovies'



function ContentRowTop (){

    return (
        <Fragment>

            <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
                    
                    <ContentRowMovies/>

                    {/* Content Row Last Movie in Data Base & Genres in Data Base*/}
                    <div className="row">

                        <LastMovieInDB/>

                        <GenresInDB/>

                    </div>
                    {/* End content row last movie in Data Base */}
            </div>
        </Fragment>
    )

}
export default ContentRowTop