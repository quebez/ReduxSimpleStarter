import React, { Component } from 'react';

/* functional component
const SearchBar = () => {
    return <input />;
};
*/

//class component (ES6), adds functionality
class SearchBar extends Component {   //create a class and give it all functionalities that react.component has
    render() {                              //function
        return <input />;
    }
}

export default SearchBar;