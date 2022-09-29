import React, {Fragment} from 'react';
import MoviesData from './MoviesData'

let infoMovies =[{
    title: "Movies in Data Base",
    color: "primary",
    count: 21,
    icon: "film",
},
{
    title: "Total awards",
    color: "success",
    count: 79,
    icon: "award",
},
{
    title: "Actors quantity",
    color: "warning",
    count: 49,
    icon: "user",
}]

function ContentRowMovies(props){

    return (
        <Fragment>

                <div className="row">

                        {
                            infoMovies.map((item, i) => {
                                return <MoviesData {...item} key = {`item-${i}`}/>
                                })
                        }

                </div>


    </Fragment>
    )

}


export default ContentRowMovies