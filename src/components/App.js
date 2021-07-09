// LIBRARY
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

// HISTORY
import { history } from '../redux/configStore';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}></ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
