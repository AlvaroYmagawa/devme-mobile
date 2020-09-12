import React from 'react';
import App from './src';

// SERVICES
import { initializeFirebase } from './src/services/firebase';

export default function Root() {
  // FUNCTIONS
  React.useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <App />
  );
}
