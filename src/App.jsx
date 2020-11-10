import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieInfo } from './components/MovieInfo';
import { MoviesList } from './components/MoviesList';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <MoviesList {...props} />} />
        <Route exact path="/movie/:id" render={(props) => <MovieInfo {...props} />} />
        <Route render={() => <> 404 </>} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
