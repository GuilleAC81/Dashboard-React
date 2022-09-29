import React, {Fragment} from 'react';
import LastMovieInfo from './LastMovieInfo';
import img from '../assets/images/mandalorian.jpg';

let lastMovieData ={
    title: 'Star Wars - Mandalorian',
    img:  img,
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic',
    link: "/",
    
}

function LastMovieInDB(props){

    return (
            <Fragment>
                
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">

                        <LastMovieInfo {...lastMovieData}/>

                    </div>
                </div>

            </Fragment>

        )

}


export default LastMovieInDB