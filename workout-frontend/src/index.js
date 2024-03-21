import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './apps/workout-document/homepage.tsx';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WorkoutHistory } from './apps/workout-document/workout-history.tsx';
import { DataContextProvider } from '../src/apps/workout-document/data-context.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Query Client - Instance of React Query
// Where ever we pass QueryClient we will have access to the cache of react-query
// Want this as high up in component tree as possible
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({})

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql/workouts',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <DataContextProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/workout-history" element={<WorkoutHistory />} />
          </Routes>
        </DataContextProvider>
      </QueryClientProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
