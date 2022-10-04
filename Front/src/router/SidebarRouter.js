import React from 'react';
import Movie from '../components/Movie';
import GenresInDb from '../components/GenresInDB';
import LastMovieInDb from '../components/LastMovieInDB';
import ContentRowMovies from '../components/ContentRowMovies';
import ContentWrapper from '../components/ContentWrapper';
import NotFound from '../components/NotFound';
import Actors from '../components/Actors';
import oneActor from '../components/oneActor';
import oneMovie from '../components/oneMovie'
import { Route, Switch, useParams } from 'react-router-dom';

const AuxRouteMovie = () =>  <oneMovie params={useParams()}/>

function SidebarRouter(){
    // const AuxRouteMovie = () => {
    //     <oneMovie params={useParams()}/>
    // };
    // const AuxRouteActor = () => {
    //     <oneActor params={useParams()} />
    // }
    return(
        <React.Fragment>         
            <Switch>
                <Route path="/" exact>
                    <ContentWrapper/>
                </Route>

                <Route path="/last" exact>
                    <LastMovieInDb/>
                </Route>

                <Route path="/genres" exact>
                    <GenresInDb/>
                </Route>

                <Route path="/data" exact={true}>
                    <ContentRowMovies/>
                </Route>

                <Route path="/movie/" exact>
                    <Movie />
                </Route>

                <Route path="/movie/:id" exact >
                    <AuxRouteMovie />
                </Route>

                <Route path="/actors/" exact>
                    <Actors />
                </Route>

                <Route path="/actors/:id" exact >
                    <Actors />
                </Route>

                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>
    )
}

export default SidebarRouter;