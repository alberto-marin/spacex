import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import logo from './spacex-vector-logo.png';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <header className='container'>
            <img
              src={logo}
              className='App-logo'
              alt='logo SpaceX'
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <Route exact path='/' component={Launches} />
            <Route exact path='/launch/:flight_number' component={Launch} />
          </header>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
