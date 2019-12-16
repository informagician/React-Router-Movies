import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    
    <div>
      <Link to="/MovieList">Home</Link>
      <Link to="/Movie">Movies</Link>
      <SavedList list={savedList} />
      <Switch>
      <Route path="/MovieList">
        <MovieList />
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>
      </Switch>
    </div>
  );
};

export default App;
