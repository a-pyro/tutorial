// index.js => javascript entry point for the app

import React from 'react'; // needed to create a component
import ReactDOM from 'react-dom'; // to render the app in the index.html

//Stateless functional components! => DUMB Component (dont have state)
function Greeting() {
    //components need to be capitalized to be rendered!
    return (
        <main>
            <h1>Ardi's first suca: 🚀! </h1>
        </main>
    ); //always return JSX
}

//alternative to returning JSX
/* const Greeting = () => {
    return React.createElement('h1', {}, 'hello');
}; */

/* const Greeting = () => {
    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, 'hello')
    );
}; */

ReactDOM.render(
    <React.StrictMode>
        <Greeting />
    </React.StrictMode>,
    document.getElementById('root')
); // inject the js app in the index.html
