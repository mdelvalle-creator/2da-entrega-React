import React from 'react';
import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"/>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/categories/:categoryId'>
            <ItemListContainer />
          </Route>
          <Route exact path='/items/:itemId'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
