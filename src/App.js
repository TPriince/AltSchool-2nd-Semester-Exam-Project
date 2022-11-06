import React from "react";
import "./style.css";
import Layout from './components/Layout';
import Router from './components/Router';
import {ErrorBoundary} from 'react-error-boundary';
import {Helmet} from 'react-helmet-async';

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const myErrorHandler = (error, errorInfo) => {
  console.log('Logging: ', error, errorInfo);
}

export default function App() {

  return (
    <>
      <Helmet>
        <title>TPriince's GitHub Portfolio App</title>
        <meta name="description" content="Very effective application" />
      </Helmet>
      <Layout />
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <Router />
      </ErrorBoundary>
    </>
  );
}
