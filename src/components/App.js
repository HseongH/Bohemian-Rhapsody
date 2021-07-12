// LIBRARY
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

// HISTORY
import { history } from '../redux/configStore';

// PAGES
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Write from '../pages/Write';
import Modify from '../pages/Modify';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Likes from '../pages/Likes';

// COMPONENTS
import Header from './Header';
import AddBtn from './AddBtn';
import Permit from './Permit';

// ELEMENTS
import { Grid } from '../elements';

// STYLE
import GlobalStyle from '../common/globalStyle';

function App() {
  return (
    <>
      <Grid style={{ maxWidth: '1440px', position: 'relative' }} margin="0px auto">
        <GlobalStyle />
        <Header />

        <ConnectedRouter history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:postId" exact component={Detail} />
          <Route path="/write" exact component={Write} />
          <Route path="/modify" exact component={Modify} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/likes" exact component={Likes} />
        </ConnectedRouter>

        <Permit>
          <AddBtn />
        </Permit>
      </Grid>
    </>
  );
}

export default App;
