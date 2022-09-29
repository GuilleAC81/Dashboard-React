import React,{Fragment} from 'react';
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import Movie from './Movie'
import Actors from './Actors'
function ContentWrapper(){
    return (
        <Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <ContentRowTop/>
                    <Movie/>
                    <Actors/>
                    <Footer/>
                </div>
            </div>
        </Fragment>
    )
}

export default ContentWrapper