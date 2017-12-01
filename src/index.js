//Import JS modules
import React from 'react'; //go find a lib react in node_modules and assign it a name React
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyANoFiZdkhlG2V-vCIH7NaB7Bgvtn8ewZc';

//Create a new component producing some HTML
const App = () => { //App CLASS, <App /> INSTANCE;  function(){} is the same as () =>{}
  return (
    <div>
        <SearchBar />
    </div>
  ); //react calls from JSX - React.createElement()
}

//Take this HTML element and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));