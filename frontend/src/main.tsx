import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import App from './App'
import ErrorFallback from './ErrorFallback'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.log('error', error, 'info', info)}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
