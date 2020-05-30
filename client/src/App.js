import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import logo from './spacex-vector-logo.png';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='container'>
          <img
            src={logo}
            className='App-logo'
            alt='logo SpaceX'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Launches />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
