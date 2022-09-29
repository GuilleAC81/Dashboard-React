import React from 'react';
import Movie from '../components/Movie';
import GenresInDb from '../components/GenresInDB';
import LastMovieInDb from '../components/LastMovieInDB';
import ContentRowMovies from '../components/ContentRowMovies';
import ContentWrapper from '../components/ContentWrapper';
import NotFound from '../components/NotFound';
import Actors from '../components/Actors';
import { Route, Switch } from 'react-router-dom';

function SidebarRouter(){
    return(
        <React.Fragment>         
            <Switch>
                <Route path="/" exact={true}>
                    <ContentWrapper/>
                </Route>

                <Route path="/last" exact={true}>
                    <LastMovieInDb/>
                </Route>

                <Route path="/genres" exact={true}>
                    <GenresInDb/>
                </Route>

                <Route path="/data" exact={true}>
                    <ContentRowMovies/>
                </Route>

                <Route path="/movie/" exact={true}>
                    <Movie />
                </Route>

                <Route path="/actors/" exact={true}>
                    <Actors />
                </Route>

                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>
    )
}

export default SidebarRouter;