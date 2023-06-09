import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const link = createUploadLink({ uri: 'http://localhost:5000/graphql' });

const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  link,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
